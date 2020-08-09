$(function(){
	//저해상도시 햄버거메뉴 모양변경
	var  $hamburgerMenu = $(".hamburger-menu");
	$(".hamburger-menu-wrap").on("click",function(){
		$hamburgerMenu.eq(0).toggleClass("top-line");
		$hamburgerMenu.eq(1).toggleClass("mid-line");
		$hamburgerMenu.eq(2).toggleClass("bottom-line");
		$(this).prev().fadeToggle(140).toggleClass("nav-open");
	});
	
	//저해상도시 nav-wrap처리
	$(window).on("resize",function(){
		if($(this).width() > 801) {
			$(".nav-wrap").css("display","block");
		} else if($(this).width() < 801) {
			$(".nav-wrap").css("display","none");
			$(".nav-wrap").removeClass("nav-open");
			$hamburgerMenu.eq(0).removeClass("top-line");
			$hamburgerMenu.eq(1).removeClass("mid-line");
			$hamburgerMenu.eq(2).removeClass("bottom-line");
		}
	});
	
	// 상단 서치아이콘 클릭시 검색창 등장.
	$("#search-icon").on("click",function(){
		$("#search").slideToggle(100);
	});
	
	//스크롤할시 상단 고정된 메뉴바 박스쉐도우처리.
	$(window).on("scroll",function(){
		var scrY = window.scrollY;
		if(scrY > 30) {
			$(".header").css("box-shadow","2px 2px 5px");
		} else if (scrY < 30) {
			$(".header").css("box-shadow","none");
		}
	});
	
	// 최상단 아이콘 크릭시 최상단으로 이동.
	$(".go-top").on("click",function(){
		var headerTop = $(".header-content-box").position().top;
		$("html,body").animate({
			scrollTop: headerTop
		},1000)
	});
});
