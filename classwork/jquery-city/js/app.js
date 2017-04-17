// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth


// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
// $("#first").click(function() {
//     console.log("1");
//     $('#bigimage').attr('src','img/1.jpg');
// });

// $("#second").click(function() {
//     console.log("2");
//     $('#bigimage').attr('src','img/2.jpg');
// });

// $("#third").click(function() {
//     console.log("3");
//     $('#bigimage').attr('src','img/3.jpg');
// });

// $("#fourth").click(function() {
//     console.log("4");
//     $('#bigimage').attr('src','img/4.jpg');
// });


// $("#first").click(function() {
//     console.log("1");
//     $('#bigimage').attr('src','img/1.jpg');
// });


//1. Target all thumbnails with a click event
//2. Get source attb of clicked img
//3. Change big image attribute to selected attribute

$(".thumb").click(function() {
    //THIS = clicked element
    //find the source of clicked attribute
    //make it an variable
    var newSrc = $(this).attr('src');
    //Replace bigImage with New source
    $('#bigimage').attr('src', newSrc);

});
