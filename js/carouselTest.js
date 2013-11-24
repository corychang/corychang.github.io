var list;

$(document).ready(function() {

	var imageTop = $("<img src='assets/cube_after.png' alt='temp'>");
	var imageBottom = $("<img src='assets/cube_before.png' alt='temp'>");

	var modal1 = Modal("myModal", "Test Modal", [$("<p>Typing in random stuff</p>")]);
	var hoverImage = CreateHoverImageForModal(imageTop, imageBottom, modal1);
	var image1 = new CarouselItem(hoverImage, "Cube", "Some caption");

	//var image1 = new CarouselItem($("<img src='assets/cube_after.png' alt='temp'>"), "Cube", "Some caption");
	var image2 = new CarouselItem($("<img src='assets/dinosaur_after.png' alt='temp'>"), "Dino", "Paragraph");

	list = [image1, image2];
	//list = [image1];

	var carousel = Carousel(list);

	$("#mainContent").append(carousel);
	carousel.carousel();

	resizeAll(list);
});

$(window).resize(function() {
	resizeAll(list);
});