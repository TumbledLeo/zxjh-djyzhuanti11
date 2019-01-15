$(function(){
  $('.play').hover(function(){
    $(this).addClass('active').parent().find('.menu').stop(true).fadeIn(100).animate({marginTop:"0",opacity:"1",zIndex:"99999"});
    // $(this).parent().find('.menu').sblings().css("opacity","0");
    $(this).addClass('active');
    $('.no').removeClass('active');
  },function(){
    $(this).addClass('active');
    $(this).parent().mouseleave(function(){
      $('.menu').stop(true).fadeOut(200).animate({zIndex:"99",marginTop:"-24px",opacity:"0"});
      $('.play').removeClass('active');
      $('.no').removeClass('active');
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
  function tabCtrl1(ele) {
   // $(ele + ' .tabContents .tabContent').hide().eq(0).show();
    //$(ele + ' .tabs .tab').eq(0).addClass('active');
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
        $(ele + ' .tabContents .tabContent').animate({height:"0"},100);
        $(ele + ' .tabContents .tabContent').eq(index).animate({height:"300px"},100);
    });
  }
   tabCtrl1('.wrap');
   tabCtrl('.yctj');
   tabCtrl('.show');
   tabCtrl('.pjhd');
   tabCtrl('.zxdtd');

   $('.rr').click(function(){
    var xx=$(".content .isoll ul").offset();
    var x=xx.left;
    var ab = -1190;
    var ss = $('.content .isoll ul').width();
    var sq = $('.content .isoll').width();
    var end = ss-sq;
    //alert(x);
    if(x > ab){
      var ll = Math.abs(x)+600;
      //$(".content .isoll ul").css('left',ll);
      $(".content .isoll ul").animate({left:-ll},1000);
    }else{
      $(".content .isoll ul").animate({left:-end},1000);
    }
   // $(".content .isoll ul").animate({left:-2437},1000);
  });
  $('.ll').click(function(){
    var yy=$(".content .isoll ul").offset();
    var y = yy.left;
    //$(".content .isoll ul").animate({left:108},1000);
    if(y<-1 && -2400<y){
      var ll = y+600;
        if(ll>0){
            ll=0;
        }
     //$(".content .isoll ul").css('left',ll);
     $(".content .isoll ul").animate({left:ll},1000);
    }else{
        $(".content .isoll ul").animate({left:0},1000);
    }
    
  });
  $("#top").click(function() {
    $("html,body").animate({scrollTop:0}, 500);
  });
  var vh = 1000;
  $(window).scroll(function(){
  var this_scrollTop = $(this).scrollTop();
  if(this_scrollTop>vh ){
  $("#top").show();
  }else{
      $("#top").fadeOut();
  }
  });

// select

//int
var selectHead = document.getElementsByClassName('select-head')[0];
var selectHeadCont = document.getElementsByClassName('select-head-cont');
var Option = document.getElementsByClassName('option')[0];
var optionItem = document.getElementsByClassName('option-item');
var wraping = document.getElementsByClassName('wraping')[0];
/*默认是第一个选项*/
selectHeadCont[0].innerHTML = optionItem[0].innerHTML;
var s ='';
/*点击后出现下拉框*/
selectHead.addEventListener('click',function(e){
    Option.style.display = 'block';
    wraping.style.display = 'block';
    wraping.style.opacity = '1';
    wraping.style.zIndex = '999';
    $(".option").addClass('show');
    s=1;
   // e.stopPropagation(); 
    window.event? window.event.cancelBubble = true : e.stopPropagation();  
},false);
/*点击选项后出收起下拉框*/
var len = optionItem.length;
for(var i=0;i<len;i++){
    optionItem[i].index = i;
    optionItem[i].addEventListener('click',function(){
        selectHeadCont[0].innerHTML = optionItem[this.index].innerHTML;
        Option.style.display = 'none';
        wraping.style.display = 'none';
        $(".option").removeClass('show');
    },false);
}



// $(document).click(function(event){
//     var ss =  $(".wraping").attr('style');
//     var ll = ss.split(';')[3];
//     var m = ll.split(':')[1];

//    // alert(m.trim()=='block');
//     if(m.trim()=='block'){
//       //  alert(1);
//      $(".wraping").css("display","none");
//     }else{
//         return;
//     }
//     e.stopPropagation();
//  }); 
/*点击其他地方时，select会收起来*/
// $('document:not(.select-head)').click(function(){

//     $(".option").removeClass('show');
//     $('.option').css("display","none");
//     $('.wraping').css("display","none");
//     // Option.style.display = 'none';
//     // wraping.style.display = 'none';
// });

// $("*").click(function (event) {
//   if (!$(this).hasClass("select-head")){
//     Option.style.display = 'none';
//     wraping.style.display = 'none';
//   }
//   //event.stopPropagation();   
// });
// $('.select').click(function(){
//     $('.set').css("display","block");
//     $('.set,.rili').click(function(){
//         $('.set').css("dosplay","none");
//         $('.wraping').css("display","none");
//     });
// });
var selectHead1 = document.getElementsByClassName('select-head1')[0];
var selectHeadCont1 = document.getElementsByClassName('select-head-cont1');
var Option1 = document.getElementsByClassName('option1')[0];
var optionItem1 = document.getElementsByClassName('option-item1');
var wraping1 = document.getElementsByClassName('wraping1')[0];
/*默认是第一个选项*/
selectHeadCont1[0].innerHTML = optionItem1[0].innerHTML;

/*点击后出现下拉框*/
selectHead1.addEventListener('click',function(e){
    Option1.style.display = 'block';
    wraping1.style.display = 'block';
    wraping1.style.opacity = '1';
    wraping1.style.zIndex = '999';
    s=1;
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
},false);
/*点击选项后出现在下拉框*/
var len = optionItem1.length;
for(var i=0;i<len;i++){
    optionItem1[i].index = i;
    optionItem1[i].addEventListener('click',function(){
        selectHeadCont1[0].innerHTML = optionItem1[this.index].innerHTML;
        Option1.style.display = 'none';
        wraping1.style.display = 'none';
    },false);
}
$('.select1 .swiper-button-prev3,.select1 .swiper-button-next3,.select .swiper-button-prev,.select .swiper-button-next').click(function(e){
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
});
// /*点击其他地方时，select会收起来*/
// document.body.addEventListener('click',function(){
//     Option1.style.display = 'none';
//     wraping1.style.display = 'none';
// }.false);
$(document).click(function(e){
    if(s===1){
    //alert(1);
    Option.style.display = 'none';
     wraping.style.display = 'none';
     Option1.style.display = 'none';
     wraping1.style.display = 'none';
    }
    //e.stopPropagation(); 
    window.event? window.event.cancelBubble = true : e.stopPropagation(); 
});
$('.wraping').mouseleave(function(){
    $(this).css("display","none");      
});
$('.select').mouseleave(function(){
    $('.wraping').css("display","none");      
});
$('.wraping1').mouseleave(function(){
    $(this).css("display","none");      
});
$('.select1').mouseleave(function(){
    $('.wraping1').css("display","none");      
});
//特殊轮播
// var cArr=["p7","p6","p5","p4","p3","p2","p1"];
            //获取li 的 类名
            var cArr =[];
           var at =  $('.box li').attr('class');
           $('.box li').each(function(){
            var cc = $(this).attr('class')
               cArr.push(cc);
           });
            var len = cArr.length-1;
            
			var index=0;
			$(".next").click(
				function(){
				nextimg();
				}
			)
			$(".prev").click(
				function(){
				previmg();
				}
            )
            //自动生成指示器s

            var bt = '';
            for(i=0;i<len;i++){
                bt += '<a href="javascript:;"><span></span></a>';
            }
            $('.box .buttons').append(bt);
            $('.box .buttons a').first().find('span').addClass('blue');
            //自动生成指示器end
            var $a=$(".buttons a");
			var $s=$(".buttons span");
			//上一张
			function previmg(){
				cArr.unshift(cArr[len]);
				cArr.pop();
				//i是元素的索引，从0开始
				//e为当前处理的元素
				//each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
				$(".box li").each(function(i,e){
					$(e).removeClass().addClass(cArr[i]);
				})
				index--;
				if (index<0) {
					index=len;
				}
				show();
			}
			
			//下一张
			function nextimg(){
				cArr.push(cArr[0]);
				cArr.shift();
				$(".box li").each(function(i,e){
					$(e).removeClass().addClass(cArr[i]);
				})
				index++;
				if (index>len) {
					index=0;
				}
				show();
			}
			
			//通过底下按钮点击切换
			//  $a.each(function(){
			// 	$(this).click(function(){
			// 		var myindex=$(this).index();
			// 		var b=myindex-index;
			// 		if(b==0){
			// 			return;
			// 		}
			// 		else if(b>0) {
			// 			/*
			// 			 * splice(0,b)的意思是从索引0开始,取出数量为b的数组
			// 			 * 因为每次点击之后数组都被改变了,所以当前显示的这个照片的索引才是0
			// 			 * 所以取出从索引0到b的数组,就是从原本的这个照片到需要点击的照片的数组
			// 			 * 这时候原本的数组也将这部分数组进行移除了
			// 			 * 再把移除的数组添加的原本的数组的后面
			// 			 */
			// 			var newarr=cArr.splice(0,b);
			// 			cArr=$.merge(cArr,newarr);
			// 			$("li").each(function(i,e){
			// 			$(e).removeClass().addClass(cArr[i]);
			// 			})
			// 			index=myindex;
			// 			show();
			// 		}
			// 		else if(b<0){
			// 			/*
			// 			 * 因为b<0,所以取数组的时候是倒序来取的,也就是说我们可以先把数组的顺序颠倒一下
			// 			 * 而b现在是负值,所以取出索引0到-b即为需要取出的数组
			// 			 * 也就是从原本的照片到需要点击的照片的数组
			// 			 * 然后将原本的数组跟取出的数组进行拼接
			// 			 * 再次倒序,使原本的倒序变为正序
			// 			 */
			// 			cArr.reverse();
			// 			var oldarr=cArr.splice(0,-b)
			// 			cArr=$.merge(cArr,oldarr);
			// 			cArr.reverse();
			// 			$("li").each(function(i,e){
			// 			$(e).removeClass().addClass(cArr[i]);
			// 			})
			// 			index=myindex;
			// 			show();
			// 		}
			// 	})
			// })
			
			//改变底下按钮的背景色
			function show(){
					$($s).eq(index).addClass("blue").parent().siblings().children().removeClass("blue");
			}
			
			//点击class为p2的元素触发上一张照片的函数
			$(document).on("click",".p2",function(){
				previmg();
				return false;//返回一个false值，让a标签不跳转
			});
			
			//点击class为p4的元素触发下一张照片的函数
			$(document).on("click",".p4",function(){
				nextimg();
				return false;
			});
			
	    //		鼠标移入box时清除定时器
			// $(".box").mouseover(function(){
			// 	clearInterval(timer);
			// })
			
      //鼠标移出box时开始定时器
			// $(".box").mouseleave(function(){
			// 	timer=setInterval(nextimg,4000);
			// })
			
      //进入页面自动开始定时器
          //timer=setInterval(nextimg,4000);
        
          $('.btn_video').click(function(){

          });
            // 视频
    // let video = document.getElementById('video');
    // $('.video_btn').on('click',function (e) {
    //     e.preventDefault();
    //     $('.dialog_video').fadeIn();
    //     if(isMusicPlay){
    //         music.pause();
    //     }
    // });

    // $('.close_btn').on('click',function (e) {
    //     e.preventDefault();
    //     $('.dialog_video').fadeOut();
    //     video.pause();
    //     if(isMusicPlay){
    //         music.play();
    //     }
    // });
      // 视频
      $('.btn_close').on('click', function (e) {
        e.preventDefault();
        $(this).parent().hide();
        $(this).siblings('.video_inner').find('video').get(0).pause();
        if (IsMusicPlay) {
            music.play();
        }
    });
    $('.tbch_video').on('click', function (e) {
        e.preventDefault();
        var attr = $(this).attr('data-video-type');
        console.log(attr);
        var videoEle = '.' + attr;
        $(videoEle).show();

        if (IsMusicPlay) {
            music.pause();
        }
    });

    $('.btn_video').on('click', function (e) {
        e.preventDefault();
        var attr = $(this).attr('data-video-type');
        console.log(attr);
        var videoEle = '.' + attr;
        $(videoEle).show();

        if (IsMusicPlay) {
            music.pause();
        }
    });
});