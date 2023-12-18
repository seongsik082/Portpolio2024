$(document).ready(function(){
  

     // //추가할 이미지와 같은 이름의 문자열을 배열에 담고
     // const images = ['yulog_1st_1.png','yulog_1st_2.png','yulog_1st_3.png','yulog_1st_4.png'];
        
     // //images.length를 곱해서 랜덤하게 돌린 뒤 Math.floor로 정수값으로 만들어준 후 0,1,2까지의 랜덤한 숫자가 나오게 되면
     // const chosenImage = images[Math.floor(Math.random()*images.length)];
     
     // //document.createElement('추가할 엘리먼트 태그');로 엘리먼트를 생성한다.
     // const bgImage = document.createElement('img');
     
     // //bgImage.src로 src소스 이름에 접근해서 백틱을 이용해 `img/${랜덤하게 선택된 이미지 변수 chosenImage}`; 를 대입.
     // bgImage.src = `img/yulog/${chosenImage}`;
     
     // //body에 생성한 엘리먼트를 자식으로 만들자.
     // document.body.appendChild(bgImage);
     var delay = 150;
     $('.image').each(function(index){
          $(this).delay(delay * index).fadeIn(10);
     })

     setTimeout(function(){
          $('.yulog_1st>div:nth-child(1)').animate({'left':14+'%','top':6+'%'},700);
          $('.yulog_1st>div:nth-child(2)').animate({'left':12+'%','top':31+'%'},700);
          $('.yulog_1st>div:nth-child(3)').animate({'left':74+'%','top':23+'%','z-index': 20},700);
          $('.yulog_1st>div:nth-child(4)').animate({'left':75+'%','top':2+'%' },700);
          $('.yulog_1st>div:nth-child(5)').animate({'left':40+'%','top':1+'%' },700);
          $('.yulog_1st>div:nth-child(6)').animate({'left':23+'%','top':42+'%' },700);
          $('.yulog_1st>div:nth-child(11)').animate({'left':56+'%','top':47+'%', 'z-index':21},700);
          $('.yulog_1st>div:nth-child(7)').animate({'left':24+'%','top':10+'%' },700);
          $('.yulog_1st>div:nth-child(9)').animate({'left':50+'%','top':4+'%' },700);
          $('.yulog_1st>div:nth-child(10)').animate({'left':60+'%','top':11+'%' },700);
          $('.yulog_1st>div:nth-child(8)').animate({'left':38+'%','top':30+'%','z-index':20 ,'width': 400 ,'height':400 },700);
     }, delay * $('.image').length)

     var carousel = $(".carousel"),
    items = $(".item"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
    items.css({
    "-webkit-transform": "rotateY("+(-currdeg)+"deg)",
    "-moz-transform": "rotateY("+(-currdeg)+"deg)",
    "-o-transform": "rotateY("+(-currdeg)+"deg)",
    "transform": "rotateY("+(-currdeg)+"deg)"
  });
}
let ip = 0;
$('.yulog_3rd>div:nth-child(2)').mouseenter(function(){
  $('.yulog_3rd>div:nth-child(2) .bottom').css({left:-100+'%'})
  if(ip == 0 || ip == 1) {
    $('.yulog_3rd .container1').css({'display':'block'})
    ip=2;
}
})

// 처음 드래그 요소가 위치하고 있는 좌측 박스 영역
const container = document.querySelector(".container1");

container.addEventListener("dragover", (e) => {
  e.preventDefault();
  //console.log("드래그 요소가 '첫' 번째 박스 영역에 계속 위치하면 발생하는 이벤트");
});
container.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log("드래그 요소가 '첫' 번째 박스 영역에 드롭");
});


// 드래그 요소가 이동하여 위치할 우측 박스 영역
const container2 = document.querySelector(".container2");

container2.addEventListener("dragover", (e) => {
  e.preventDefault();
  //console.log("드래그 요소가 '두' 번째 박스 영역에 계속 위치하면 발생하는 이벤트");
});
container2.addEventListener("drop", (e) => {
  $('.yulog_3rd .container1').css({'display':'none'})
  $(document).snowfall({image :"img/flake.png", minSize: 20, maxSize:45});
  // e.preventDefault();
});



})