// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요


$(function(){
    // titleBox 의 li 의 순번찾기
    $('.titleBox li').click(function(){
    //클릭한 나 자신의 순번을 변수로 지정하기
    var i = $(this).index();
    //콘솔에 확인하기
    console.log(i);
    //찾아낸 순번을 listBox안의 div의 순서에 맞게 보이기
    $('.listBox ul').css({'display':'none'});
    $('.listBox ul').eq(i).css({'display':'flex'});
    $('.titleBox li').removeClass('on');
    //클릭한 나자신에게 클래스 on값 더하기
    $(this).addClass('on')
    })


  $('.pop li').click(function(){

     var ti = $(this).text();
    
     $('.text_form').text(ti)
     $('.pop').fadeOut()
     aj = 0;
  })
  var aj = 0;
  var bj = 0;

  $('.acts').click(function(){
    if(aj == 0 ){
      $('.pop').fadeIn()
      aj=1;
    }
    else if (aj == 1){
      $('.pop').fadeOut()
      aj=0;
      
    }
  })

  $('.text_form').click(function(){
    if(aj == 0 ){
      $('.pop').fadeIn()
      aj=1;
    }
    else if (aj == 1){
      $('.pop').fadeOut()
      aj=0;
      
    }
  })


  
  $('.date').click(function(){
    if(bj == 0 ){
      $('.cal001').fadeIn()
      bj=1;
    }
    else if (bj == 1){
      $('.cal001').fadeOut()
      bj=0;
      
    }
  })

  $('.text_form2').click(function(){
    if(bj == 0 ){
      $('.cal001').fadeIn()
      bj=1;
    }
    else if (bj == 1){
      $('.cal001').fadeOut()
      bj=0;
      
    }
  })


  var ai=0;
  var bi=0;
  var ci=0;

  //################# form plus minus btn ####################
  $('.form3').children('.fa-minus-circle').click(function(){

    if(ai>0)ai--;
    $('.form3').children('.num').text(ai)

  })
  $('.form3').children('.fa-plus-circle').click(function(){

    ai++;
    $('.form3').children('.num').text(ai)

  })

  $('.form4').children('.fa-minus-circle').click(function(){

    if(bi>0)bi--;
    $('.form4').children('.num').text(bi)

  })
  $('.form4').children('.fa-plus-circle').click(function(){

    bi++;
    $('.form4').children('.num').text(bi)

  })

  $('.form5').children('.fa-minus-circle').click(function(){

    if(ci>0)ci--;
    $('.form5').children('.num').text(ci)

  })
  $('.form5').children('.fa-plus-circle').click(function(){

    ci++;
    $('.form5').children('.num').text(ci)

  })




// ********************  img btn slide  ***********************
var cc=0



$('.box4-2 .left').click(function(){
  

  if(cc<0){
    cc++;
  $('.trailer ul').css({'left':(cc*15)+'%'})
  
  }
})

$('.box4-2 .right').click(function(){

  cc--;
    $('.trailer ul').css({'left':(cc*10)+'%'})
    if(cc==-5){
      cc=0
      $('.trailer ul').css({'left': 0})
    }
    $('.container li:nth-child('+(-cc)+')')
  
  
})




})