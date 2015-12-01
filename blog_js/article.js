//blog object
var blog = {};
var articleObjects = [];
var newArticle;
//object constructor - article objects that all have the same properties
var Article = function(prop) {
  this.title = prop.title;
  this.category = prop.category;
  this.author = prop.author;
  this.authorUrl = prop.authorUrl;
  this.publishedOn = prop.publishedOn;
  this.body = prop.body;
}
//protoype to render in html


Article.prototype.toHTML = function() {
  var $article = $('#template').clone();
    $article.removeAttr('id');
    $article.find('.title').html(this.title);
    $article.find('.category').html(this.category);
    $article.find('.author').html(this.author);
    $article.find('.authorUrl').html(this.authorUrl);
    $article.find('.publishedOn').html(this.publishedOn);
    $article.find('.body').html(this.body);
    $('main').append($article);
    //console.log($article);
}
function createArticle () {
  for (var i = 0; i < rawData.length; i++) {
    var newArticle = new Article(rawData[i]);
    newArticle.toHTML();
    articleObjects.push(newArticle);
    //console.log(articleObjects);
    //console.log(i);
  }
}
createArticle();
