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

  // opens a pre-formated Twitter post of a %xx encoded quote
  function twitterQuery(){
    var query;
    var base = "https://twitter.com/intent/tweet?text=";
    var quote = $(".quote").text();
    var name = $(".name").text();
    var endBit = (140 - (name.length + 6)); // last index for a str splice
    // quote-name strings are reduced to 140 characters
    if ((quote.length + name.length) >= 138) {
      quote = quote.slice(0, endBit);
      query = ('"' + quote + '..." ' + name);
    }
    else {
      query = ('"' + quote + '" ' + name);
    }
    window.open(base + encodeURIComponent(query));
  }

});
