//blog object
var blog = {};
blog.articleObjects = [];

blog.createArticles = function() {
  for (var i = 0; i < this.rawData.length; i++) {
    var newArticle = new Article(this.rawData[i]);
    newArticle.toHTML();
    this.articleObjects.push(newArticle);
  }
  $('#template').remove();
};
//from class notes - Brook Riggio
blog.truncateArticles = function() {
  $('.body p:not(:first-child)').hide();
  $('main').on('click', '.read-more', function(event) {
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};
//sort rawData function
blog.sortArticles = function(){
  blog.rawData.sort(function (a, b) {
    if (a.publishedOn < b.publishedOn) {
      return 1;
    }
    if (a.publishedOn > b.publishedOn) {
      return -1;
    }
    return 0;
  });
};
//pair programmed with Robert Hill to create this function
blog.createFilterList = function(array, prop) {
  for (var i = 0; i < this.rawData.length; i++) {
    var x = this.rawData[i][prop];
    if(array.indexOf(x) === -1){
    array.push(x);
    }
  }

  for (var i = 0; i < this.rawData.length; i++) {
    var $opt = $('<option></option>');
    $opt.attr('value', array[i]);
    $opt.attr('id', array[i]);
    $opt.text(array[i]);
    $('#'+prop + 'List').append($opt);
  }
};
//filter Categories in dropDown
blog.filterList = function(){
  blog.createFilterList(blog.authDropDown, 'author');
  blog.createFilterList(blog.catDropDown, 'category');
  $('#authDropDown').change(function() {
    $('main').find('article').attr('selected', true);
    if($(this).val() !== 'none') {
      $('main').find('article').show();
      console.log(this.value);
    } else {
      $('main').find('.category:not(:contains(' + $(this).val() + '))').parents('article').hide();
    }
  });
  $('#catDropDown').change(function() {
    $('main').find('article').attr('selected', true);
    if($(this).val() !== 'none') {
      $('main').find('article').show();
      console.log(this.value);
    } else {
      $('main').find('.category:not(:contains(' + $(this).val() + '))').parents('article').hide();
    }
  });
};
