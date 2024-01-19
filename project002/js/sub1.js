$(function(){
    let i =0;
    let hl = '<div><img src="" alt=""><p class="text1"></p><p class="text2"><button id="plus">+</button> <em>00</em> <button class="minus"> -</button></p></div>'

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
    i++
    $('.util').find('span').text(i)
    e.preventDefault()
    let ii= $(this).index()
    console.log(ii)

    // let img = $('.show').eq(ii).find('img').attr('src');
    // console.log(img)

    // let inimg = '<img src="'+img+'">'
    // console.log(inimg)
    $('.shop').find('.shop_inner').append(hl)

    $('.shop_inner>div:nth-child('+i+')').find('img').attr('src','img/sub_laptop'+(ii+1)+'.png')

    let jj = $(this).find('h2').text()
    $('.shop_inner>div:nth-child('+i+')').find('.text1').text(jj)
    $('.shop_inner').find('em').text(i)

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