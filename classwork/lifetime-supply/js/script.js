//store the global variables
var calculate = document.querySelector("#click-me");

    //create an on click function
calculate.onclick = function(){

    console.log('calculatebutton');
    //store the local variables
    var currentAge = document.querySelector("#age").value;
    var desiredAge = document.querySelector("#max-age").value;
    var item = document.querySelector("#item").value;
    var numPerDay = document.querySelector("#num-per-day").value;
    console.log(desiredAge);

    //make numbered strings into integers
    currentAge = parseInt(currentAge);
    desiredAge = parseInt(desiredAge);
    numPerDay = parseInt(numPerDay);

    //calculate the solution using order of operations
    var solution = (desiredAge - currentAge)*(numPerDay * 365);
    console.log(solution);

    //send solution and item to HTML
    document.querySelector('#solution').innerHTML = solution;
    document.querySelector('#drink').innerHTML = item;

}
