$("li").click(function() {
	$("h2").css("display","none");
})

$("#spri").click(function() {
	$("body").css({"background-image": "url(./images/spring.jpg)", "background-position": "0% 15%"});
})

$("#summ").click(function() {
	$("body").css({"background-image": "url(./images/summer.jpg)", "background-position": "0% 70%"});
})

$("#autm").click(function() {
	$("body").css({"background-image": "url(./images/autumn.jpg)", "background-position": "0% 40%"});
})

$("#wint").click(function() {
	$("body").css({"background-image": "url(./images/winter.jpg)", "background-position": "0% 27%"});
})