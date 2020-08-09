$(function(){
	$(".nav-wrap > ul > li > a").eq(0).css("border-bottom","5px solid #3c8213");

	/*section1 - 프렌즈 네임 페이드 */
	$(".mini-img").on("mouseover",function(){
		$(this).children(":last-child").stop().fadeIn(300)
	}).on("mouseleave",function(){
		$(this).children(":last-child").stop().fadeOut(300);
	});
	
	/*스크롤 이벤트*/
	scrEffect(".mini-img", "mini-img-fade" ,".section1-friend-wrap");
	scrEffect(".section1-title","section1-title-fade");
	scrEffect(".mini-img-click", "mini-img-click-fade",".section1-friend-wrap");
	scrEffect(".section2-title > h1 > span", "title-ani-start");
	scrEffect(".box-bn1","box-bn1and3-fade");
	scrEffect(".box-bn2","box-bn2and4-fade");
	scrEffect(".box-bn3","box-bn1and3-fade");
	scrEffect(".box-bn4","box-bn2and4-fade");
	
	/* 섹션3 콘텐츠 자동 */
	var triggerEnd = false;
	$(window).on("scroll",function(){
		if (triggerEnd) return;
		var scrY = window.scrollY;
		var section3Top = $(".section3").offset().top - 100;
		if(section3Top <= scrY) {
			setTimeout(function(){
				$(".menu-allcontent-intro").fadeOut(function(){
					triggerEnd = true;
					$(".section3-menu > li:first").trigger("click");
				});
			},200)
		}
		triggerEnd = false;
	});
	
	/* 섹션3 list 클릭시 메뉴 슬라이드 */
	$(".section3-menu > li").on("click",section3Slide);
	
	/* 섹션3 컨텐츠 fade */
	$(".slide-btn").on("click",function(){
		var nextBtn = $(this).index() === 1 ? true : false;
		var currentTarget= $(this).nextAll("div");
		if(nextBtn) {
			currentTarget.eq(1).css("opacity",1).prev().css("opacity",0);
			if(currentTarget.eq(1).css("opacity") == 1) {
				currentTarget.eq(0).css("opacity",1).next().css("opacity",0);
			}
		}
		if(!nextBtn) {
			currentTarget.eq(0).css("opacity",1).next().css("opacity",0);
			if(currentTarget.eq(0).css("opacity") == 1) {
				currentTarget.eq(1).css("opacity",1).prev().css("opacity",0)
			}
		}
	});
	
	/* 섹션4 카드 슬라이더 이벤트*/
	var sliderTimer = setInterval(section4Slide, 3000);
	
	/* 스크롤 이펙트 함수 */
	function scrEffect(target, addClass, subTarget) {
		var target2Top = subTarget || target;
		var vh;
		var targetTop = $(target2Top).offset().top;
		
		$(window).on("resize",function(){
			vh = innerHeight;
		}).trigger("resize");
		
		$(window).on("scroll",function(){
			var scrY = window.scrollY;
			if(targetTop - (vh / 2) <= scrY && !$(target).hasClass(addClass)) {
				$(target).addClass(addClass);
			}
		});
	}
	
	/* 섹션3 컨텐츠 슬라이드 함수 */
	function section3Slide() {
		var liEve = $(this).index() + 1;
		var $content = $("#content" + liEve);
		var $prevContent = $content.prevAll().children();
		var $nextContent = $content.nextAll().children();
		$(this).addClass("btn-on");
		if($(this).prevAll().addClass("btn-on")) {
			$(this).prevAll().removeClass("btn-on");
		}
		if($(this).nextAll().addClass("btn-on")) {
			$(this).nextAll().removeClass("btn-on");
		}
		if($content.prevAll().children(":visible")) {
			$prevContent.hide().parent().css("right","-2100px");
		}
		if($content.nextAll().children(":visible")) {
			$nextContent.hide().parent().css("right","-2100px");
		}
		$content.children().show().parent().stop().animate({
			right: "0"
		},500);
	}
	/* 섹션4 카드 슬라이드 함수 */
	function section4Slide(e) {
        var operator = "-=";
        var slideBoxWidth = $(".card-slide figure > img").width() + 20;
        var slideId = $(".card-slide > div").children("a:eq(0)").attr("id");
		if(e) {
			prevBtn = $(this).index() === 1 ? true : false;	
		} else {
			prevBtn = false;
		}
		if(prevBtn) {
			operator = "+=";
			$(".card-slide > div").prepend($(".card-slide > div").children(":last")).css({
				left: -slideBoxWidth
			});
		}
		$(".card-slide > div").animate({
			left: operator + slideBoxWidth
		},function() { 
			if(!prevBtn) {
				$(".card-slide > div").append($(".card-slide > div").children(":first")).css({
					left: 0
				},1000);
			}	
		});
			$(".section4-card-name > div").hide();
			slideId = $(".card-slide > div").children("a:eq(1)").attr("id");
			$(`#content-${slideId}`).fadeIn(1000);				
    }
});