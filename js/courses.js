var carousel_list;
var slider_list1;

$(window).load(function() {
//$(document).ready(function() {
	$("body").prepend(MenuBuffer());
	$("body").prepend(Menu());

	// Content for 15-466.
	var image3Top = $("<img src='assets/15_466.jpg' alt='Colored image of chess board.'>");
	var image3Bottom = $("<img src='assets/15_466_bw.jpg' alt='Black and white image of chess board.'>");
	var modal3Button = TommyWasAloneButton();
	modal3Button.css("float", "right");
	modal3Button.css("margin-right", "20px");

	var modal3Content = [
		$("<p>This course covers fundamental topics in game programming through the Unity engine. Beyong the labs, we also go over algorithms to solve game programming challenges such as sound simulation and learning behaviors.</p>"),
		$("<p>In the first lab, we implemented steering behaviors to model movement for seeking, wandering, and flocking. In order to implement seeking, we gradually turn towards a target velocity to get to a goal. To model wandering, we imagine an invisible circle in front of each character and choose a random point on this circle. The characters then seek towards that point, updating the random point every frame. Finally, flocking is simulated by designating one character as the leader which wanders, while the others perform separation and cohesion, seeking the leader to move as a group. Obstacle avoidance is factored in to help create a more realistic effect so that characters don't hit things in the world.</p>"),
		$("<p>Our second lab involved having ten characters which path find to a player. I split the world into an 8-connected, 200x200 grid and ran a weighted A* algorithm to compute all of the paths. These paths are recalculated every frame to account for the player moving, or for dynamic obstacles obstructing the paths.</p>"),
		$("<p>My third lab is a checkers game with an A.I. The computer runs alpha-beta pruning to choose which move to make next. There is also networking to provide in-game chat. At the moment, the computer is the only one that talks to the player, but the server can handle multiple players chatting simultaneously.</p>"),
		$("<p>Below is a video demonstrating the first three labs.</p>"),
		$("<div style='width: 640px; height: 360px; margin: 0 auto;'><iframe width='640' height='360' src='http://www.youtube.com/embed/Rus5xqzbVpw' frameborder='0' allowfullscreen align='center'></iframe></div>"),
		$("<br/>"),
		$("<p>More information for my final project, \"Tommy Was Alone\" can be found on the \"Games\" tab. There is also a download link at the top.</p>"),
	]

	var modal3 = Modal("myModal3", "15-466: Game Programming", modal3Content, modal3Button);
	var hoverImage3 = CreateHoverImageForModal(image3Top, image3Bottom, modal3);
	var image3 = new CarouselItem(hoverImage3,
								  "15-466: Game Programming",
								  "This course covers many topics relevant to computer games, such as A.I., collision detection, networking, path finding, and much more. The class has a strong programming focus and is taught using the Unity engine.");






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
		$("<p>Our second lab goes over loop subdivision. My implementation uses a winged edge data structure which contains some information about vertices, edges, and faces, while calculating the others. Below is a comparison of a stegosaurus model without subdivision, and one with six subdivisions which runs in under four seconds.</p>"),
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
	carousel_list = [image3, image1, image2];

	var carousel = Carousel(carousel_list);

	$("#mainContent").append(carousel);
	carousel.carousel();

	//$("#carousel-example-generic").height(Math.min($(window).height() - 120, 551));
	resizeAll(carousel_list);
	modal1.on('shown.bs.modal', function() {
		resizeSliders(slider_list1, modal1.find(".modal-body").width());
	});

	Transition();
});

$(window).resize(function() {
	//$("#carousel-example-generic").height(Math.min($(window).height() - 120, 551));
	resizeAll(carousel_list);
	resizeSliders(slider_list1, $("#myModal1").find(".modal-body").width());
});