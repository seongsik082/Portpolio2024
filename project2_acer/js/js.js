$(function () {
  var wht = $(window).height();
  var wt = $(window).width();
  var bht = $("body").height();
  var sht = $(".sect2").height();
  var hi = -3;

  console.log(sht);
  console.log(bht);

  setTimeout(function () {
    $(".sect1 .txt").addClass("on");
    $(".sect1 .scr").addClass("on");
  }, 1100);

  $(window).scroll(function () {
    var position = $(window).scrollTop();

    
    console.log(position);

    if (position > 800 && position < 4300) {
      $(".sect2").css({ position: "fixed" });
      $("html,body").height(bht);
      $(".sect3").css({ "margin-top": sht });
      $(".index").css({ opacity: 1 });
      $(".index li").removeClass();
      $(".index li").eq(0).addClass("on");
      hi++;
      $(".sect2-inner1")
        .stop()
        .animate({ top: -0.28 * hi + "%" }, 300);
    } else {
      $(".sect2").css({ position: "relative" });

      $(".sect3").css({ "margin-top": 0 });
      $(".sect2-inner1").css({ top: 100 + "%" });
      hi = 0;
    }

    if (position > 1500 && position < 2200) {
      $(".story-inner1 .wBar1").width(310);
      $(".story-inner1 .ball1").css({ left: 22 + "%" });
    } else if (position > 1800 && position < 2300) {
      $(".story-inner2 .wBar2").width(400);
      $(".story-inner2 .ball2").css({ right: 22 + "%" });
    } else if (position > 2300 && position < 2700) {
      $(".story-inner3 .wBar3").width(400);
      $(".story-inner3 .ball3").css({ left: 22 + "%" });
    } else if (position > 3300 && position < 3800) {
      $(".story-inner4 .wBar4").width(400);
      $(".story-inner4 .ball4").css({ right: 22 + "%" });
    } else if (position > 3800 && position < 4200) {
      $(".story-inner5 .wBar5").width(400);
      $(".story-inner5 .ball5").css({ left: 22 + "%" });
    } else {
      // $(".story-inner3 ").width(20); 다시 줄이기
    }

    //.sect7 효과 적용

    if (position > 6300 && position < 7000) {
      $(".sect7 > div:nth-child(1)").animate({ top: 40 + "%" }, 1000);
      $(".sect7 > div:nth-child(2)").animate({ top: 30 + "%" }, 2300);
      $(".sect7 > div:nth-child(3)").animate({ top: 53 + "%" }, 4000);
      $(".sect7 > div:nth-child(4)").animate({ top: 60 + "%" }, 5000);
      $(".sect7 > div:nth-child(5)").animate({ top: 30 + "%" }, 5600);
    } else {
    }

    if (position > 6600 && position < 7500) {
      $(".index li").removeClass();
      $(".index li").eq(1).addClass("on");
    } else if (position > 7500 && position < 8100) {
      $(".index li").removeClass();
      $(".index li").eq(2).addClass("on");
    } else if (position > 8300 && position < 9200) {
      $(".index li").removeClass();
      $(".index li").eq(3).addClass("on");
    } else if (position > 9200 && position < 10000) {
      $(".index li").removeClass();
      $(".index li").eq(4).addClass("on");
    } else {
    }
  });

  // 탑버튼
  $(".top-btn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0, // 0 까지 animation 이동합니다.
      },
      400
    ); // 속도 400
    return false;
  });

  $(".bg_wrap>div").mouseenter(function () {
    $(".bg_wrap>div:hover p svg").css({ opacity: 1 });
    var ai = $(this).index();
    console.log(ai);

    var time = setTimeout(function () {
      $(".bg_wrap>div").eq(ai).addClass("on");
      $(".bg_wrap>div:hover p svg").css({ opacity: 0 });
    }, 1000);
  });

  $(".bg_wrap>div").mouseleave(function () {
    setTimeout(function () {
      $(".bg_wrap>div").removeClass("on");
    }, 500);
    $(".bg_wrap>div:hover p svg").css({ opacity: 0 });
  });

  // 검색버튼과 로그인 버튼 활성화

  var si = 0;
  var ui = 0;
  $(".util .s1").click(function () {
    if (si == 0) {
      $(".search").css({ top: 80, opacity: 1 });

      if (ui == 1) {
        $(".user").css({ top: -200 + "px", opacity: 0 });
        ui = 0;
      }
      si = 1;
    } else if (si == 1) {
      $(".search").css({ top: -100 + "px", opacity: 0 });
      si = 0;
    }
  });
  $(".util .u1").click(function () {
    if (ui == 0) {
      $(".user").css({ top: 80, opacity: 1 });

      if (si == 1) {
        $(".search").css({ top: -100 + "px", opacity: 0 });
        ui = 0;
      }
      ui = 1;
    } else if (ui == 1) {
      $(".user").css({ top: -200 + "px", opacity: 0 });
      ui = 0;
    }
  });

  $(".s_btn").click(function () {
    $(".search").css({ top: -100 + "px", opacity: 0 });
  });
});
