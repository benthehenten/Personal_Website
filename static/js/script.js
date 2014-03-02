$( function() {
	var linear = ["purple", "blue", "red", "orange", "green"];
	var random1 = ["purple", "green", "blue", "orange", "red"];
	var rightleft= ["purple", "blue", "red", "orange", "green", "orange", "red", "blue", "purple"]
	setTimeout(linearFlash, 500, 0, rightleft);
	function linearFlash(index, colors){
		var $button = $("." + colors[index]);
		$button.addClass("hover");
		setTimeout(function () {
			$button.removeClass("hover");
			if(index < colors.length -1){
				setTimeout(linearFlash,35, index + 1, colors);
			}
		}, 35);
	}

	$("a[href='#projects']").click(function (e) {
		$("html, body").animate({ scrollTop: $(".projectspage").offset().top }, 1000, "easeInOutCubic");
		return false;
});
});
