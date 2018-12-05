$(function(){
  $('.play').hover(function(){
    $(this).addClass('active').parent().find('.menu').stop(true).fadeIn(100).animate({marginTop:"0",opacity:"1"});
    // $(this).parent().find('.menu').sblings().css("opacity","0");
    $(this).addClass('active');
  },function(){
    $(this).addClass('active');
    $(this).parent().mouseleave(function(){
      $('.menu').stop(true).fadeOut(200).animate({marginTop:"-24px",opacity:"0"});
      $('.play').removeClass('active');
    });
  });
  // $('.img0').hover(function(){
  //   $(this).find('img').attr("src",'images/cg11.jpg');
  //   $(this).find('p').animate({fontSize:"26px",top:"80px",left:"150px"},200);
  // },function(){
  //   $(this).find('img').attr("src",'images/cg1.jpg');
  //   $(this).find('p').animate({fontSize:"20px",top:"85px",left:"160px"},200);
  // });
  // $('.img1').hover(function(){
  //   $(this).find('img').attr("src",'images/cg22.jpg');
  // },function(){
  //   $(this).find('img').attr("src",'images/cg2.jpg');
  // });
  // $('.img2').hover(function(){
  //   $(this).find('img').attr("src",'images/cg33.jpg');
  // },function(){
  //   $(this).find('img').attr("src",'images/cg3.jpg');
  // });


  $('.logo_left a').click(function(){
     if($('header').hasClass('hide')){
       $('header').fadeIn().removeClass('hide');
       $('.logo_left img').attr("src",'images/goto.png');
      // $('.top_logo').css("display","none");
      $('.logo_left').addClass('show');

    }else{
      $('header').fadeOut().addClass('hide');
      $('.logo_left img').attr("src",'images/go.png');
      //$('.top_logo').css("display","block");
    }
    //alert($('header').hasClass('hide'));
    //$('.show').fadeIn();
  });

  $('.logo_left.show').mouseenter(function(){
    $('header').fadeIn().removeClass('hide');
    $('.logo_left img').attr("src",'images/goto.png');
    $(this).removeClass('show');
  });

  function tabCtrl(ele) {
    $(ele + ' .tabContents .tabContent').hide().eq(0).show();
    $(ele + ' .tabs .tab').eq(0).addClass('active');
    $(ele + ' .tabs .tab').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings().removeClass('active');
        var me = $(this);
        var index = 0;
        $(ele + ' .tabs .tab').each(function (i) {
            if (me.get(0) === $(this).get(0)) {
                index = i;
            }
        });
        $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn(500);
    });
  }
   tabCtrl('.wrap');
   tabCtrl('.yctj');
   tabCtrl('.pjhd');
   tabCtrl('.zxdtd');

   $('.rr').click(function(){
    var xx=$(".content .isoll ul").offset();
    var x=xx.left;
    var ab = -1600;
    //alert(x);
    if(x > ab){
      var ll = Math.abs(x)+400;
      //$(".content .isoll ul").css('left',ll);
      $(".content .isoll ul").animate({left:-ll},1000);
    }else{
      return;
    }
    
  });
  $('.ll').click(function(){
    var yy=$(".content .isoll ul").offset();
    var y = yy.left;
    if(y<140 && -1700<y){
      var ll = y+400;
      //$(".content .isoll ul").css('left',ll);
      $(".content .isoll ul").animate({left:ll},1000);
    }else{
      return;
    }
    
  });
});