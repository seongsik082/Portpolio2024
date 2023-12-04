$(function(){

    $(window).scroll(function(){
        var position = $(window).scrollTop();
        console.log(position);
        
        
        if(position>350) {
            $('.wBar').width(400)
            $('.ball').css({'left':22+'%'})
        }

    })


})