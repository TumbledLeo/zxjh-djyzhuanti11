
//加载日历
function vDate(dDays){
  var plink = $('#plink').attr('value');
	setTimeout(function(){
				  $.ajax({
					    url: "/was5/web/search?channelid=212895&ycid=73&hdid=209&day="+dDays,
					    cache: false,  //默认为true。设置为 false 将不会从浏览器缓存中加载请求信息。
					    //timeout: 1000,
//					    data: {date: dateText},
					    dataType:"text",
					    success: function(o) {
					    $("#dryc").empty();					 	
					    var list1=eval(o.split("@")[0]);
					    //list3=eval(o.split("@")[2]);
					    var dryc = "";					
						console.log(list1);
					    if(list1.length==0)
					    {		
							dryc = '<div '+'style="overflow:hidden;height:100px;width:100%;line-height:100px; text-align:center; color:#8a8a8a;font-size:18px">'+'今日无演出安排</div>';
				$("#dryc").css("width","100%");
				$('.wycap').html(dryc);
							$('.wycap').show()
							$(".ycbox").hide();
							$('.syc').hide();
						
					    }else
						{							
							for(var i=0;i<list1.length;i++)
							{  
							   var linkyc=plink+"product-"+list1[i].PRODUCTID+".html";
							  var ycTitle_ = list1[i].PRODUCTNAMESHORT;
                var yCTitie_ = list1[i].PRODUCTNAMESHORT;
							   if(ycTitle_.length>19)ycTitle_ = ycTitle_.substring(0,19)+"...";
							   
                              dryc+='<li class="swiper-slide"><a class="ycimg" target="_blank" href="'+linkyc+'"><img class="bg" src="'+list1[i].PRODUCTIMGX+'"  /></a><div class="dd"><h5 title="'+yCTitie_+'">'+ycTitle_+'</h5><p>'+list1[i].VNAME+'</p><p>'+list1[i].PLAYTIMEHour+':'+list1[i].PLAYTIMEMin+'</p><a target="_blank" href="'+linkyc+'" class="play">立即订票</a></div></li>';
                             
							}
							if(list1.length<5){
							$('.syc').html(dryc);
							$('.syc').show();
							$('.wycap').hide();	
							$(".ycbox").hide();					
						}
						else{
							$("#dryc").html(dryc);
							$('.ycheight').css('height','auto');
							$('.wycap').hide();
							$('.syc').hide();
							$(".ycbox").show();
console.log($("#dryc").html());
var mySwiper2 = new Swiper('.swiper-container2', {
            //autoplay: true,//可选选项，自动滑动
            loop:true,
slidesPerView : 4,
            pagination : '.swiper-pagination',
            prevButton: '.swiper-button-prev2',
            nextButton: ' .swiper-button-next2',
            paginationClickable :true,
    });

							}							

						}					    
					   
							}
					   });	
					   },0)
	
                
	}

// });     
$(function(){
    var oDate;
    var ss=new Date();
    var year=ss.getFullYear();
    var month=ss.getMonth()+1;
    var day=ss.getDate();
    var iMonth ='0'+month;
    var iMonth_now = iMonth.substring(iMonth.length-2);
    var iDate = year+'-'+iMonth_now+'-'+day;
    vDate(iDate);
    var allday=0;
    $('.mon p').text(year-1);
    $('.showtime li').eq(0).text(year);
    $('.showtime li').eq(2).text(iMonth_now);
if(month-1>0){
    $('.mon h6').text(month-1+'月');
}else{
    $('.mon h6').text(12+'月');
}
 $('.mon1 p').text(year);
 $('.mon1 h6').text(month+1+'月');
function last(){
//此时的month是中间展示的
var mm =  month;
//console.log(mm);
if(mm==1){
    $('.mon h6').text(11+'月');
 } else if(mm==2){
    $('.mon h6').text(12+'月');
 } else if(mm==3){
    $('.mon h6').text(1+'月');
 } else if(mm==4){
    $('.mon h6').text(2+'月');
 } else if(mm==5){
    $('.mon h6').text(3+'月');
 } else if(mm==6){
    $('.mon h6').text(4+'月');
 } else if(mm==7){
    $('.mon h6').text(5+'月');
 } else if(mm==8){
    $('.mon h6').text(6+'月');
 } else if(mm==9){
    $('.mon h6').text(7+'月');
 } else if(mm==10){
    $('.mon h6').text(8+'月');
 } else if(mm==11){
    $('.mon h6').text(9+'月');
 }else if(mm==12){
    $('.mon h6').text(10+'月');
 } 
         if(month>1)
         {
             month=month-1;
                   
         }
         else if(month===1)
         { 
             month = 12;
           year=year-1;
            
         } 
     
        if(mm===2){
            var yy = year;
            yy=yy-1;
          //  alert(year);
            $('.mon p').text(yy);    
        }

console.log(mm);
// $('.showtime li').eq(0).text(year+'年');
// $('.showtime li').eq(1).text(month+"月");
$('.showtime li').eq(0).text(year);
$('.showtime li').eq(0).text(year);
if(month<10){
    $('.showtime li').eq(2).text('0'+month);
}else{
    $('.showtime li').eq(2).text(month);
}
 // $('.mon p').text(year); 
 $('.mon1 p').text(year);

 if(month<12){
    $('.mon1 h6').text(month+1+'月');
 }else if(month==12){
    $('.mon1 h6').text(1+'月');
    $('.mon1 p').text(year+1); 
 }
 clearAll();
  Day();
}
function next(){
 //此时的month是中间展示的
var mm =  month;
//console.log(mm);
if(mm==1){
    $('.mon h6').text(1+'月');
    $('.mon1 h6').text(3+'月');
 } else if(mm==2){
    $('.mon h6').text(2+'月');
    $('.mon1 h6').text(4+'月');
 } else if(mm==3){
    $('.mon h6').text(3+'月');
    $('.mon1 h6').text(5+'月');
 } else if(mm==4){
    $('.mon h6').text(4+'月');
    $('.mon1 h6').text(6+'月');
 } else if(mm==5){
    $('.mon h6').text(5+'月');
    $('.mon1 h6').text(7+'月');
 } else if(mm==6){
    $('.mon h6').text(6+'月');
    $('.mon1 h6').text(8+'月');
 } else if(mm==7){
    $('.mon h6').text(7+'月');
    $('.mon1 h6').text(9+'月');
 } else if(mm==8){
    $('.mon h6').text(8+'月');
    $('.mon1 h6').text(10+'月');
 } else if(mm==9){
    $('.mon h6').text(9+'月');
    $('.mon1 h6').text(11+'月');
 } else if(mm==10){
    $('.mon h6').text(10+'月');
    $('.mon1 h6').text(12+'月');
 } else if(mm==11){
    $('.mon h6').text(11+'月');
    $('.mon1 h6').text(1+'月');
 }else if(mm==12){
    $('.mon h6').text(12+'月');
    $('.mon1 h6').text(2+'月');
 }        
                if(month<12)
                 {
                     month=month+1;
                 }
                 else if(month===12)
                 {
                     month = 1;
                   

                }
                if(mm===11){
                    year=year+1;
                    $('.mon1 p').text(year);
                }
                if(mm===1){
                    $('.mon p').text(year);
                }
                // if(mm===11){
                //     var yy = year;
                //     yy=yy+1;
                //     $('.mon1 p').text(yy);
                // }
                // if(mm===1){
                //     $('.mon p').text(year);
                // }
         clearAll();
         Day();
        //  $('.showtime li').eq(0).text(year+'年');
        //  $('.showtime li').eq(1).text(month+"月");
        $('.showtime li').eq(0).text(year);
        if(month<10){
            $('.showtime li').eq(2).text('0'+month);
        }else{
            $('.showtime li').eq(2).text(month);
        }
       
    //    console.log(month);
    //    console.log(year);
       
       
}
function clearAll(){
        var daterow=document.getElementById("day");
        var child=document.getElementsByClassName("everyday");
        var length=child.length;
        for(var i=7;i<length;i++){
            daterow.removeChild(child[7]);
        }
    }

    //Month() 获取每个月里面有多少天
function Month()
    {
        //判断月分是大月还是小月 
        //就可以得出这个月除了2月外是30天还是31天
        if(month!==2) {
            if (month === 4 || month === 6 || month === 9 || month === 11)
                allday = 30;
            else
                allday = 31;
        }
        else
        {
            //判断是否是闰年
            if (year%4===0&&year%100!==0||year%400===0)
                allday = 29;
            else
                allday = 28;
        }
    }
function Day(){
        //得到界面上上一个月和下一月按钮之间的时间更新显示
    
        //得到月的天数
        $('#wrapper ul').html('');
        Month();
        var firstday=new Date(year,month-1,1);
        var xinqi=firstday.getDay();
        
        //var daterow=document.getElementById("day");
// alert(xinqi)
        //显示星期
        
        //显示每一天的号数
        for(var j=1;j<=allday;j++)
        {
               var weekDay = ["日", "一", "二", "三", "四", "五", "六"]; 
               var monday=new Date(year,month-1,j); 
                var myDate = new Date(Date.parse(monday));  
               // console.log(weekDay[myDate.getDay()]); 
                if(j<10){
                    j='0'+j;
                }
            //var newElement=$('<li class="tab"><p class="p">周'+weekDay[myDate.getDay()]+'</p><h5 class="day">'+j+'</h5></li>');  
            if(myDate.getDay()==6||myDate.getDay()==0){
                var newElement=$('<li class="tab scq"><p class="p">周'+weekDay[myDate.getDay()]+'</p><h5 class="day">'+j+'</h5></li>'); 
            }else{
                var newElement=$('<li class="tab"><p class="p">周'+weekDay[myDate.getDay()]+'</p><h5 class="day">'+j+'</h5></li>'); 
            }
            //if(day===j)
               // dayelement.style.color="red";
                $('#wrapper ul').append(newElement);              
        }
}
        Day();
        
        $('.mon').click(function(){
            $(".content .isoll ul").css('left',0);
            last();   
            $('.content .isoll li').click(function(){
                var years = year.toString();
            var months_od = '0'+month.toString();
      var months = months_od.substring(months_od.length-2);
           //var weeks= $(this).find('p').text();
           var days= $(this).find('h5').text();
           oDate = years+'-'+months+'-'+days;
       vDate(oDate);
           console.log(oDate);
        //    $('.content .isoll li').removeClass('active');
        //        $(this).addClass('active');
            });
            if(month==month1&&day1==day&&year1==year){
                if(day1>8&&day1<16||day1==16){
                    // $(".content .isoll ul").animate({left:-900},1000);
                    $(".content .isoll ul").css('left',-900);
                }else if(day1>16&&day1<24 ||day1==24){
                    $(".content .isoll ul").css('left',-1800);
                }else if(day1>24){
                    $(".content .isoll ul").css('left',-end);
                }
                $('.content .isoll ul li').eq(day1-1).addClass('cur');
                $('.content .isoll ul li').eq(day1-1).find('p').text('今天');
              
            }
            $('.content .isoll li').click(function(){
                if($(this).hasClass('active')){
                    $(this).removeClass('active');
                }else{
                    $('.content .isoll li').removeClass('active');
                    $(this).addClass('active');
                }
             });
        });
        $('.mon1').click(function(){
            
            next();
            $(".content .isoll ul").css('left',0);
            $('.content .isoll li').click(function(){
                var years = year.toString();
            var months_od = '0'+month.toString();
      var months = months_od.substring(months_od.length-2);
           //var weeks= $(this).find('p').text();
           var days= $(this).find('h5').text();
       oDate = years+'-'+months+'-'+days;
       vDate(oDate);
           console.log(oDate);
        //    $('.content .isoll li').removeClass('active');
        //        $(this).addClass('active');
            });
            if(month==month1&&day1==day&&year1==year){
                if(day1>8&&day1<16||day1==16){
                    // $(".content .isoll ul").animate({left:-900},1000);
                    $(".content .isoll ul").css('left',-900);
                }else if(day1>16&&day1<24 ||day1==24){
                    $(".content .isoll ul").css('left',-1800);
                }else if(day1>24){
                    $(".content .isoll ul").css('left',-end);
                }
                $('.content .isoll ul li').eq(day1-1).addClass('cur');
                $('.content .isoll ul li').eq(day1-1).find('p').text('今天');
                
            }
            $('.content .isoll li').click(function(){
                if($(this).hasClass('active')){
                    $(this).removeClass('active');
                }else{
                    $('.content .isoll li').removeClass('active');
                    $(this).addClass('active');
                }
             });
        });
        
        var ss1=new Date();
        var year1=ss1.getFullYear();
        var month1=ss1.getMonth()+1;
        var day1=ss1.getDate();
       
        var ss = $('.content .isoll ul').width();
        var sq = $('.content .isoll').width();
        var end = ss-sq;
      //  alert(month==month1&&day1==day&&year1==year);
        if(month==month1&&day1==day&&year1==year){
            if(day1>8&&day1<16||day1==16){
                // $(".content .isoll ul").animate({left:-900},1000);
                $(".content .isoll ul").css('left',-900);
            }else if(day1>16&&day1<24 ||day1==24){
                $(".content .isoll ul").css('left',-1800);
            }else if(day1>24){
                $(".content .isoll ul").css('left',-end);
            }
            $('.content .isoll ul li').eq(day1-1).addClass('cur');
            $('.content .isoll ul li').eq(day1-1).find('p').text('今天');
            $('.content .isoll ul li').eq(day1-1).addClass('haveshow');
        }

        $('.content .isoll li').click(function(){
            var years = year.toString();
            var months_od = '0'+month.toString();
      var months = months_od.substring(months_od.length-2);
          // var weeks= $(this).find('p').text();
           var days= $(this).find('h5').text();
       oDate = years+'-'+months+'-'+days;
       //------------------------------
       vDate(oDate);       
       //------------------------------      
           console.log(oDate);
        //    $('.content .isoll li').removeClass('active');
        //     $(this).addClass('active');

            
        });  
  $('.play').hover(function(){
    // $(this).addClass('active').parent().find('.menu').stop(true).fadeIn(100).animate({marginTop:"0",opacity:"1",zIndex:"99"});
    $(this).addClass('active').parent().find('.menu').stop(true).fadeIn(500)
    // $(this).parent().find('.menu').sblings().css("opacity","0");
    $(this).addClass('active');
    $('.no').removeClass('active');
  },function(){
    $(this).addClass('active');
    $(this).parent().mouseleave(function(){
     // $('.menu').stop(true).fadeOut(200).animate({zIndex:"99",marginTop:"-24px",opacity:"0"});
     $('.menu').stop(true).fadeOut(0);
      $('.play').removeClass('active');
      $('.no').removeClass('active');
    });
  });



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
    var myDate = new Date();
    var day = myDate.getDate(); 
   // var year1 = myDate.getFullYear();
  //  var mon = myDate.getMonth();
   //$(ele + ' .tabContents .tabContent').hide().eq(day-1).show();
    //$(ele + ' .tabs .tab').eq(0).addClass('active');
    $(ele + ' .tabContents .tabContent').animate({height:"0"},100);

    $('.content .isoll ul li').eq(day-1).addClass('cur');


    //alert(getMonthDays(year1,mon));
    $(ele + ' .tabs .tab').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(ele + ' .tabContents .tabContent').animate({height:"0"},100);
        }else{
            $(this).addClass('active').siblings().removeClass('active');
            var me = $(this);
            var index = 0;
            $(ele + ' .tabs .tab').each(function (i) {
                if (me.get(0) === $(this).get(0)) {
                    index = i;
                }
            });
            $(ele + ' .tabContents .tabContent').animate({height:"0"},100);
            $('.content .isoll ul li').eq(day-1).removeClass('cur');
            // if($(ele + ' .tabContents .tabContent').eq(index).hasClass('active')){
            //     $(ele + ' .tabContents .tabContent').eq(index).animate({height:"300px"},100);

            
            // }else{
            //     $(ele + ' .tabContents .tabContent').eq(index).animate({height:"0"},100);
            // }
    } 
    });
    $(ele + ' .tabs .tab').eq(day-1).click(function(){
        if($(this).hasClass('active')){
         //   $(ele + ' .tabContents .tabContent').animate({height:"0"},100);
            $(ele + ' .tabContents .tabContent').eq(day-1).animate({height:"300px"},100).siblings().animate({height:"0"},100);
           // $('.syc').animate({height:"300px"},100);
        }else{
            $('.content .isoll ul li').eq(day-1).removeClass('cur');
            //$('.syc').animate({height:"0"},100);
        }
        // if($(this).hasClass('cur')){
        //     $(ele + ' .tabContents .tabContent').eq(day-1).animate({height:"300px"},100);
        // }
    });
  }
   tabCtrl1('.wrap');
// $('.content .isoll li').click(function(){
//     $('.content .isoll li').removeClass('active');
//      $(this).addClass('active');
//  });
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
    if(y<-1 && -2600<y){
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
			
			// $('.buttons a').click(
            //     function(){
            //         $(this).addClass("blue").parent().siblings().children().removeClass("blue");
            //     }
            // );
			
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
       // console.log(attr);
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
$(function(){
    
    
    
    // if(mon==1){
    //     $('.content .isoll ul li').eq(day-1).find('p').text('today');
    // }
    
    // var len = $('.content .isoll ul li').length;
    // if(len==30){
    //     $('.content .isoll ul').width()=3482;
    // }
    $('.zz li').hover(function(){
        $(this).find('.ewm').fadeIn();
        $(this).find('.show_x p').css('display','none');
        $(this).find('.show_x  .wx').css('display','none');
    },function(){
        $(this).find('.ewm').fadeOut();
        $(this).find('.show_x p').css('display','block');
        $(this).find('.show_x .wx').css('display','block');
    });


 var count=$('.tbch_change').attr('count');
if(count==1){
    $('.picone').css('display','block');
}else if(count==2){
    $('.pictwo').css('display','block');
}else{
    $('.box').css('display','block');
}

//兼容IE
var text = $('.tbtj .swiper-father h5').text();
function strlen(str){
    var len = 0;
    for (var i=0; i<str.length; i++) { 
     var c = str.charCodeAt(i); 
    //单字节加1 
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
       len++; 
     } 
     else { 
      len+=2; 
     } 
    } 
    return len;
}
var show_text = strlen(text);
if(show_text>180){
    $('.tbtj .swiper-father h5').addClass('shengl');
}
// for(var i=0;i<26;i++ ){
//     var show_t = strlen($('.tbtj .swiper-father h6').text());
//     if(show_t>24){
//         $('.tbtj .swiper-father h6').addClass('shengls');
//     }
// }
$('.tbtj .swiper-father h6').each(function(){
    var show_t = strlen($(this).text());
    if(show_t>58){
        $(this).addClass('shengls');
    }
    //alert(show_t);
});
$('.pjhd .tabContents li .des h6').each(function(){
    var show_t = strlen($(this).text());
    if($('html').width()>1600){
        
        if(show_t>58){
            $(this).addClass('shenglss');
        }
    }else if($('html').width()<=1600&&$('html').width()>1400) {
        if(show_t>54){
            $(this).addClass('shenglss');
        }
    }else if($('html').width()>1200) {
        if(show_t>50){
            $(this).addClass('shenglss');
        }
    }else{
        if(show_t>44){
            $(this).addClass('shenglss');
        }
    }
    
    //alert(show_t);
});
$('.zxdt .right1 h3').each(function(){
    var show_t = strlen($(this).text());
    if($('html').width()>1600){
        
        if(show_t>56){
            $(this).addClass('shenglss');
        }
    }else if($('html').width()<=1600&&$('html').width()>1400) {
        if(show_t>30){
            $(this).addClass('shenglss');
        }
    }else if($('html').width()>1200) {
        if(show_t>30){
            $(this).addClass('shenglss');
        }
    }else{
        if(show_t>30){
            $(this).addClass('shenglss');
        }
    }
    
    //alert(show_t);
});
});

 
// });