//blog object
var blog = {};
//var util = {};
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
//script notes 301 to create this function
blog.createFilterList = function() {
  $('article').each(function() {
    var val = $(this).find('.author').text();
    var option = ('<option value="' + val + '">' + val + '</option>');
    $('#authDropDown').append(option);

    val = $(this).find('.category').text();
    option = '<option value="' + val + '">' + val + '</option>';
    if ($('#catDropDown option[value=' + val + ']').length === 0) {
      $('#catDropDown').append(option);
    }
  });
};
//pair programmed with Robert Hill
blog.filterAuthList = function(){
  $('#authDropDown').on('change', function() {
    $('main').find('article').attr('selected', true);
    if($(this).val() !== 'none') {
      $('main').find('.category:not(:contains(' + $(this).val() + '))').parents('article').hide();
    } else {
      $('main').find('article').show();
      console.log(this.value);
    }
    $('#catDropDown').val('');
  });
};
blog.filterCatList = function(){
  $('#catDropDown').on('change', function() {
    $('main').find('article').attr('selected', true);
    if($(this).val() !== 'none') {
      $('main').find('.category:not(:contains(' + $(this).val() + '))').parents('article').hide();
    } else {
      $('main').find('article').show();
      console.log(this.value);
    }
    $('#authDropDown').val('');
  });
};
//navigation control - needs work to be built here
