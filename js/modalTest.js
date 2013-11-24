$(document).ready(function() {

	var imageTop = $("<img src='assets/cube_after.png' alt='temp'>");
	var imageBottom = $("<img src='assets/cube_before.png' alt='temp'>");

	var modal = Modal("myModal", "Test Modal", [$("<p>Typing in random stuff</p>")]);
	$("body").append(modal);
	var modal2 = Modal("myModal", "Test Modal2", [$("<p>Yo</p>")]);
	$("body").append(modal);

	//$("body").prepend(CreateHoverImageForModal(imageTop, imageBottom, $("#myModal")));
	$("body").prepend(CreateHoverImageForModal(imageTop, imageBottom, modal));
});