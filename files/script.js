$(document).ready(function(){
  var endpoint = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
  $("#newQuote").click(function(){
    $.getJSON(endpoint, function(json){
      $(".text").html(JSON.stringify(json));
    });
});
});

// myBtn styling
btn = document.getElementById('myBtn');


// create an XMLHttpRequest object
// var endpoint = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

// function loadObj() {
//   console.log('function started')
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     console.log('second function')
//     if (this.readyState == 4 && this.status == 200){
//       // write a function to parse data and assign to inner html
//       console.log('inside if')
//       arrangeQuote(this);
//     }
//     xhttp.open("GET", endpoint, true);
//     xhttp.send();
//   };
// }
// function arrangeQuote(xml){
//   // use this to style & insert under state change condition
//   var xmlObj = xml.responseXML;
//   document.getElementById('text').innerHTML = 'HELLO WORLD';
// }


// $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
//   $("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
// });
