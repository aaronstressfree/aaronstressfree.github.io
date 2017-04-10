var total = 0;

//when this HTML element is clicked
$("#a10").click(function() {
  //add 10 to total
  total = total + 10
  //and send back to HTML
  $('#out').text(total);
});

$("#a20").click(function() {
  total = total + 20
  $('#out').text(total);
});

$("#a30").click(function() {
  total = total + 30
  $('#out').text(total);
});

$("#n10").click(function() {
  total = total - 20
  $('#out').text(total);
});

$("#n20").click(function() {
  total = total - 20
  $('#out').text(total);
});

$("#n30").click(function() {
  total = total - 30
  $('#out').text(total);
});

$("#out").click(function() {
  total = 0
  $('#out').text(total);
  $('#out').css({'background-color':'white', 'color': 'black'})

});

$("#red").click(function() {
    $('#out').css({'background-color':'red', 'color': 'white'})
});

$("#blue").click(function() {
    $('#out').css({'background-color':'blue', 'color': 'white'})
});

//test if it works
console.log('hello');
