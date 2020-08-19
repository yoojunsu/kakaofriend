$(function(){
	$(".nav-wrap > ul > li > a").eq(3).css("border-bottom","5px solid #3c8213");
	
	/**샵인포 최상단 페이드 슬라이드 **/
	var slideBox = document.querySelector(".shop-slide");
	var slideTimer = setInterval(slide,2000);
	function slide(){
		var slideClass= "slide-event";
		var curSlide = document.querySelector("." + slideClass);
		var nextSlide = curSlide.nextElementSibling;
		curSlide.classList.remove(slideClass);
		
		if(!nextSlide) {
			nextSlide = document.querySelector(".slide-item:first-child");
		}
		nextSlide.classList.add(slideClass);
	}
	
	//한국 콤보박스 메뉴클릭시 초이스 클래스
	$(".shop-list-wrap > ul > li").on("click",function(){
		$(this).addClass("menu-choice");
		if($(this).hasClass("menu-choice")) {
			$(this).nextAll().removeClass("menu-choice");
			$(this).prevAll().removeClass("menu-choice");
		}
	});
	
	//국가별 클릭시 매장 리스트 변경
	$(".shop-list-wrap > ul > li > a").on("click",function(){
		switch($(this).attr("id")) {
			case "all-shop" : 
				$(".shop-list").children().css("display","block");
				$(".area-combo").css("display","none");
				break;
			case "korea-shop" :
				$(".korean").css("display","block");
				$(".area-combo").css("display","block"); 
				$(".shop").not(".korean").css("display","none");
				break;
			case "japan-shop" :
				$(".japan").css("display","block");
				$(".shop").not(".japan").css("display","none");
				$(".area-combo").css("display","none");
				break;		
		}
		$(".area-combo > div").text($(".area-combo > ul > li:first-child").text());
		$(".area-combo > ul > li:first-child").addClass("combolist-choice");
		$(".area-combo > ul > li").not($(".area-combo > ul > li:first-child")).removeClass("combolist-choice");
	});
	
	
	
	// 도큐먼트 클릭시 콤보박스 제거
	$(".area-combo > ul").on("mousedown",function(e){
		e.stopPropagation();
	});
		
	$(document).on("mousedown",function(){
		$(".area-combo > ul").slideUp();
	});
	
	$(".area-combo > div").on("click",function(){
		$(this).next().slideToggle();
	});
	
	$(".area-combo > ul > li").on("click",choiceCombo);
	
	function choiceCombo() {
		$(this).parent().slideUp();
		$(this).parent().prev().text($(this).text());
		$(this).addClass("combolist-choice");
		if($(this).hasClass("combolist-choice")){
			$(this).nextAll().removeClass("combolist-choice");
			$(this).prevAll().removeClass("combolist-choice");
		}
		
		switch($(this).attr("id")) {
			case "all" :
				$(".shop-list").children().css("display","block");
				break;
			case "seoul" :
				$(".seoul").css("display","block");
				$(".shop-list > div").not(".seoul").css("display","none");
				break;
			case "gyeonggi" :
				$(".gyeonggi").css("display","block");
				$(".shop-list > div").not(".gyeonggi").css("display","none");
				break
			case "incheon" :
				$(".incheon").css("display","block");
				$(".shop-list > div").not(".incheon").css("display","none");
				break;
			case "daegu" :
				$(".daegu").css("display","block");
				$(".shop-list > div").not(".daegu").css("display","none");
				break;
			case "daejeon" :
				$(".daejeon").css("display","block");
				$(".shop-list > div").not(".daejeon").css("display","none");
				break;
			case "busan" :
				$(".busan").css("display","block");
				$(".shop-list > div").not(".busan").css("display","none");
				break;
			case "jeju" :
				$(".jeju").css("display","block");
				$(".shop-list > div").not(".jeju").css("display","none");
				break;	
		}
	}
});
