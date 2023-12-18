$(function(){

    $('.gly_img>div').click(function(){
        var i = $(this).index();
        $('.img_box_s').css({'z-index':5})
        $('.img_box_s img').eq(i).css({'z-index': 5, 'width':700, 'height':750, 'opacity':1, 'left':0, 'top':0})
        $('.gly_img').css({'box-shadow': '0 0 12 #444'})
    })

    $('.img_box_s img').click(function(){
        $('.img_box_s').css({'z-index':-1})
        $(this).css({'z-index': -1, 'width':140, 'height':140, 'opacity':0})
        $('.gly_img').css({'box-shadow': '0 0 12 #444;'})
    })

})