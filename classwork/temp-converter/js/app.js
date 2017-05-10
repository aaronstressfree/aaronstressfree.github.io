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


    if (farTemp < 45) {
        console.log('It is cold!')
        $('.container').css({'background-color':'#B4EAFF'})
        $('.textBox').css({'background-color':'#B4EAFF'})
        $('.textBox').css({'color':'#666666'})
        $('.boxTitle').css({'color':'#666666'})
        $('.textBox').css({'border-bottom':'1px solid #666666'})
    } else if (farTemp < 75 && farTemp > 45) {
        console.log('It is decent!')
        $('.container').css({'background-color':'#C4FFB5'})
        $('.textBox').css({'background-color':'#C4FFB5'})
        $('.textBox').css({'color':'#666666'})
        $('.boxTitle').css({'color':'#666666'})
        $('.textBox').css({'border-bottom':'1px solid #666666'})
    } else if (farTemp > 75) {
        console.log('It is hot!')
        $('.container').css({'background-color':'#FF8F67'})
        $('.textBox').css({'background-color':'#FF8F67'})
        $('.textBox').css({'color':'white'})
        $('.boxTitle').css({'color':'white'})
        $('.textBox').css({'border-bottom':'1px solid white'})
    }


    // if (farTemp < 75 && farTemp > 50) {
    //     console.log('It is decent!')
    //     $('.container').css({'background-color':'#C4FFB5'})
    //     $('.textBox').css({'background-color':'#C4FFB5'})
    // }

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
