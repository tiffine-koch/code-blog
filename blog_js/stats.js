//stats object
var stats = {};
var statData = '';
var authorList = [];

//Ajax call
stats.getData = function () {
  $.getJSON('./blog_js/hackeripsum.json', function(data) {
    statData = data;
  }).done(numberOfArticles)
    .done(numberOfAuthors);
};
//function number of articles
function numberOfArticles() {
  return $('#stats-auth').html('<p>Number of articles: ' + statData.length + '</p>');
};

stats.totalAuthors = function () {
function numberOfAuthors () {
  statData.map(function(author) {
    var authorList = [];
    $.forEach($.unique(statData), function(){
      return $('#stats-authNumber').html('<p>Number of authors: ' + author.length + '</p>');
    });
  });
};
var authorList = [];
$.unique(authorList);

// var createAuthArray = function(author, collection) {
//   return collection.map(function(e){
//     return e[property];
//     var authorList = .push['author'];
//   });
// };

// function numberOfAuthors() {
//   statData.map(function(author){
//     return $('#stats-authNumber').html('<p>Number of authors: ' + author.length + '</p>');
//   });
// };

//stats.totalAuthors();
stats.getData();
