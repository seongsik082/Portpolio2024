$(function () {
  setTimeout(function () {
    $(".intro img").animate({ opacity: 1 }, 1000);
  }, 2000);

   $('.intro').mousewheel(function(event,delta){
    if(delta>0)
    {
      $(this).stop().animate({'top':'-100%'},1500)
    }
    
   })
   $('.cd_inner').click(function(){
      $('.intro').stop().animate({'top':'0%'},1500)
   })
   $('.logi').stop().mouseenter(function(){
      $('.bubble1').animate({'opacity':1},1000)
   })
   $('.logi').stop().mouseleave(function(){
    $('.bubble1').animate({'opacity':0},2000)
 })
// 음악 재생관련
let m_count = 1; 
let m_txt = ['러브 쉿!', 'Taxi', 'Glassy']

$('.prev_btn').click(function(){
  m_count--;
  
  if(m_count == 0) m_count = 3;
  $('.music_btn em').text(m_txt[m_count-1]);
  $('.cd_inner').find('img').attr({'src':"img/main_cd"+m_count+".png"});
  $('.vid').find('source').attr({'src':"img/music"+m_count+".mp4"});
  var video = document.getElementById('video');
  video.load();
})
$('.next_btn').click(function(){
  m_count++;
  if(m_count == 4) m_count = 1
  $('.music_btn em').text(m_txt[m_count-1])     
  $('.cd_inner').find('img').attr({'src':"img/main_cd"+m_count+".png"});
  $('.vid').find('source').attr({'src':"img/music"+m_count+".mp4"});
  var video = document.getElementById('video');
  video.load();
})
let c_count = 0;
$('.change_btn').click(function(){
  if(c_count == 0){
    $('.music_btn').find('img').eq(1).attr({'src':'img/play_btn.png'})
    $('.cd_inner').css({'animation-play-state':'paused'})
    $('.cd p').css({'animation-play-state':'paused'})
    var vid = document.getElementById("video"); 
    vid.pause();
    c_count++;
  }
  else if (c_count == 1){
    $('.music_btn').find('img').eq(1).attr({'src':'img/stop_btn.png'})
    $('.cd_inner').css({'animation-play-state':'running'})
    $('.cd p').css({'animation-play-state':'running'})
    var vid = document.getElementById("video"); 
    vid.play();
    c_count--;
  }
})





  
});
