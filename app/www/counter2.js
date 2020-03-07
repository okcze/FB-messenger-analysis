

var $select = $("#wyszukiwanie").selectize({
});
var selectizeControl = $select[0].selectize;

selectizeControl.on('change', function() {
  setTimeout( function(){
    $('.counter2').each(function () {
      // Start the counting from a specified number - in this case, 0!
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
        // Speed of counter in ms, default animation style
        duration: 1000,
        easing: 'swing',
        step: function (now) {
          // Round up the number
          $(this).text(Math.ceil(now) + "h");
        }
      });
    }),
    setTimeout( function(){
      $( ".fade-text2" ).fadeIn( "slow", function() {
        // Animation complete
    }); // delay 500 ms
  }, 2000);
}, 300);
});
// // onChange:   function(){
//   setTimeout( function(){
//     $('.counter2').each(function () {
//       // Start the counting from a specified number - in this case, 0!
//       $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//       }, {
//         // Speed of counter in ms, default animation style
//         duration: 1000,
//         easing: 'swing',
//         step: function (now) {
//           // Round up the number
//           $(this).text(Math.ceil(now) + "h");
//         }
//       });
//     }),
//     setTimeout( function(){
//       $( ".fade-text2" ).fadeIn( "slow", function() {
//         // Animation complete
//     }, 2000); // delay 500 ms
//   }, 400);
// });
