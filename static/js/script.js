$( function() {
	var linear = ["purple", "blue", "red", "orange", "green"];
	var random1 = ["purple", "green", "blue", "orange", "red"];
	setTimeout(linearFlash, 500, 0, random1);
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
});