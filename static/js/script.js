$( function() {
	
		$("a[href='#projects']").click(function(e) {
			if($(window).width() >= 768){
				e.preventDefault(); 
				scrollto("bottom");
			}
		});


		$("a[href='#top']").click(function(e) {
			
			if($(window).width() >= 768){
				e.preventDefault();
				scrollto("top");
			}

		});

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

		$(window).bind('wheel mousewheel', function(e){
			if($(window).width() >= 768){	
				console.log(" wheel delta: " + e.originalEvent.wheelDelta);
				console.log(" delta Y: " + e.originalEvent.delta);
				e.preventDefault();

				var delta = Math.max(-1, Math.min(1, (e.originalEvent.wheelDelta || -e.originalEvent.detail)));

				if(delta < 0){
					scrollto("bottom");
				}else if(delta > 0){
					scrollto("top");
				}

				// if(e.originalEvent.deltaY >= 0){
				// 	scrollto("bottom");
				// }else if(e.originalEvent.deltaY < 0){
				// 	scrollto("top");
				// }else if(e.originalEvent.delta >= 0){
				// 	scrollto("bottom");
				// }else{
				// 	scrollto("top");
				// }

			}
		})

		function scrollto(direction) {
			if(!animating){
				animating = true; 
				console.log("scroll captured");
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


	if($(window).width() >= 768){
		var linear = ["purple", "blue", "red", "orange", "green"];
		var random1 = ["purple", "green", "blue", "orange", "red"];
		var rightleft= ["purple", "green", "red", "orange", "blue", "orange", "red", "green", "purple"]
		setTimeout(linearFlash, 800, 0, rightleft);
		
		setTimeout(function() {
			if($(window).scrollTop() > 0){
				$(".navbar").addClass("fixed");
			}
		},200);

		var animating = false; 

		

		
	}
});
