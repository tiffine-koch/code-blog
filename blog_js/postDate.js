Article.protoype.postDate = function(date);
var today = new Date();
var dd = parseInt(today,getDate());
var mm = parseInt(today,getMonth() + 1);
var yyyy = parseInt(today,getYear());

var year = parseInt(date.slice(0.4))

var OneDay

var differentDays

$(document).ready(function() {
  blog.createAll();
  $('#post').remove();
  blog.truncateArticles();
}
