"use strict";$(function(){function e(s){$(s+" .tabContents .tabContent").hide().eq(0).show(),$(s+" .tabs .tab").eq(0).addClass("active"),$(s+" .tabs .tab").click(function(e){if(e.stopPropagation(),e.preventDefault(),!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var t=$(this),n=0;$(s+" .tabs .tab").each(function(e){t.get(0)===$(this).get(0)&&(n=e)}),$(s+" .tabContents .tabContent").hide().eq(n).fadeIn(500)}})}$(".play").hover(function(){$(this).addClass("active").parent().find(".menu").stop(!0).fadeIn(100).animate({marginTop:"0",opacity:"1"}),$(this).addClass("active")},function(){$(this).addClass("active"),$(this).parent().mouseleave(function(){$(".menu").stop(!0).fadeOut(200).animate({marginTop:"-24px",opacity:"0"}),$(".play").removeClass("active")})}),$(".logo_left a").click(function(){$("header").hasClass("hide")?($("header").fadeIn().removeClass("hide"),$(".logo_left img").attr("src","images/goto.png"),$(".logo_left").addClass("show")):($("header").fadeOut().addClass("hide"),$(".logo_left img").attr("src","images/go.png"))}),$(".logo_left.show").mouseenter(function(){$("header").fadeIn().removeClass("hide"),$(".logo_left img").attr("src","images/goto.png"),$(this).removeClass("show")}),e(".wrap"),e(".yctj"),e(".show"),e(".pjhd"),e(".zxdtd"),$(".rr").click(function(){var e=$(".content .isoll ul").offset().left;if(-1600<e){var t=Math.abs(e)+400;$(".content .isoll ul").animate({left:-t},1e3)}}),$(".ll").click(function(){var e=$(".content .isoll ul").offset().left;if(e<140&&-1700<e){var t=e+400;$(".content .isoll ul").animate({left:t},1e3)}}),$("#top").click(function(){$("html,body").animate({scrollTop:0},500)});$(window).scroll(function(){1e3<$(this).scrollTop()?$("#top").show():$("#top").fadeOut()});var t=document.getElementsByClassName("select-head")[0],n=document.getElementsByClassName("select-head-cont"),s=document.getElementsByClassName("option")[0],a=document.getElementsByClassName("option-item"),o=document.getElementsByClassName("wraping")[0];n[0].innerHTML=a[0].innerHTML,t.addEventListener("click",function(){s.style.display="block",o.style.display="block",o.style.opacity="1",o.style.zIndex="999"},!1);for(var i=a.length,l=0;l<i;l++)a[l].index=l,a[l].addEventListener("click",function(){n[0].innerHTML=a[this.index].innerHTML,s.style.display="none",o.style.display="none"},!1);$("document").click(function(){s.style.display="none",o.style.display="none"});var c=document.getElementsByClassName("select-head1")[0],d=document.getElementsByClassName("select-head-cont1"),r=document.getElementsByClassName("option1")[0],u=document.getElementsByClassName("option-item1"),f=document.getElementsByClassName("wraping1")[0];d[0].innerHTML=u[0].innerHTML,c.addEventListener("click",function(){r.style.display="block",f.style.display="block",f.style.opacity="1",f.style.zIndex="999"},!1);for(i=u.length,l=0;l<i;l++)u[l].index=l,u[l].addEventListener("click",function(){d[0].innerHTML=u[this.index].innerHTML,r.style.display="none",f.style.display="none"},!1);document.body.addEventListener("click",function(){r.style.display="none",f.style.display="none"}.false);var m=[];$(".box li").attr("class");$(".box li").each(function(){var e=$(this).attr("class");m.push(e)});i=m.length-1;var p=0;$(".next").click(function(){v()}),$(".prev").click(function(){g()});var h="";for(l=0;l<i;l++)h+='<a href="javascript:;"><span></span></a>';$(".box .buttons").append(h),$(".box .buttons a").first().find("span").addClass("blue");$(".buttons a");var y=$(".buttons span");function g(){m.unshift(m[i]),m.pop(),$(".box li").each(function(e,t){$(t).removeClass().addClass(m[e])}),--p<0&&(p=i),C()}function v(){m.push(m[0]),m.shift(),$(".box li").each(function(e,t){$(t).removeClass().addClass(m[e])}),i<++p&&(p=0),C()}function C(){$(y).eq(p).addClass("blue").parent().siblings().children().removeClass("blue")}$(document).on("click",".p2",function(){return g(),!1}),$(document).on("click",".p4",function(){return v(),!1})});