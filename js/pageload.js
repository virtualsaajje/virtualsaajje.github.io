$(window).on("load", function () {
	$(".se-pre-con").fadeOut("slow", () => {
		$("main")
			.css("opacity", 0)
			.css("display", "grid")
			.css("margin-top", "3rem")
			.animate({ opacity: 1, marginTop: 0 }, 1000);
	});
});
