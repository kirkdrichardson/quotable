


$(document).ready(function(){
  getQuote(); // loads a new quote by default
  // new quote when "..." button is pressed
  $("#quoteBtn").click(function() {
    getQuote();
  });
  // prepares a quote to be posted as a tweet
  $("#tweetBtn").click(function() {
    twitterQuery();
  })
  //#######################################//
  // ####    Function Definitions    #### //
  //#####################################//

  // queries the API (endpoint) for a new quote & wraps its properties in <p> elements
  function getQuote() {
    var endpoint = "http://quotes.stormconsultancy.co.uk/random.json";
    $.getJSON(endpoint, function(json) {
      $(".text").html(
        "<p class='quote'>" + json.quote + "</p>" +
        "<p class='name'>- " + json.author + "</p>"
      )
    });
  }

  // returns a url for a Twitter post
  // Known issue: not all extended ASCII char encode correctly (e.g. ++ in "C++")
  // a ; will pass through the encodeURI function & cut short the tweet
  function twitterQuery(){
    var query;
    var base = "https://twitter.com/intent/tweet?text=";
    var quote = $(".quote").text();
    var name = $(".name").text();
    var endBit = (140 - (name.length + 6));
    if ((quote.length + name.length) >= 138) {
      quote = quote.slice(0, endBit);
      query = ('"' + quote + '..." ' + name);
    }
    else {
      query = ('"' + quote + '" ' + name);
    }
    // var query = encodeURI(quote + " " + name);
    // var tweet = base + query;
    window.open(base + encodeURI(query));
  }

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
