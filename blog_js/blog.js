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

blog.truncateArticles = function() {
  $('main p:not(:first-child)').hide();
  $('body').on('click', '.read-more', function(event) {
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};
//sort rawData function
blog.sortArticles = function(){
  blog.sortRawData.sort = function (a, b) {
    if (a.publishedOn < b.publishedOn) {
      return 1;
    }
    if (a.publishedOn > b.publishedOn) {
      return -1;
    }
    return 0;
  };
};

// blog.getAuthList = function() {
//
//   $('#authButton').find('.author').html(this.author);
//   $('select').appendtoChild($authButton);
//   $authButton.on('click', function() {
//   $authorList.find('.author').html(this.author);
//   $('author').firstChild($dropDown); });
//   $('#author').change(function() {
//   var $clickedAuth = $('#author').find(':selected').text();
//     $('article').hide();
//     $selectedAuth.show();
// });
//
// $catButton.on('click', function() {
//   $acategoryList.find('.category').html(this.category);
//   $('category').firstChild($dropDown); });
//   $('article a').on('click', function() {
//     event.preventDefault();
//     $(this).prev().children('.hide').toggle();
//   });
//   $('#category').change(function() {
//   var $clickedCat = $('#author').find(':selected').text();
//     $('article').hide();
//     $clickedCat.show();
// });
