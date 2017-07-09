// This version is modified (limited) for Codepen (https://blog.codepen.io/2017/03/31/codepen-going-https/).
// Original code is commented at the bottom of the script.
// Full project can be found at https://github.com/kirkdrichardson/quotable

$(document).ready(function(){
  getQuote(); // loads a new quote by default
  // new quote when "..." button is pressed
  $("#quoteBtn").click(function() {
    getQuote();
  });
  // opens a new window with a suggested tweet
  $("#tweetBtn").click(function() {
    twitterQuery();
  })


  //#######################################//
  // ####    Function Definitions    #### //
  //#####################################//

  // selects a random quote from an aray of JSON objects
  function getQuote() {
    // get random index (since lower bound is always 0, we use arr.length directly)
    var i = Math.floor(Math.random() * quoteArr.length);
    var json = quoteArr[i];
      $(".text").html(
        "<p class='quote'>" + json.quote + "</p>" +
        "<p class='name'>- " + json.author + "</p>"
      )
    }

// opens a pre-formated Twitter post by %xx encoding the quote
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

// example quote database
var quoteArr = [
{"author": "Rick Osborne", "quote": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."},
{"author": "Douglas Adams", "quote": "I love deadlines. I like the whooshing sound they make as they fly by."},
{"author": "Tom Van Vleck", "quote": "We know about as much about software quality problems as they knew about the Black Plague in the 1600s. We've seen the victims' agonies and helped burn the corpses. We don't know what causes it; we don't really know if there is only one disease. We just suffer - and keep pouring our sewage into our water supply."},
{"author": "Jeff Atwood", "quote": "In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customer's shifting idea of what their problem is."},
{"author": "Unknown", "quote": "XML is like violence - if it doesn't solve your problems, you are not using enough of it."},
{"author": "Bjarne Stroustrup", "quote": "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone."},
{"author": "Mitch Ratcliffe", "quote": "A computer lets you make more mistakes faster than any other invention in human history, with the possible exceptions of handguns and tequila."},
{"author": "Jeremy S. Anderson", "quote": "There are two major products that come out of Berkeley: LSD and UNIX. We don't believe this to be a coincidence."},
{"author": "James O. Coplien", "quote": "You should name a variable using the same care with which you name a first-born child."},
{"author": "Gavin Russell Baker", "quote": "C++ : Where friends have access to your private members."},
{"author": "Bill Gates", "quote": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight."},
{"author": "N.J. Rubenking", "quote": "Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time."},
{"author": "Alan Kay", "quote": "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves."}
];



//##################################################//
//##    end of active code: API version below     ##//
//##################################################//

// queries the API (endpoint) for a new quote & wraps its properties in <p> elements
// This is the working version on Github (master branch): https://github.com/kirkdrichardson/quotable
// It is replaced w/ a demo version here b/c the API uses http rather than https (not allowed on Codepen)
/*
function getQuote() {
var endpoint = "http://quotes.stormconsultancy.co.uk/random.json";
$.getJSON(endpoint, function(json) {
$(".text").html(
"<p class='quote'>" + json.quote + "</p>" +
"<p class='name'>- " + json.author + "</p>"
)
});
}
*/
