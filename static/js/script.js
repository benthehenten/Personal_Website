// $( function() {
// 	var linear = ["purple", "blue", "red", "orange", "green"];
// 	var random1 = ["purple", "green", "blue", "orange", "red"];
// 	var rightleft= ["purple", "blue", "red", "orange", "green", "orange", "red", "blue", "purple"]
// 	setTimeout(linearFlash, 500, 0, rightleft);
// 	function linearFlash(index, colors){
// 		var $button = $("." + colors[index]);
// 		$button.addClass("hover");
// 		setTimeout(function () {
// 			$button.removeClass("hover");
// 			if(index < colors.length -1){
// 				setTimeout(linearFlash,35, index + 1, colors);
// 			}
// 		}, 35);
// 	}	
// });

$("nametext").throwable({
                        containment:[0,0,500,500],
                        drag:true,
                        gravity:{x:8,y:8},
                        impulse:{
                            f:52,
                            p:{x:1,y:1}
                        },
                        shape:"circle",
                        autostart:true,
                        bounce:0.5,
                        damping:100,
                        areaDetection:[[0,0,300,300]],
                        collisionDetection: true
                    });