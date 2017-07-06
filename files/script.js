
$(document).ready(function(){
  var endpoint = "http://quotes.stormconsultancy.co.uk/random.json";
  $("#quoteBtn").click(function() {
    $.getJSON(endpoint, function(json) {
      $(".text").html(
        json.quote + "<p class='name'>- " + (json.author)+ "</p>")
      });
    });
  });




// $(document).ready(function(){
//   var endpoint = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
//   $("#myBtn").click(function(){
//     $("p.text").load(endpoint, function(responseTxt, statusTxt, xhr){
//       console.log(statusTxt);
//       if (statusTxt != "success"){
//         console.log("Error: " + xhr.status + ": " + xhr.statusTxt);
//       }
//     });
//   });
// });


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

// });
