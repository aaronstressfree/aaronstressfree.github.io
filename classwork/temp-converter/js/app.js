var farTemp = 0;
var celTemp = 0;

$('#far').keyup(function(){
    //recieve value
    farTemp = $('#far').val()
    //tranform to celsius
    celTemp = (farTemp-32) / 1.8
    //send to HTML
    celTemp = Math.round(celTemp)
    $('#cel').val(celTemp)


    if (farTemp < 50) {
        console.log('It is cold!')
        $('.container').css({'background-color':'#B4EAFF'})
        $('.textBox').css({'background-color':'#B4EAFF'})

    }

    if (farTemp < 75 && farTemp > 50) {
        console.log('It is decent!')
        $('.container').css({'background-color':'#C4FFB5'})
        $('.textBox').css({'background-color':'#C4FFB5'})
    }

    if (farTemp > 75) {
        console.log('It is hot!')
        $('.container').css({'background-color':'#FF8F67'})
        $('.textBox').css({'background-color':'#FF8F67'})
    }
})

$('#cel').keyup(function(){
    //recieve value
    celTemp = $('#cel').val()
    //tranform to farenheight
    farTemp = (celTemp*1.8) + 32
    //send to HTML
    farTemp = Math.round(farTemp)
    $('#far').val(farTemp)

})
