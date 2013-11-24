$(document).ready(function() {
	$("body").prepend(MenuBuffer());
	$("body").prepend(Menu());

	var image1 = new Image();
	image1.src = "assets/cube_before.png";
	image1.width = 800;
	image1.height = 600;

	var image2 = new Image();
	image2.src = "assets/cube_after.png";
	image2.width = 800;
	image2.height = 600;

	var slider = ImageSlider(image1, image2);
	$("#mainContent").append(slider);

	Transition()
});