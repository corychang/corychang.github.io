var slider;

$(document).ready(function() {
	$("body").prepend(MenuBuffer());
	$("body").prepend(Menu());

/*
	var image1 = new Image();
	image1.src = "assets/dinosaur_before.png";
	image1.width = 900;
	image1.height = 750;

	var image2 = new Image();
	image2.src = "assets/dinosaur_after.png";
	image2.width = 900;
	image2.height = 750;

	*/
	var image1 = $("<img src='assets/dinosaur_before.png' alt='temp'>");
	var image2 = $("<img src='assets/dinosaur_after.png' alt='temp'>");

	var width = $("body").width();

	slider = ImageSlider(image1, image2);
	slider.resize(width);
	$("#mainContent").append(slider);

	Transition()
});


// TODO: this isn't working right now.
$(window).resize(function() {
	var width = $("body").width();
	//$(".slider").each(function(index, cur) {
	//	$(cur).resize(width);
	//});
	slider.resize(width);
});