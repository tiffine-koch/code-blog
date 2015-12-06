$(document ).ready(function() {
  blog.createArticles();
  blog.sortArticles();
  blog.truncateArticles();
  createFilterList();
  blog.filterList();
  // blog.filterAuth();
  // blog.filterCat();
  // blog.showBio();
});
