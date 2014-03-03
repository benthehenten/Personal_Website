$( function() {
	if(!Modernizr.touch){
		var linear = ["purple", "blue", "red", "orange", "green"];
		var random1 = ["purple", "green", "blue", "orange", "red"];
		var rightleft= ["purple", "green", "red", "orange", "blue", "orange", "red", "green", "purple"]
		setTimeout(linearFlash, 800, 0, rightleft);
		function linearFlash(index, colors){
			var $button = $(".main ." + colors[index]);
			$button.addClass("hover");
			setTimeout(function () {
				$button.removeClass("hover");
				if(index < colors.length -1){
					setTimeout(linearFlash,35, index + 1, colors);
				}
			}, 35);
		}
		setTimeout(function() {
			if($(window).scrollTop() > 0){
				$(".navbar").addClass("fixed");
			}
		},200);

		var animating = false; 

		$("a[href='#projects']").click(function() {
			scrollto("bottom");
			return false;
		});

		$("a[href='#top']").click(function() {
			scrollto("top");
			return false;
		});

		function scrollto(direction) {
			if(!animating){
				animating = true; 
				console.log(direction);
				if(direction == "bottom"){
					setTimeout(function(){$(".navbar").addClass("fixed");}, 400)
					$("html, body").animate({ 
						scrollTop: $(".projectspage").offset().top }, 
						1000, "easeInOutCirc", function (){	
							animating = false;
					});
				}else{
					$(".navbar").removeClass("fixed");
					$("html, body").animate({ 
						scrollTop: 0},
						1000, "easeInOutCirc", function(){animating = false;});
				}
			}
		}

		$(window).bind('wheel', function(e){
			e.preventDefault();
			if(e.originalEvent.wheelDelta <= 0){
				scrollto("bottom");
			}else{
				scrollto("top");
			}

		})
	}
});
