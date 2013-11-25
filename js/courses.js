var carousel_list;
var slider_list1;

$(document).ready(function() {
	$("body").prepend(MenuBuffer());
	$("body").prepend(Menu());

	// Content for the 15-462 modal.
	var image1Top = $("<img src='assets/15_462.jpg' alt='Colored image of water simulation.'>");
	var image1Bottom = $("<img src='assets/15_462_bw.jpg' alt='Black and white image of water simulation.'>");

	var slider1_1 = ImageSlider($("<img src='assets/dinosaur_before.jpg' alt='Dinosaur model with 0 subdivisions.'>"),
								$("<img src='assets/dinosaur_after.jpg' alt='Dinosaur model with 6 subdivisions.'>"));
	var slider1_2 = ImageSlider($("<img src='assets/toy_before.jpg' alt='Scene before any processing.'>"),
								$("<img src='assets/toy_after.jpg' alt='Scene with non-photo realistic shaders applied.'>"));
	var slider1_3 = ImageSlider($("<img src='assets/stacks_before.jpg' alt='Scene of cubes and spheres.'>"),
								$("<img src='assets/stacks_after.jpg' alt='Ray-traced scene of cubes and spheres.'>"));
	var modal1Content = [
		$("<p>This course covers the fundamentals of computer graphics, where the labs are taugh through OpenGL. We cover many topics such as affine transformations, BRDF, radiosity, and global illumination. The first lab covers the basics of programming in OpenGL.</p>"),
		$("<p>Our second lab goes over loop subdivision. My implementation uses a winged edge data structure which contains some information about vertices, edges, and faces, while storing the others. Below is a comparison of a stegosaurus model without subdivision, and one with six subdivisions which runs in under four seconds.</p>"),
		slider1_1,
		$("<br/>"),
		$("<p>Our third lab covers non-photorealistic graphics achieved by applying shaders over a scene. The main effect is creating a dark outline around an object whose thickness is a function of the depth from the camera. We also implemented motion blur (not shown) which is achieved by maintaining a second buffer and forming an image through a linear combination of the two.</p>"),
		slider1_2,
		$("<br/>"),
		$("<p>Our fourth lab was to implement a ray tracer which could simulate the effects of reflection, refraction, and hard shadows. A ray is shot from the camera through each pixel on screen in parallel and recursively solves for the proper coloring for that pixel.</p>"),
		slider1_3,
		$("<br/>"),
		$("<p>The final lab was a simple phsyics simulator, modeling collisions, and simple gravity and spring forces. Our simulator also had to simulate rotation and torque. We used a Runge-Kutta approximation for realistic effects.</p>"),
		$("<div style='width: 640px; height: 360px; margin: 0 auto;'><iframe width='640' height='360' src='http://www.youtube.com/embed/CAG40Zupr9g' frameborder='0' allowfullscreen align='center'></iframe></div>"),
	]

	var modal1 = Modal("myModal1", "15-462: Computer Graphics", modal1Content);
	var hoverImage = CreateHoverImageForModal(image1Top, image1Bottom, modal1);
	var image1 = new CarouselItem(hoverImage,
								  "15-462: Computer Graphics",
								  "A comprehensive introduction to computer graphics. Topics include image processing, geometric transformations, shading, and ray tracing.");

	// Content for the 05-818 modal.
	var image2Top = $("<img src='assets/05_818.jpg' alt='Colored image of a drunk call scene.'>");
	var image2Bottom = $("<img src='assets/05_818_bw.jpg' alt='Black and white image of a drunk call scene.'>");

	var modal2Button = EMTButton();
	modal2Button.css("float", "right");
	modal2Button.css("margin-right", "20px");

	var modal2Content = [
		$("<p>In the first part of the class, we examined different educational games and research in both game design and learning. For example, we learned about the MDA (mechanics, dynamics, and aesthetics) framework used for decomposing and analyzing a game. We would also learn about and practice methods for conducting user research, such as think alouds and playtesting.</p>"),
		$("<p>During the second half, we created our own educational games. The first project was to create a paper or board game. I worked on a card game similar to Apples to Apples in order to help teach people about fallacies. This assignment helped us practice the skills necessary for experimentation and playtesting.</p>"),
		$("<p>For the final project, I worked in a team of three as the programmer for the \"EMT Game.\" This game was made to help emergency medical technicians deal with new and unexpected scenes. This was especially important for novice EMTs since they would have had very little experience dealing with an actual scene. More information about the game can be found under the \"Games\" tab, and can be downloaded above.</p>")
	]

	var modal2 = Modal("myModal2", "05-818: Design Educational Games", modal2Content, modal2Button);
	var hoverImage2 = CreateHoverImageForModal(image2Top, image2Bottom, modal2);
	var image2 = new CarouselItem(hoverImage2,
								  "05-818: Design Educational Games",
								  "Covers design for games and pedagogy. The course covers performing user research, analyzing other educational games, and ends with a project to create an educational game.");

	// TODO: Add 15-466: Game Programming!!!!!!!!!!!!

	slider_list1 = [slider1_1, slider1_2, slider1_3];
	carousel_list = [image1, image2];

	var carousel = Carousel(carousel_list);

	$("#mainContent").append(carousel);
	carousel.carousel();

	resizeAll(carousel_list);
	modal1.on('shown.bs.modal', function() {
		resizeSliders(slider_list1, modal1.find(".modal-body").width());
	});

	Transition();
});

$(window).resize(function() {
	resizeAll(carousel_list);
	resizeSliders(slider_list1, $("#myModal1").find(".modal-body").width());
});