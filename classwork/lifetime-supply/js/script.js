//store the global variables
var calculate = document.querySelector("#click-me");
//create an on click function
//store inputs as variables
//minus current age from desired
//years left in life * drinks per day *365
//push drink and solution to HTML

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

//calculate the solution
    var solution = (desiredAge - currentAge)*(numPerDay * 365);
    console.log(solution);

//send solution and item to HTML
    document.querySelector('#solution').innerHTML = solution;
    document.querySelector('#drink').innerHTML = item;

}
