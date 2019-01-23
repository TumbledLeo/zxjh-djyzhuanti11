$(function(){
	var oDate;
    var ss=new Date();
    var year=ss.getFullYear();
    var month=ss.getMonth()+1;
    var day=ss.getDate();
    var allday=0;
    $('.mon p').text(year-1);

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
              
         
        //  Month_Day();
 $('.mon p').text(year); 

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
        //  if(month==11)
        //  {
        //     month = month-10;
        //     year=year+1;
        //     var yy = year;
        //     //alert (month);
        //  }
         
        //  else if(month<12)
        //  {        
        //      month=month+1;
        //      //alert (month);     
        // }
        // else if(month==12)
        //  {
        //     month = 1;
        //     year=year+1;
        //     var yy = year;
        //  }
                if(month<12)
                 {
                     month=month+1;
                 }
                 else if(month===12)
                 {
                     month = 1;
                     year=year+1;}
         clearAll();
         Day();
       console.log(month);
        //  Month_Day();

// if(month-1>0){
// $('.mon h6').text(month-1+'月');
// }else if(month==1){
//     $('.mon h6').text(12+'月');
// }

//$('.mon1 h6').text(month+1+'月');



$('.mon p').text(year);
 $('.mon1 p').text(year);


//  if($('.content .mon h6').text()=="12月"){
//     yy=yy-1;
//     $('.mon p').text(yy);
//  }
}
function clearAll(){
        var daterow=document.getElementById("day");
        var child=document.getElementsByClassName("everyday");
        var length=child.length;
        for(var i=7;i<length;i++){
            daterow.removeChild(child[7]);
        }
    }
    // function Month_Day()
    // {
    //     document.getElementById("yearMonth").innerHTML=year+"年"+month+"月";
    // }
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
        // Month_Day();
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
            // var dayelement=document.createElement("li");
            //             dayelement.className="tab";
            // var dayelement1 =document.createElement("h5");
            //             dayelement1.className="day";
            //             dayelement1.innerHTML=j;
            //             dayelement.append(dayelement1);
            //var newElement=$('<li class="tab"><p class="p">周一</p><h5 class="day">01</h5></li>');  
                          
                
                //var newElement111=$('<p class="p">周'+i+'</p>');            
               // $(newElement).before( $("newElement111") );
               var weekDay = ["日", "一", "二", "三", "四", "五", "六"]; 
               var monday=new Date(year,month-1,j); 
                var myDate = new Date(Date.parse(monday));  
               // console.log(weekDay[myDate.getDay()]); 
                if(j<10){
                    j='0'+j;
                }
            var newElement=$('<li class="tab"><p class="p">周'+weekDay[myDate.getDay()]+'</p><h5 class="day">'+j+'</h5></li>');  
            
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
           $('.content .isoll li').removeClass('active');
               $(this).addClass('active');
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
           $('.content .isoll li').removeClass('active');
               $(this).addClass('active');
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
           $('.content .isoll li').removeClass('active');
            $(this).addClass('active');
        });  

});
//加载日历
function vDate(dDays){
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
							   if(ycTitle_.length>19)ycTitle_ = ycTitle_.substring(0,19)+"...";
							   
							  dryc+='<li class="swiper-slide"><a class="ycimg" href="'+linkyc+'"><img class="bg" src="'+list1[i].PRODUCTIMGX+'"  /></a><div class="dd"><h5>'+ycTitle_+'</h5><p>'+list1[i].VNAME+'</p><p>'+list1[i].PLAYTIMEHour+':'+list1[i].PLAYTIMEMin+'</p><a href="'+linkyc+'" class="play">立即订票</a></div></li>';
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
            if($(ele + ' .tabContents .tabContent').eq(index).hasClass('cf')){
                $(ele + ' .tabContents .tabContent').eq(index).animate({height:"300px"},100);
            }else{
                $(ele + ' .tabContents .tabContent').eq(index).animate({height:"0"},100);
            }
    } 
    });
    $(ele + ' .tabs .tab').eq(day-1).click(function(){
        if($(this).hasClass('active')){
            $(ele + ' .tabContents .tabContent').animate({height:"0"},100);
        }else{
            $(ele + ' .tabContents .tabContent').eq(day-1).animate({height:"300px"},100);
            $('.content .isoll ul li').eq(day-1).removeClass('cur');
        }
        if($(this).hasClass('cur')){
            $(ele + ' .tabContents .tabContent').eq(day-1).animate({height:"300px"},100);
        }
    });
  }
   tabCtrl1('.wrap');
$('.content .isoll li').click(function(){
    $('.content .isoll li').removeClass('active');
     $(this).addClass('active');
 });
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

// select

//int
// var selectHead = document.getElementsByClassName('select-head')[0];
// var selectHeadCont = document.getElementsByClassName('select-head-cont');
// var Option = document.getElementsByClassName('option')[0];
// var optionItem = document.getElementsByClassName('option-item');
// var wraping = document.getElementsByClassName('wraping')[0];
// /*默认是第一个选项*/
// selectHeadCont[0].innerHTML = optionItem[0].innerHTML;
// var s ='';
// /*点击后出现下拉框*/
// selectHead.addEventListener('click',function(e){
//     Option.style.display = 'block';
//     wraping.style.display = 'block';
//     wraping.style.opacity = '1';
//     wraping.style.zIndex = '999';
//     $(".option").addClass('show');
//     s=1;
//    // e.stopPropagation(); 
//     window.event? window.event.cancelBubble = true : e.stopPropagation();  
// },false);
// /*点击选项后出收起下拉框*/
// var len = optionItem.length;
// for(var i=0;i<len;i++){
//     optionItem[i].index = i;
//     optionItem[i].addEventListener('click',function(){
//         selectHeadCont[0].innerHTML = optionItem[this.index].innerHTML;
//         Option.style.display = 'none';
//         wraping.style.display = 'none';
//         $(".option").removeClass('show');
//     },false);
// }



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
// var selectHead1 = document.getElementsByClassName('select-head1')[0];
// var selectHeadCont1 = document.getElementsByClassName('select-head-cont1');
// var Option1 = document.getElementsByClassName('option1')[0];
// var optionItem1 = document.getElementsByClassName('option-item1');
// var wraping1 = document.getElementsByClassName('wraping1')[0];
// /*默认是第一个选项*/
// selectHeadCont1[0].innerHTML = optionItem1[0].innerHTML;

// /*点击后出现下拉框*/
// selectHead1.addEventListener('click',function(e){
//     Option1.style.display = 'block';
//     wraping1.style.display = 'block';
//     wraping1.style.opacity = '1';
//     wraping1.style.zIndex = '999';
//     s=1;
//     window.event? window.event.cancelBubble = true : e.stopPropagation(); 
// },false);
// /*点击选项后出现在下拉框*/
// var len = optionItem1.length;
// for(var i=0;i<len;i++){
//     optionItem1[i].index = i;
//     optionItem1[i].addEventListener('click',function(){
//         selectHeadCont1[0].innerHTML = optionItem1[this.index].innerHTML;
//         Option1.style.display = 'none';
//         wraping1.style.display = 'none';
//     },false);
// }
// $('.select1 .swiper-button-prev3,.select1 .swiper-button-next3,.select .swiper-button-prev,.select .swiper-button-next').click(function(e){
//     window.event? window.event.cancelBubble = true : e.stopPropagation(); 
// });
// /*点击其他地方时，select会收起来*/
// document.body.addEventListener('click',function(){
//     Option1.style.display = 'none';
//     wraping1.style.display = 'none';
// }.false);
// $(document).click(function(e){
//     if(s===1){
//     //alert(1);
//     Option.style.display = 'none';
//      wraping.style.display = 'none';
//      Option1.style.display = 'none';
//      wraping1.style.display = 'none';
//     }
//     //e.stopPropagation(); 
//     window.event? window.event.cancelBubble = true : e.stopPropagation(); 
// });
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
});

 
// });