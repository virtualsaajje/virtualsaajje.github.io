$(window).on("load", function () {
	$("footer").css("display", "block");
	$(".se-pre-con").fadeOut("slow", () => {
		$("main")
			.css("opacity", 0)
			.css("display", "grid")
			.css("margin-top", "3rem")
			.animate({ opacity: 1, marginTop: 0 }, 1000, () => {
				$("footer").css("visibility", "visible").animate({ opacity: 1 }, 500);
			});
	});
});
