$(function(){
	$(".nav-wrap > ul > li > a").eq(2).css("border-bottom","5px solid #3c8213");
	/** 슬릭슬라이더 **/
    $(".recommend-slide").slick({
        slide: "a",
        infinite: true,
        speed: 1200,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        pauseOnHover: true,
        pauseOnFocus: false,
        responsive: [
        	{
        		breakpoint: 600,
        		settings: {
        			slidesToShow: 2,
        			slidesToScroll: 2
        		}
        	}
        ]
    });
    
    /** 콤보박스 슬라이드 토글 **/
    $(".combo-box > div").on("click",function(){
    	var $openBoxTarget = $(this).parent();
    	$(this).next().stop().slideToggle(250,function(){
    		if($(this).css("display") === "block") {
    			$openBoxTarget.addClass("combo-open");
    		} else {
    			$openBoxTarget.removeClass("combo-open");
    		}
    	});
    	if($(this).next().css("display") === "block") {
    		$(this).parent().next().children().eq(1).stop().slideUp(100,function(){
    			$(this).parent().removeClass("combo-open");
    		});
    		$(this).parent().prev().children().eq(1).stop().slideUp(100,function(){
    			$(this).parent().removeClass("combo-open");
    		});
    	}
    });
    
    /**리스트 콤보박스 텍스트변경**/
    var comboBox = document.querySelector("#list-combo");
    var comboChoiceBox = document.querySelector("#list-combo > div")
    var listWrap = document.querySelector("#list-combo > ul");
	var comboList = document.querySelectorAll("#list-combo > ul > li");
	Array.from(comboList,function(comboLi){
		comboLi.onclick = function() {
			comboBox.classList.remove("combo-open");
			$("#list-combo > ul").stop().slideUp(250);
			comboChoiceBox.textContent = this.textContent;
		};	
	});
	
	/**캐릭터 콤보박스 아이콘 변경**/
	$(".charac-combo > div").on("mouseover",comboIconChange).on("mouseleave",comboIconChange);
	
	function comboIconChange(e) {
		var $icon = $(this).children().children("img");
		var comboCharacList = $(this).attr("id");
		switch(comboCharacList) {
			case "ryan-icon":
				$icon.attr("src","/img/shopimg/ryan-icon-on.png");
				if(e.type === "mouseleave") {
					$icon.attr("src","/img/shopimg/ryan-icon.png");
				}
				break;
			case "apeach-icon":
				$icon.attr("src","/img/shopimg/apeach-icon-on.png");
				if(e.type === "mouseleave") {
					$icon.attr("src","/img/shopimg/apeach-icon.png");
				}
				break;
			case "muzi-icon": 
				$icon.attr("src","/img/shopimg/muzi-icon-on.png");
				if(e.type === "mouseleave") {
					$icon.attr("src","/img/shopimg/muzi-icon.png");
				}
				break;
			case "frodo-icon":
				$icon.attr("src", "/img/shopimg/frodo-icon-on.png");					
				if(e.type === "mouseleave") {
					$icon.attr("src","/img/shopimg/frodo-icon.png");
				}
				break;
			case "neo-icon":
				$icon.attr("src", "/img/shopimg/neo-icon-on.png");
				if(e.type === "mouseleave") {
					$icon.attr("src","/img/shopimg/neo-icon.png");
				}
				break;
			case "tube-icon":
				$icon.attr("src","/img/shopimg/tube-icon-on.png");
				if(e.type === "mouseleave") {
					$icon.attr("src","/img/shopimg/tube-icon.png");
				}
				break;
			case "jayg-icon":
				$icon.attr("src","/img/shopimg/jayg-icon-on.png");
				if(e.type === "mouseleave") {
					$icon.attr("src","/img/shopimg/jayg-icon.png");
				}
				break;
			case "con-icon":
				$icon.attr("src","/img/shopimg/con-icon-on.png");
				if(e.type === "mouseleave") {
					$icon.attr("src","/img/shopimg/con-icon.png");
				}
				break;	
			case "all-icon":
				$icon.attr("src", "/img/shopimg/all-icon-on.png");
				if(e.type === "mouseleave") {
					$icon.attr("src","/img/shopimg/all-icon.png");
				}			
				break;
		}		
	}
	
	$(".combo").on("mousedown",function(e){
		e.stopPropagation();
	});
	$(document).on("mousedown",function(){
		$(".combo").stop().slideUp(function(){
			$(this).parent().removeClass("combo-open");
		});
	});
	
	/** 콤보박스 캐릭터 선택시 쇼핑리스트 변경**/
	$(".combo-content").on("click",comboShopList);
	
	function comboShopList(charac){
		var $shopItem = $(".shop-item > ul > li");
		var $ryan = $(".ryan");
		var $apeach = $(".apeach");
		var $muzi = $(".muzi");
		var $frodo = $(".frodo");
		var $neo = $(".neo");
		var $con = $(".con");
		var $tube = $(".tube");
		var $jayg = $(".jayg");
		var	inTime = 700;
		var outTime = 200;
		$(this).parents(".charac-combo-wrap").stop().slideUp(250,function(){
			$(this).parent().removeClass("combo-open");
		});
		$(this).parents("div.charac-combo-wrap").prev().text($(this).children().find("p").text());
		switch($(this).attr("data-item")) {
			case "ryan" : 
				$shopItem.not(".ryan").fadeOut(outTime);
				$(".shop-category > p > span").text($ryan.length + "개");
				if($ryan.css("display") === "none") {
					$ryan.fadeIn(inTime)
				}
				break;
			case "apeach" :
				$shopItem.not(".apeach").fadeOut(outTime,function(){
					if($apeach.css("display") === "none") {
						$apeach.fadeIn(inTime);	
					}					
				});					
				$(".shop-category > p > span").text($apeach.length + "개");
				break;
			case "muzi" :
				$shopItem.not(".muzi").fadeOut(outTime,function(){
					if($muzi.css("display") ===  "none") {
						$muzi.fadeIn(inTime);
					}					
				});
				$(".shop-category > p > span").text($muzi.length + "개");
				break;
			case "frodo" :
				$shopItem.not(".frodo").fadeOut(outTime,function(){
					if($frodo.css("display") === "none") {
						$frodo.fadeIn(inTime);
					}					
				});
				$(".shop-category > p > span").text($frodo.length + "개");
				break;
			case "neo" :
				$shopItem.not(".neo").fadeOut(outTime,function(){
					if($neo.css("display") === "none") {
						$neo.fadeIn(inTime);
					}					
				});
				$(".shop-category > p > span").text($neo.length + "개");
				break;
			case "con" :
				$shopItem.not(".con").fadeOut(outTime,function(){
					if($con.css("display") === "none") {
						$con.fadeIn(inTime);
					}					
				});
				$(".shop-category > p > span").text($con.length + "개");
				break;
			case "tube" :
				$shopItem.not(".tube").fadeOut(outTime,function(){
					if($tube.css("display") === "none") {
						$tube.fadeIn(inTime);
					}					
				});
				$(".shop-category > p > span").text($tube.length + "개");
				break;
			case "jayg" :
				$shopItem.not(".jayg").fadeOut(outTime,function(){
					if($jayg.css("display") === "none") {
						$jayg.fadeIn(inTime);
					}					
				});
				$(".shop-category > p > span").text($jayg.length + "개");
				break;
			default :
				$shopItem.fadeIn(inTime);
				$(".shop-category > p > span").text($shopItem.length + "개");	
		} 		
	}
	
	/** 쇼핑리스트 높이 값 늘리기 **/
	$("#shop-item-more").on("click",function(){
		$(".shop-item").css("height","auto");
		$(this).css("display","none");
	});
});

