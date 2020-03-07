// Always test to check for a connection!
// console.log("Testing - JavaScript file has been linked correctly!");

// Find the 'count this' class on the page and animate it
{
  setTimeout( function(){
    $('.counter').each(function () {
      // Start the counting from a specified number - in this case, 0!
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
        // Speed of counter in ms, default animation style
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          // Round up the number
          $(this).text(Math.ceil(now) + "h");
        }
      });
    });
  }, 500),

  setTimeout( function(){
    $( ".fade-text" ).fadeIn( "slow", function() {
      // Animation complete
    }); // delay 500 ms
  }, 2000); // delay 500 ms
}
