$(function() {

    var i = 0;
    let toggle = true;

    function slide(){
        i++;
        if(i==3) i=0;
        $('.slide img').attr('src',"img/slide"+(i+1)+".jpg")
    }

    let interval = setInterval(slide,2000);
    
    // setInterval(() => {
    //     // $('.slide ul').animate({'left':(-100*i)+'%'},1000)
        
    // }, 2000);

    $('#prev').click(function(){
        clearInterval(interval);
        i--;
        if(i==-1)i =2;
        $('.slide img').attr('src',"img/slide"+(i+1)+".jpg")
        $('#stop').attr('src', "img/play.png");
        toggle = false;
    })
    $('#stop').click(function(){
        if(toggle){
            // 반복 중단
            clearInterval(interval);
            toggle = false;
            $('#stop').attr('src', "img/play.png");
        }else{
            // 반복 재개(재시작)
            interval = setInterval(slide,2000);
            toggle = true;
            $('#stop').attr('src', "img/stop.png");
        }
    })
    $('#next').click(function(){
        clearInterval(interval);
        i++;
        if(i==3)i=0;
        $('.slide img').attr('src',"img/slide"+(i+1)+".jpg")
        $('#stop').attr('src', "img/play.png");
        toggle = false;
    })


})