//handlbars
//code structure from javascriptissexy.com
$(function () {
  // get template script
var templateScript = $("#article-template").html();
  // compile template
var compileTemplate = Handlebars.compile(templateScript);
 // define object
 //will adapt this to form and write in markdown
var newArticle = new Article(blog.rawData[0]) {
  title: $('#art-title').val(),
  category: $('#art-category').val(),
  author: $('#art-author').val(),
  authorUrl: $('#art-authorUrl').val(),
  body: $('#art-body').val(),
  publishedOn: $('#art-publishedOn').val(),
  };
// pass formData to template
var compiledHtml = compileTemplate(newArticle);
// Add the compiled html to the page
// $('.content-placeholder').newArticle.toHTML();
$('.content-placeholder').html(compiledHtml);
//append - write code
});
