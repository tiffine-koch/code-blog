blog.truncateArticle = function() {
  $('article p:not(:first-child)').hide();
  $('read-on').on('click'),function(event){
    event.preventDefault;
      $(this).parent().find('p').fadeIn();
      $(this).hide();
  };
}

$function(){
//set up the blog with the raw data
blog.sortArticle();
blog.createArticle();
//

//
blog.truncateArticle();
}

<a href="#" class="read-on">Read More</a>
