//handlbars
//code structure from javascriptissexy.com
$(function () {
  // get template script
var templateScript = $("#article-template").html();
  // compile template
var compileTemplate = Handlebars.compile(templateScript);
 // define object
 //will adapt this to form and write in markdown
var newArticle = new Article(content) {
  title: $('#article-title').val(),
  category: $('#article-category').val(),
  author: $('#article-author').val(),
  authorUr;: $('#article-authorUrl').val(),
  body: $('#article-body').val(),
  publishedOn: $('#article-publishedOn').val(),
  };
// pass formData to template
var compiledHtml = compileTemplate(content);
// Add the compiled html to the page
  $('.content-placeholder').newArticle.toHTML();
//append - write code
});
