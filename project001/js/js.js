 // 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요
$(function(){
  var aj = 0;
  var bj = 0;
  var cj = 0;
  ScrollOut({
    /* options */
  });
  
  $('.lang').click(function(){
    if(cj==0){
      $('.util ol>li:nth-child(1)').animate({'top':100+'%',opacity: 1})
      $('.util ol>li:nth-child(2)').animate({'top':200+'%',opacity: 1})
      cj++;
    }
    else if(cj==1){
      $('.util ol>li:nth-child(1)').animate({'top':-100+'%',opacity: 0})
      $('.util ol>li:nth-child(2)').animate({'top':-200+'%',opacity: 0})
      cj--;
    }
    
  })


  $( "#datepicker" ).datepicker({
    dateFormat: 'yy-mm-dd' //달력 날짜 형태
           ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
           ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
           ,changeYear: true //option값 년 선택 가능
           ,changeMonth: true //option값  월 선택 가능                
           ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
           ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
           ,buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
           ,buttonText: "선택" //버튼 호버 텍스트              
           ,yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
           ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
           ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
           ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
           ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
           ,minDate: "-0Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
           ,maxDate: "+3y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
           ,onSelect: function(di,inst) {
            $('.text_form2').text(di)
            $('.cal001').stop().fadeOut()
            bj =0;
        }
 
  }); 

  
  
  // 예약시스템설정
// 정보가져오기
// 변수설정




// 버튼을클릭했을때 정보를 가져와라

$('#reserve-button').click(function(e){
  e.preventDefault()
let selectDate =  $( "#datepicker" ).datepicker('getDate');
let num1 = $('#a_num').text()
let num2 = $('#c_num').text()
let num3 = $('#b_num').text()
let pname = $('.text_form').text()
let selectMon = selectDate.getMonth()
// selectMon +1로 출력
let selectday = selectDate.getDate()
let bi = $('.text_form2').text()
if(pname == "감귤피자체험")
{
  $('.fim img').attr('src',"img/ex1.jpg")
  $('.guide').text("제주감귤진피 및 감귤마멀레이드를 활용한 감귤피자만들기 체험프로그램입니다.")
}
else if(pname == "감귤따기체험")
{
  $('.fim img').attr('src',"img/ex2.jpg")
  $('.guide').text("감귤박물관에 감귤따기체험기간은 11월부터 1월까지입니다. 자세한 문의사항은 064-760-6400~8로 전화주시면 됩니다.")
}
else if(pname == "쿠키머핀체험")
{
  $('.fim img').attr('src',"img/ex3.jpg")
  $('.guide').text("제주감귤을 이용하여 감귤머핀, 쿠키, 찹살떡 만들기 체험을 즐길 수 있는 프로그램입니다.")
} 
if(pname == "원하시는 체험을 선택해주세요.") alert("원하시는 체험을 선택해주세요.")


// alert(        

// '예약날짜:'+(selectMon+1)+'월'+selectday+'일'+'\n'+ '예약인원'
// +pep +'명'+'\n'+ '프로그램명:'+

// )

if( (num1 != "0" || num2 != "0" || num3 != "0")  && pname != "원하시는 체험을 선택해주세요." && bi != "원하시는 날짜를 선택해주세요."){
  
  $('.fixed article li').eq(0).find('span').text((selectMon+1)+'월'+selectday+'일')
  $('.fixed article li').eq(1).find('span').text('성인 : '+num1 +'명' +' 어린이 : '+num2 +'명'+' 유아 : '+num3 +'명')
  $('.fixed article li').eq(2).find('span').text(pname);

    

  $('.fixed').addClass('on')
  $('body').addClass('fix')
}



});




$('.fixed article p').click(function(){

$('.fixed').removeClass('on')
$('body').removeClass('fix')
})


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
  let aa = 0
  $('.search a').click(function(){
    if(aa==0){
      $('.search>div').fadeIn()
      $('.search>div').css({'top':110+'%'})
      
      aa++;
    }
    else if(aa==1){
      $('.search>div').fadeOut()
      $('.search>div').css({'top':0+'%'})
      aa--;
    }
    

  })


  $('.box3-2 li').click(function(e){
    e.preventDefault();
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
    if(cc==-4){
      cc=0
      $('.trailer ul').css({'left': 0})
    }
    
  
  
})

$('.trailer li').click(function(){
  var th = $(this).index();
  var im = $('.trailer li img').eq(th).attr('src');
  console.log(im)
  $('.container li img').attr('src',im);

})




})