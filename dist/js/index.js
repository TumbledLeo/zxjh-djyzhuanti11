"use strict";$(function(){function t(s){$(s+" .tabContents .tabContent").hide().eq(0).show(),$(s+" .tabs .tab").eq(0).addClass("active"),$(s+" .tabs .tab").click(function(t){if(t.stopPropagation(),t.preventDefault(),!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var e=$(this),n=0;$(s+" .tabs .tab").each(function(t){e.get(0)===$(this).get(0)&&(n=t)}),$(s+" .tabContents .tabContent").hide().eq(n).fadeIn(500)}})}var s;$(".play").hover(function(){$(this).addClass("active").parent().find(".menu").stop(!0).fadeIn(100).animate({marginTop:"0",opacity:"1"}),$(this).addClass("active")},function(){$(this).addClass("active"),$(this).parent().mouseleave(function(){$(".menu").stop(!0).fadeOut(200).animate({marginTop:"-24px",opacity:"0"}),$(".play").removeClass("active")})}),$(".logo_left a").click(function(){$("header").hasClass("hide")?($("header").fadeIn().removeClass("hide"),$(".logo_left img").attr("src","images/goto.png"),$(".logo_left").addClass("show")):($("header").fadeOut().addClass("hide"),$(".logo_left img").attr("src","images/go.png"))}),$(".logo_left.show").mouseenter(function(){$("header").fadeIn().removeClass("hide"),$(".logo_left img").attr("src","images/goto.png"),$(this).removeClass("show")}),s=".wrap",$(s+" .tabs .tab").eq(0).addClass("active"),$(s+" .tabs .tab").click(function(t){if(t.stopPropagation(),t.preventDefault(),!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var e=$(this),n=0;$(s+" .tabs .tab").each(function(t){e.get(0)===$(this).get(0)&&(n=t)}),$(s+" .tabContents .tabContent").animate({height:"0"},100),$(s+" .tabContents .tabContent").eq(n).animate({height:"300px"},100)}}),t(".yctj"),t(".show"),t(".pjhd"),t(".zxdtd"),$(".rr").click(function(){$(".content .isoll ul").offset().left;$(".content .isoll ul").animate({left:-2437},1e3)}),$(".ll").click(function(){$(".content .isoll ul").offset().left;$(".content .isoll ul").animate({left:108},1e3)}),$("#top").click(function(){$("html,body").animate({scrollTop:0},500)});$(window).scroll(function(){1e3<$(this).scrollTop()?$("#top").show():$("#top").fadeOut()});var n=document.getElementsByClassName("select-head")[0],a=document.getElementsByClassName("select-head-cont"),o=document.getElementsByClassName("option")[0],i=document.getElementsByClassName("option-item"),l=document.getElementsByClassName("wraping")[0];a[0].innerHTML=i[0].innerHTML,n.addEventListener("click",function(){o.style.display="block",l.style.display="block",l.style.opacity="1",l.style.zIndex="999",$(".option").addClass("show"),e.stopPropagation()},!1);for(var c=i.length,d=0;d<c;d++)i[d].index=d,i[d].addEventListener("click",function(){a[0].innerHTML=i[this.index].innerHTML,o.style.display="none",l.style.display="none",$(".option").removeClass("show")},!1);var r=document.getElementsByClassName("select-head1")[0],u=document.getElementsByClassName("select-head-cont1"),f=document.getElementsByClassName("option1")[0],m=document.getElementsByClassName("option-item1"),p=document.getElementsByClassName("wraping1")[0];u[0].innerHTML=m[0].innerHTML,r.addEventListener("click",function(){f.style.display="block",p.style.display="block",p.style.opacity="1",p.style.zIndex="999"},!1);for(c=m.length,d=0;d<c;d++)m[d].index=d,m[d].addEventListener("click",function(){u[0].innerHTML=m[this.index].innerHTML,f.style.display="none",p.style.display="none"},!1);document.body.addEventListener("click",function(){f.style.display="none",p.style.display="none"}.false);var h=[];$(".box li").attr("class");$(".box li").each(function(){var t=$(this).attr("class");h.push(t)});c=h.length-1;var g=0;$(".next").click(function(){b()}),$(".prev").click(function(){y()});var C="";for(d=0;d<c;d++)C+='<a href="javascript:;"><span></span></a>';$(".box .buttons").append(C),$(".box .buttons a").first().find("span").addClass("blue");$(".buttons a");var v=$(".buttons span");function y(){h.unshift(h[c]),h.pop(),$(".box li").each(function(t,e){$(e).removeClass().addClass(h[t])}),--g<0&&(g=c),k()}function b(){h.push(h[0]),h.shift(),$(".box li").each(function(t,e){$(e).removeClass().addClass(h[t])}),c<++g&&(g=0),k()}function k(){$(v).eq(g).addClass("blue").parent().siblings().children().removeClass("blue")}$(document).on("click",".p2",function(){return y(),!1}),$(document).on("click",".p4",function(){return b(),!1})});