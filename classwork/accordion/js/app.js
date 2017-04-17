v// The following can be written in 3 lines of jQuery/JavaScript!

// 1. Add a .click() handler to elements with the class of .row
// 2. Associate this .click() handler with an anoymous function (in other words, "pass" .click() and anonymous function)
// 3. Inside the body of the anonymous function, use the concept of $(this) to .find() the <div class="wrapper">
// 4. Once you find the .wrapper, use the .slideToggle() function to trigger the desired behavior

//select clicked element and find the wrapper class
//Toggle the display CSS property
$(".row").click(function() {
    var element = $(this).find('.wrapper');
    $(element).slideToggle(400);
})

//LOOK INTO CSS
    // var element = $(this).find('.wrapper').css('display', 'none');
