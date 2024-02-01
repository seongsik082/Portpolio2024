$(function(){
    let i =0;
    let pc = 0;
    let p1 =0;
    let p2 =0;
    let p3 =0;
    let p4 =0;
    let p5 =0;
    let p6 =0;

    

    $('.prod>ul>li').mouseenter(function(){
        let vi = $(this).index()
        $(this).find('ul').fadeIn()
        $('.show').find('div').eq(vi).css({display:'flex'})
    })
    $('.prod>ul>li').mouseleave(function(){
        $(this).find('ul').fadeOut()
        $('.show').find('div').css({display:'none'})
    })


$('.prod li').click(function(e){
    
    e.preventDefault()
    let ii= $(this).index()
   
    let jj = $(this).find('h2').text()
    $('.shop_inner>div:nth-child('+(ii+1)+')').find('.text1').text(jj)
    if ($(this).data('clicked')) {
        
        if(ii==0)
            {p1++;
                $('.shop_inner>div:nth-child('+(ii+1)+')').find('em').text(p1);
            }
            else if(ii==1)
            {p2++;
                $('.shop_inner>div:nth-child('+(ii+1)+')').find('em').text(p2);
            }
            else if(ii==2)
            {p3++;
                $('.shop_inner>div:nth-child('+(ii+1)+')').find('em').text(p3);
            }
            else if(ii==3)
            {p4++;
                $('.shop_inner>div:nth-child('+(ii+1)+')').find('em').text(p4);
            }
            else if(ii==4)
            {p5++;
                $('.shop_inner>div:nth-child('+(ii+1)+')').find('em').text(p5);
            }
            else if(ii==5)
            {p6++;
                $('.shop_inner>div:nth-child('+(ii+1)+')').find('em').text(p6);
            }
            
              
        // 이미 클릭된 경우, 함수를 빠져나옵니다.
        return;
    }


    // 클릭되지 않았다면 클릭 처리를 진행
    $(this).data('clicked', true);
    let hl = '<div><img src="img/sub_laptop'+(ii+1)+'.png" alt=""><p class="text1"></p><p class="text2"><button id="plus">+</button> <em>00</em> <button class="minus"> -</button></p></div>'
    $('.shop').find('.shop_inner').append(hl)
    i++;
    $('.util').find('span').text(i) 
    

    // 장바구니에 기본 셋팅하기
    
    // if(ii == 0 && p1 == 0){
    //     let hl = '<div><img src="img/sub_laptop'+(ii+1)+'.png" alt=""><p class="text1"></p><p class="text2"><button id="plus">+</button> <em>00</em> <button class="minus"> -</button></p></div>'
    //     $('.shop').find('.shop_inner').append(hl)
    //     let jj = $(this).find('h2').text()
    //     i++
    //     $('.shop_inner>div:nth-child('+ii+')').find('.text1').text(jj)
    //     p1++;
    //     $('.shop_inner>div:nth-child('+ii+')').find('em').text(p1);
    // }
    // else if(ii == 1 && p2 == 0){
    //     let hl = '<div><img src="img/sub_laptop'+(ii+1)+'.png" alt=""><p class="text1"></p><p class="text2"><button id="plus">+</button> <em>00</em> <button class="minus"> -</button></p></div>'
    //     $('.shop').find('.shop_inner').append(hl)
    //     let jj = $(this).find('h2').text()
    //     i++
    //     $('.shop_inner>div:nth-child('+ii+')').find('.text1').text(jj)
    //     p2++;
    //     $('.shop_inner>div:nth-child('+ii+')').find('em').text(p2);
    // }
    // else if(ii == 2 && p3 == 0){
    //     let hl = '<div><img src="img/sub_laptop'+(ii+1)+'.png" alt=""><p class="text1"></p><p class="text2"><button id="plus">+</button> <em>00</em> <button class="minus"> -</button></p></div>'
    //     $('.shop').find('.shop_inner').append(hl)
    //     let jj = $(this).find('h2').text()
    //     i++
    //     $('.shop_inner>div:nth-child('+ii+')').find('.text1').text(jj)
    //     p3++;
    //     $('.shop_inner>div:nth-child('+ii+')').find('em').text(p3);
    // }
    // else if(ii == 3 && p4 == 0){
    //     let hl = '<div><img src="img/sub_laptop'+(ii+1)+'.png" alt=""><p class="text1"></p><p class="text2"><button id="plus">+</button> <em>00</em> <button class="minus"> -</button></p></div>'
    //     $('.shop').find('.shop_inner').append(hl)
    //     let jj = $(this).find('h2').text()
    //     i++
    //     $('.shop_inner>div:nth-child('+ii+')').find('.text1').text(jj)
    //     p4++;
    //     $('.shop_inner>div:nth-child('+ii+')').find('em').text(p4);
    // }
    // else {
    //     if(ii==0){
    //         p1++;
    //         $('.shop_inner>div:nth-child('+ii+')').find('em').text(p1);
    //     }
    // }

    
            
           



    

})



$(document).on('click', '#plus', function() {
    if(i>0){
        i++;

        $('.util').find('span').text(i);
        $('.shop_inner').find('em').text(i);
    }
});

$(document).on('click', '.minus', function() {
    
    if(i>1){
        i--;

        $('.util').find('span').text(i);
        $('.shop_inner').find('em').text(i);
    }
    
});



 $('#buy').click(function(e){
     if(i == 0)
    {
        e.preventDefault();
       alert("상품을 선택해주세요.")
    }
})

// empty를 클릭했을때 shop section div내용을 지워라
// shop span의 변수값을 0으로 바꿔라

$('#empty').click(function(){ 
    i=0;
    $('.util').find('span').text(i)
    // $('.shop .shop_inner').html("")
    $('.shop .shop_inner').empty()
    $('.prod li').data('clicked', false);
})

//******************** */

$('.util li:nth-child(3)').click(function(e){
    $('body').addClass('on')
    $('.shop').css({display:'flex'})
})
$('.shop #back').click(function(e){
    $('body').removeClass('on')
    $('.shop').css({display:'none'})
})

})