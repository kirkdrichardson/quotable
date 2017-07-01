$(document).ready(function(){
  var endpoint = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
  $("#newQuote").click(function(){
    $.getJSON(endpoint, function(json){
      $(".text").html(JSON.stringify(json));
    });
});
});


// $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
//   $("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
// });
