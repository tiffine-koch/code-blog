var newArticle;

//object constructor - article objects that all have the same properties
var Article = function(prop) {
  this.title = prop.title;
  this.category = prop.category;
  this.author = prop.author;
  this.authorUrl = prop.authorUrl;
  this.publishedOn = prop.publishedOn;
  this.body = prop.body;
};
//protoype to render in html
Article.prototype.toHTML = function() {
  var $article = $('#template').clone();
  $article.removeAttr('id');
  $article.find('.title').html(this.title);
  $article.find('.category').html(this.category);
  $article.find('.author').html(this.author);
  $article.find('.authorUrl').html(this.authorUrl);
  $article.find('.body').html(this.body);
  $article.find('.publishedOn').html(this.getDate());
  $('main').append($article);
  var $string = ('<option>' + this.author + '</option>');
  $('#authDropDown').append($string);
  var $string = ('<option>' + this.category + '</option>');
  $('#catDropDown').append($string);
};
Article.prototype.getDate = function() {
  var returnDate = (Math.floor((new Date - new Date(this.publishedOn))/86400000)
   + ' Days Ago');
  return returnDate;
};
