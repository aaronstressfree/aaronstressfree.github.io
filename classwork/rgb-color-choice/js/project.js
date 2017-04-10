// 1. Use document.querySelector() and assign the .onclick event to #color-button

// 2. Write a function, named changeColor, that is called when #color-button is clicked

// 3. Inside of the function changeColor, use variables to store the <input> values from #red, #green, and #blue
// - Use .value to get the values from the inputs
// HINT: var red = document.querySelector('red').value;

// 4. Create a variable, named colorStr, which concatenates the above red, green, and blue variables into the format:
// rgb(x, y, z)
// - If the user enters: 100, 150, and 200, colorStr should be: rgb(100, 150, 200)

// 5. Use .innerHTML to change the text inside of #colorful-text to colorStr

// 6. Use .style.background to change the background of #wrapper to colorStr

var colorBtn = document.querySelector("#color-button");
var colorback = document.querySelector("#wrapper");


colorBtn.onclick = function(){
    //check the button works
    console.log('color button!')
    //read the color input values
    var red = document.querySelector('#red').value;
    var green =document.querySelector('#green').value;
    var blue = document.querySelector('#blue').value;
    // format to RGB (concatonate)
    var rgbNumber = ("rgb" + '('+red + ',' + green +','+ blue + ')' );
    // console.log(blue);
    console.log(rgbNumber);
    //Send the rgb number back to HTML
    document.querySelector('#colorful-text').innerHTML = rgbNumber;
    colorback.style.background = rgbNumber;
    }
