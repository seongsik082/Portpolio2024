$(function(){
    $('.prod>ul>li').mouseenter(function(){
        $(this).find('ul').stop().animate({'opacity':1},1000);
    })
    $('.prod>ul>li').mouseleave(function(){
        $(this).find('ul').stop().animate({'opacity':0},1000);
    })


})