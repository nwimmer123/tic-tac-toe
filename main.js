// wait for DOM to load before running JS
$(document).ready(function(){
//TRAVIS SAYS THE FOLLOWING SOLUTION IS NO GOOD!!! It's logging x's and o's
//each time, but it overlays it, so it could potentilly work anyways,
//but isn't a good solution.

//alernating X's and O's

	var count = 0;
	$(".box").click(function() {
		if (count % 2 === 0  && $(this).text() !== ("X") && $(this).text() !== ("O")) {
			$(this).text("X");
			$(this).css({"color": "blue", "font-size": "80px"});
			count++;
			$(".page-header").text("Go O");
			

		} else if (count % 2 !== 0 && $(this).text() !== ("X") && $(this).text() !== ("O")) {
			$(this).text("O");
			$(this).css({"color": "red", "font-size": "80px"});
			count++;
			$(".page-header").text("Go X");
			
		}
	});

//working RESET button
	$("button").on("click", function() {
		$(".box").text(" ");
		});
});

