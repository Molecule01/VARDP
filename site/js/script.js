
$(document).ready(function(){	
var MSIE8 = ($.browser.msie) && ($.browser.version == 8);
	$.fn.ajaxJSSwitch({
		topMargin:240,//mandatory property for decktop
		bottomMargin:260,//mandatory property for decktop
		bodyMinHeight:930,
		topMarginMobileDevices:0,//mandatory property for mobile devices
		bottomMarginMobileDevices:0,//mandatory property for mobile devices
		menuInit:function (classMenu, classSubMenu){
			classMenu.find(">li").each(function(){
				var conText = $(this).find('.mText').text();
				$(">a", this).append("<div class='mTextOver'>"+conText+"</div>"); 
			})
		},
		buttonOver:function (item){
			//$(".mText",item).stop(true).animate({top:"160px"}, 600, 'easeOutCubic');
           // $(".mTextOver", item).stop(true).delay(150).animate({top:"0"}, 500, 'easeOutCubic');
			$("span", item.parent()).stop(true).animate({opacity:1, 'top':"2px",'left':"-44px",'height':'35px', 'width':'35px'}, 500, 'easeOutCubic');
		},
		buttonOut:function (item){
			//$(".mText", item).stop(true).animate({top:"0px"}, 600, 'easeOutCubic');
			//$(".mTextOver", item).stop(true).delay(20).animate({top:"-100px"}, 400, 'easeOutCubic');
			$("span", item.parent()).stop(true).animate({opacity:0, 'top':"14px",'left':"60px", 'height':'0', 'width':'0'}, 500, 'easeOutCubic');
		},
		subMenuButtonOver:function (item){
			
		},
		subMenuButtonOut:function (item){
		
		},
		subMenuShow:function(subMenu){
			subMenu.stop(true,true).animate({"height":"show"}, 400, "easeOutCubic");
		},
		subMenuHide:function(subMenu){
			subMenu.stop(true,true).animate({"height":"hide"}, 400, "easeOutCubic");
		},
		pageInit:function (pages){
		},
		currPageAnimate:function (page){

			page.css({"left":$(window).width()}).stop(true).delay(300).animate({"left":0}, 900, "easeOutBack");

		},
		prevPageAnimate:function (page){

			page.stop(true).animate({"display":"block", "left":-$(window).outerWidth()*2}, 700, "easeInCubic");
			
		},
		backToSplash:function (){
		},
		pageLoadComplete:function (){

			$('.splash a b').css({'opacity':'0'});

			$('.splash a').hover(function()
			{
				$(this).find('strong').stop(true).delay(200).animate({'opacity':'0'}, 300,'easeOutCubic');
				$(this).find('b').stop(true).animate({'opacity':'1'}, 300,'easeOutCubic');			
			}, function(){
				$(this).find('strong').stop(true).animate({'opacity':'1'}, 300,'easeOutCubic');
				$(this).find('b').stop(true).delay(200).animate({'opacity':'0'}, 300,'easeOutCubic');
			})




			$('.splash a').click(function()
			{
				$('.splash a b').css({'opacity':'0'});
				$('.splash a strong').css({'opacity':'1'});
			})


		},
	});
	
	
})
$(window).load(function(){	
	$("#webSiteLoader").delay(500).animate({opacity:0}, 600, "easeInCubic", function(){$("#webSiteLoader").remove()});

	$(".image_resize").image_resize({align_img:"center", mobile_align_img:"center"});
	
	});