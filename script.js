$(document).ready(function(){
    $('.submitans-btn').hide()
    $('.input').hide()
    var answer = 0
    $('.startgame-btn').click(function(){
        $('.input').show()
        $('.submitans-btn').show()
        $('.startgame-btn').hide()
        $('.start-num').html(0)
        $('.end-num').html(100)
        $('.real-num').html('?')
        answer = Math.round(Math.random()*100)

        $('body').keypress(function (e) {
            var key = e.which;
            if(key == 13)  // the 'Enter' key code
             {
                var input = parseInt($('.input').val())
                var startNum = parseInt($('.start-num').html()) 
                var endNum = parseInt($('.end-num').html())
                $('.input').val('')

                // Validation of input
                if(input >= endNum || input <= startNum){
                    alert("Please input number within range")
                }
                else {
                    if(answer === input){
                        $('.real-num').html(answer)
                        alert("You lose!")
                        $('.startgame-btn').show()
                        $('.submitans-btn').hide()
                        $('.input').hide()
                    }
                    else if(answer < input){
                        $('.end-num').html(input)
                        startNum = parseInt($('.start-num').html()) 
                        endNum = parseInt($('.end-num').html())
                        if(endNum - startNum === 2){
                            alert("Next Player Lose!")
                            $('.real-num').html(answer)
                            $('.startgame-btn').show()
                            $('.submitans-btn').hide()
                            $('.input').hide()
                        }
                    }
                    else if(answer > input){
                        $('.start-num').html(input)
                        startNum = parseInt($('.start-num').html()) 
                        endNum = parseInt($('.end-num').html())
                        if(endNum - startNum === 2){
                            alert("Next Player Lose!")
                            $('.real-num').html(answer)
                            $('.startgame-btn').show()
                            $('.submitans-btn').hide()
                            $('.input').hide()
                        }
                    }
                }
             }
        });  

        $('.submitans-btn').click(function(){
            var input = parseInt($('.input').val())
            var startNum = parseInt($('.start-num').html()) 
            var endNum = parseInt($('.end-num').html())
            $('.input').val('')
            // Validation of input
            if(input >= endNum || input <= startNum){
                alert("Please input number within range")
            }
            else {
                if(answer === input){
                    $('.real-num').html(answer)
                    alert("You lose!")
                    $('.startgame-btn').show()
                    $('.submitans-btn').hide()
                    $('.input').hide()
                }
                else if(answer < input){
                    $('.end-num').html(input)
                    startNum = parseInt($('.start-num').html()) 
                    endNum = parseInt($('.end-num').html())
                    if(endNum - startNum === 2){
                        alert("Next Player Lose!")
                        $('.real-num').html(answer)
                        $('.startgame-btn').show()
                        $('.submitans-btn').hide()
                        $('.input').hide()
                    }
                }
                else if(answer > input){
                    $('.start-num').html(input)
                    startNum = parseInt($('.start-num').html()) 
                    endNum = parseInt($('.end-num').html())
                    if(endNum - startNum === 2){
                        alert("Next Player Lose!")
                        $('.real-num').html(answer)
                        $('.startgame-btn').show()
                        $('.submitans-btn').hide()
                        $('.input').hide()
                    }
                }
            }

        })
    })


})

