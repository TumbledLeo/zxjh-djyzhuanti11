"use strict";$(function(){function t(s){$(s+" .tabContents .tabContent").hide().eq(0).show(),$(s+" .tabs .tab").eq(0).addClass("active"),$(s+" .tabs .tab").click(function(t){if(t.stopPropagation(),t.preventDefault(),!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var e=$(this),n=0;$(s+" .tabs .tab").each(function(t){e.get(0)===$(this).get(0)&&(n=t)}),$(s+" .tabContents .tabContent").hide().eq(n).fadeIn(500)}})}var s,a;$(".play").hover(function(){$(this).parent().find(".menu").stop(!0).fadeIn(100).animate({marginTop:"-2px",opacity:"1",zIndex:"99999"}),$(this).addClass("active"),$(".no").removeClass("active")},function(){$(this).addClass("active"),$(this).parent().mouseleave(function(){$(".menu").stop(!0).fadeOut(200).animate({zIndex:"99",marginTop:"-24px",opacity:"0"}),$(".play").removeClass("active"),$(".no").removeClass("active")})}),$(".logo_left a").click(function(){$("header").hasClass("hide")?($("header").fadeIn().removeClass("hide"),$(".logo_left img").attr("src","images/goto.png"),$(".logo_left").addClass("show")):($("header").fadeOut().addClass("hide"),$(".logo_left img").attr("src","images/go.png"))}),$(".logo_left.show").mouseenter(function(){$("header").fadeIn().removeClass("hide"),$(".logo_left img").attr("src","images/goto.png"),$(this).removeClass("show")}),s=".wrap",a=(new Date).getDate(),$(s+" .tabContents .tabContent").animate({height:"0"},100),$(".content .isoll ul li").eq(a-1).addClass("cur"),$(s+" .tabs .tab").click(function(t){if(t.stopPropagation(),t.preventDefault(),$(this).hasClass("active"))$(this).removeClass("active"),$(s+" .tabContents .tabContent").animate({height:"0"},100);else{$(this).addClass("active").siblings().removeClass("active");var e=$(this),n=0;$(s+" .tabs .tab").each(function(t){e.get(0)===$(this).get(0)&&(n=t)}),$(s+" .tabContents .tabContent").animate({height:"0"},100),$(".content .isoll ul li").eq(a-1).removeClass("cur"),$(s+" .tabContents .tabContent").eq(n).hasClass("cf")?$(s+" .tabContents .tabContent").eq(n).animate({height:"300px"},100):$(s+" .tabContents .tabContent").eq(n).animate({height:"0"},100)}}),$(s+" .tabs .tab").eq(a-1).click(function(){$(this).hasClass(active)?$(s+" .tabContents .tabContent").animate({height:"0"},100):($(s+" .tabContents .tabContent").eq(a-1).animate({height:"300px"},100),$(".content .isoll ul li").eq(a-1).removeClass("cur")),$(this).hasClass(cur)&&$(s+" .tabContents .tabContent").eq(a-1).animate({height:"300px"},100)}),t(".yctj"),t(".show"),t(".pjhd"),t(".zxdtd"),$(".rr").click(function(){var t=$(".content .isoll ul").offset().left,e=$(".content .isoll ul").width()-$(".content .isoll").width();if(-1190<t){var n=Math.abs(t)+600;$(".content .isoll ul").animate({left:-n},1e3)}else $(".content .isoll ul").animate({left:-e},1e3)}),$(".ll").click(function(){var t=$(".content .isoll ul").offset().left;if(t<-1&&-2600<t){var e=t+600;0<e&&(e=0),$(".content .isoll ul").animate({left:e},1e3)}else $(".content .isoll ul").animate({left:0},1e3)}),$("#top").click(function(){$("html,body").animate({scrollTop:0},500)});$(window).scroll(function(){1e3<$(this).scrollTop()?$("#top").show():$("#top").fadeOut()});var e=document.getElementsByClassName("select-head")[0],n=document.getElementsByClassName("select-head-cont"),i=document.getElementsByClassName("option")[0],o=document.getElementsByClassName("option-item"),l=document.getElementsByClassName("wraping")[0];n[0].innerHTML=o[0].innerHTML;var c="";e.addEventListener("click",function(t){i.style.display="block",l.style.display="block",l.style.opacity="1",l.style.zIndex="999",$(".option").addClass("show"),c=1,window.event?window.event.cancelBubble=!0:t.stopPropagation()},!1);for(var d=o.length,u=0;u<d;u++)o[u].index=u,o[u].addEventListener("click",function(){n[0].innerHTML=o[this.index].innerHTML,i.style.display="none",l.style.display="none",$(".option").removeClass("show")},!1);var r=document.getElementsByClassName("select-head1")[0],h=document.getElementsByClassName("select-head-cont1"),p=document.getElementsByClassName("option1")[0],f=document.getElementsByClassName("option-item1"),m=document.getElementsByClassName("wraping1")[0];h[0].innerHTML=f[0].innerHTML,r.addEventListener("click",function(t){p.style.display="block",m.style.display="block",m.style.opacity="1",m.style.zIndex="999",c=1,window.event?window.event.cancelBubble=!0:t.stopPropagation()},!1);for(d=f.length,u=0;u<d;u++)f[u].index=u,f[u].addEventListener("click",function(){h[0].innerHTML=f[this.index].innerHTML,p.style.display="none",m.style.display="none"},!1);$(".select1 .swiper-button-prev3,.select1 .swiper-button-next3,.select .swiper-button-prev,.select .swiper-button-next").click(function(t){window.event?window.event.cancelBubble=!0:t.stopPropagation()}),$(document).click(function(t){1===c&&(i.style.display="none",l.style.display="none",p.style.display="none",m.style.display="none"),window.event?window.event.cancelBubble=!0:t.stopPropagation()}),$(".wraping").mouseleave(function(){$(this).css("display","none")}),$(".select").mouseleave(function(){$(".wraping").css("display","none")}),$(".wraping1").mouseleave(function(){$(this).css("display","none")}),$(".select1").mouseleave(function(){$(".wraping1").css("display","none")});var v=[];$(".box li").attr("class");$(".box li").each(function(){var t=$(this).attr("class");v.push(t)});d=v.length-1;var b=0;$(".next").click(function(){w()}),$(".prev").click(function(){y()});var C="";for(u=0;u<d;u++)C+='<a href="javascript:;"><span></span></a>';$(".box .buttons").append(C),$(".box .buttons a").first().find("span").addClass("blue");$(".buttons a");var g=$(".buttons span");function y(){v.unshift(v[d]),v.pop(),$(".box li").each(function(t,e){$(e).removeClass().addClass(v[t])}),--b<0&&(b=d),x()}function w(){v.push(v[0]),v.shift(),$(".box li").each(function(t,e){$(e).removeClass().addClass(v[t])}),d<++b&&(b=0),x()}function x(){$(g).eq(b).addClass("blue").parent().siblings().children().removeClass("blue")}$(document).on("click",".p2",function(){return y(),!1}),$(document).on("click",".p4",function(){return w(),!1}),$(".btn_video").click(function(){}),$(".btn_close").on("click",function(t){t.preventDefault(),$(this).parent().hide(),$(this).siblings(".video_inner").find("video").get(0).pause(),IsMusicPlay&&music.play()}),$(".tbch_video").on("click",function(t){t.preventDefault();var e=$(this).attr("data-video-type");console.log(e),$("."+e).show(),IsMusicPlay&&music.pause()}),$(".btn_video").on("click",function(t){t.preventDefault();var e=$(this).attr("data-video-type");console.log(e),$("."+e).show(),IsMusicPlay&&music.pause()})}),$(function(){var t=(new Date).getDate(),e=$(".content .isoll ul").width()-$(".content .isoll").width();8<t&&t<16||16==t?$(".content .isoll ul").css("left",-900):16<t&&t<24||24==t?$(".content .isoll ul").css("left",-1800):24<t&&$(".content .isoll ul").css("left",-e),$(".content .isoll ul li").eq(t-1).addClass("cur"),$(".content .isoll ul li").eq(t-1).find("p").text("today"),$(".zz li").hover(function(){$(this).find(".ewm").fadeIn(),$(this).find(".show_x p").css("display","none"),$(this).find(".show_x  .wx").css("display","none")},function(){$(this).find(".ewm").fadeOut(),$(this).find(".show_x p").css("display","block"),$(this).find(".show_x .wx").css("display","block")})

var count=$('.tbch_change').attr('count');
if(count==1){
    $('.picone').css('display','block');
}else if(count==2){
    $('.pictwo').css('display','block');
}else{
    $('.box').css('display','block');
}
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

});

