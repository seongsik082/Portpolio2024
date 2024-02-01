$(function(){
    $('html,body').stop().animate({'scrollTop':0})
    var wd = $(window).width();

    setTimeout(function(){
        $('.intro').css({'display':'none'})
        $('html, body').removeClass('fix')
        
        var location = document.querySelector(".prof").offsetTop;
        location -= 100;
        window.scrollTo({top:location, behavior:'smooth'});
    },3000)
    window.addEventListener(`resize`, function() {
        wd = $(this).width();
        console.log(wd)
        $('html, body').width(wd);
        if(wd<769){
            $('header').removeClass('smallheader');
        }
    });

    
        $(window).scroll(function(){
            var position = $(window).scrollTop();
            

            if(position<=10){ 
                $('header').removeClass('smallheader');
                // css 애니메이션 재시작(환영합니다.)
                $('main article').addClass('tracking-in-contract-bck-top')
                $('main article p').addClass('blur-out-expand-fwd')
            }
            else {
                if(wd>769){
                    $('header').addClass('smallheader');
                }
                else{
                    $('header').css({position:'fixed'})
                }
                $('main article').removeClass('tracking-in-contract-bck-top')
                $('main article p').removeClass('blur-out-expand-fwd')
            }

            //해당될때와 아닐때를 구분하기 위해 위에 구문과 나눔
            if(position>900 && position<2000) {
                document.getElementById("m1").focus();
            }
            else {
                document.getElementById("m1").blur();
            }

            if(position>2300 && position<3400) {
                document.getElementById("m2").focus();
            }
            else {
                document.getElementById("m2").blur();
            }
            if(position>3600 && position<4700) {
                document.getElementById("m3").focus();
            }
            else {
                document.getElementById("m3").blur();
            }
            if(position>5000 && position<6100) {
                document.getElementById("m4").focus();
            }
            else {
                document.getElementById("m4").blur();
            }
            // ##############################################

            if(position == $(document).height() - $(window).height()){
                //스크롤이 끝에 도달했을때 실행될 이벤트
                $('.top_btn').css({'top':(-20)+'%'})
                $('.top_btn').css({'z-index':0})
            } else {
                //아닐때 이벤트
                $('.top_btn').css({'top':(50)+'%'})
                $('.top_btn').css({'z-index':-1})
            }
          
            
        })

    $('.top_btn').click(function(){
        $('html, body').animate({scrollTop: '0'}, 1000);
    })
    $('.logo').click(function(){
        $('html, body').animate({scrollTop: '0'}, 1000);
    })

    
    
    
    $('.gnb ul li').click(function(e){
        e.preventDefault();
        var i = $(this).index();
        console.log(i)
        if(i== 0){
            var location = document.querySelector(".prof").offsetTop;
            if(wd<769){
                location -= 100;
            }
            
            window.scrollTo({top:location, behavior:'smooth'});
        }
        else if(i == 1) {
            var location = document.querySelector(".pro1").offsetTop;
            if(wd<769){
                location -= 100;
            }
            window.scrollTo({top:location, behavior:'smooth'});
        }
        else if(i == 2) {
            var location = document.querySelector(".pro2").offsetTop;
            if(wd<769){
                location -= 100;
            }
            window.scrollTo({top:location, behavior:'smooth'});
        }
        else if(i == 3) {
            var location = document.querySelector(".pro3").offsetTop;
            if(wd<769){
                location -= 100;
            }
            window.scrollTo({top:location, behavior:'smooth'});
        }


        

    })


})