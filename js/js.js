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
            console.log(position)

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

    $('.top_btn').click(function(){//수정필요
        $(window).scrollTop(0);
    })
    
    
    
    $('.gnb ul li').click(function(e){
        e.preventDefault();
        var i = $(this).index();
        console.log(i)
        if(i== 0){
            var location = document.querySelector(".prof").offsetTop;
            location -= 100;
            window.scrollTo({top:location, behavior:'smooth'});
        }
        else if(i == 1) {
            var location = document.querySelector(".pro1").offsetTop;
            location -= 100;
            window.scrollTo({top:location, behavior:'smooth'});
        }
        else if(i == 2) {
            var location = document.querySelector(".pro2").offsetTop;
            location -= 100;
            window.scrollTo({top:location, behavior:'smooth'});
        }
        else if(i == 3) {
            var location = document.querySelector(".pro3").offsetTop;
            location -= 100;
            window.scrollTo({top:location, behavior:'smooth'});
        }


        

    })


})