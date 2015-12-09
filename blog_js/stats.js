//stats object
var stats = {};
var statData = '';

//
stats.getData = function () {
  $.getJSON('./blog_js/hackeripsum.json', function(data) {
    statData = data;
  }).done(numberOfArticles);
};

//function number of articles
function numberOfArticles() {
   return $('#stats-auth').html('<p>Number of articles: ' + statData.length + '</p>');
 };



stats.getData();
