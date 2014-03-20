var carousel_list;
var image_list2;
var image_list3;

$(window).load(function() {
//$(document).ready(function() {
	$("body").prepend(MenuBuffer());
	$("body").prepend(Menu());

	// Content for the Mortis modal.
	var image1Top = $("<img src='assets/mortis.jpg' alt='Colored image of Death next to a boy and his turtle.'>");
	var image1Bottom = $("<img src='assets/mortis_bw.jpg' alt='Black and white image of Death next to a boy and his turtle.'>");

	var modal1Button = MortisButton();
	modal1Button.css("float", "right");
	modal1Button.css("margin-right", "20px");

	var modal1Content = [
		$("<p>Mortis received Game Creation Society gold for the fall semester of 2013. In this game, the player takes on the role of Death, using Death's powers to take and give life from objects on the scene in order to get to the door. Unfortunately, Death cannot physically interact with the world, and so he must manipulate the environment in order to open the door and make his way to the end. He is also limited in that he can only interact with elements near him. The player uses WASD controls to move, and a mouse press to take/give life.</p>"),
		$("<p>For Mortis, I acted as the project lead. My responsibilities in this role revolved around directing the vision of the project and managing our group of roughly sixteen people. I had to make sure that we were keeping with our schedule, adjusting our goals when needed, and ensuring that people always had work to do that they enjoyed working on. I also had to ensure that the different components of design, art, and programming worked well and would fit together nicely as we consolidated work.</p>"),
		$("<p>While I had less of a programming role for this project than I typically do, I made higher level design decisions of the code base. For example, I made general decisions on how functions such as collision detection or level loading should work.</p>"),
		$("<p>My last role on this project was as a lead designer for the levels. I worked with another person to create the five levels currently present in the game. Since we were making this game from the ground up, we did not have the time to implement too many levels, giving me time to properly address all of the needs for the project.</p>"),
		$("<p>Currently, the last (fifth) level is not possible to beat, since we didn't have the time to completely implement the level. Also, the Mac download of this game does not have the shaders for our water effects properly implemented and requires the Mono Framerwork to run. The Windows version requires the <a href='http://www.microsoft.com/en-us/download/details.aspx?id=20914' target='_blank'>proper Windows frameworks</a> installed to run.</p>"),
	]

	var modal1 = Modal("myModal1", "Mortis", modal1Content, modal1Button);
	//var hoverImage1 = CreateHoverImageForModal(image1Top, image1Bottom, modal1);
	var image1 = new CarouselItem(image1Top,
								  image1Bottom,
								  modal1,
								  "Mortis",
								  "A puzzle platformer where the central game mechanic revolves around transfering life between objects in the scene. I worked as the project lead on this game. Click for more details...");

	// Content for Tommy Was Alone.
	var image4Top = $("<img src='assets/tommywasalone.jpg' alt='Colored image of a cube world.'>");
	var image4Bottom = $("<img src='assets/tommywasalone_bw.jpg' alt='Black and white image of a cube world.'>");

	var modal4Button = TommyWasAloneButton();
	modal4Button.css("float", "right");
	modal4Button.css("margin-right", "20px");

	var modal4Content = [
		$("<p>As a final project for my 15-466: Game Programming class, my two teammates and I decided to create \"Tommy Was Alone.\" The goal was to create an interesting, minimalist experience while still inducing the shock and stress of a survival game.</p>"),
		$("<p>The player must navigate a strange cube world where everything is made out of cubes. Unfortunately, touching an enemy will cause the player to lose. As the player progresses through the game, bits and pieces of the story are revealed to the player.</p>"),
		$("<p>My specific contributions to the project include enemy movement behavior and A.I. I also worked on properly implementing the world rotations when moving to and from different sides of the cube. On the more artistic side, I contributed to some of the enemy placement, the script, enemy designs, and sound mixing.</p>"),
		$("<p>Below is a playthrough of the entirety of our game.</p>"),
		$("<div style='width: 640px; height: 360px; margin: 0 auto;'><iframe width='640' height='360' src='http://www.youtube.com/embed/r1utyXJJYXo' frameborder='0' allowfullscreen align='center'></iframe></div>"),
	]

	var modal4 = Modal("myModal4", "Tommy Was Alone", modal4Content, modal4Button);
	//var hoverImage4 = CreateHoverImageForModal(image4Top, image4Bottom, modal4);
	var image4 = new CarouselItem(image4Top,
								  image4Bottom,
								  modal4,
								  "Tommy Was Alone",
								  "A first person stealth survival game. I worked as a programmer on the project. Click for more details...");



	// Content for the Outfit Swap modal.
	var image2Top = $("<img src='assets/outfit_swap.jpg' alt='Colored image of burger flipper in the oval office.'>");
	var image2Bottom = $("<img src='assets/outfit_swap_bw.jpg' alt='Black and white image of a burger flipper in the oval office.'>");

	var modal2Button = Button("https://www.andrew.cmu.edu/user/lwzhang/outfitter/index.html",
							  "Play Now", "Opening...");
	modal2Button.css("float", "right");
	modal2Button.css("margin-right", "20px");

	var image2_1 = $("<img src='assets/outfit_swap_screen.jpg' alt='Image of the player talking to Hobo Ozzie in a fast food restaurant.'>");

	var modal2Content = [
		$("<p>In the game, the player explores the world, talking to other characters to find out what they like or dislike. The dialogue gives the player hints as to what role the NPC really wants to fill. If the player is currently a role that can swap with the NPC, the player can swap and change roles. The ultimate goal for the player is to go from burger flipper to president, through one of multiple paths.</p>"),
		$("<p>The game was made with LimeJS for Javascript. One of the main goals for the game was to make it accessible for many devices, such as browser, tablet, and phone. This lead to many interesting challenges when designing simple controls using mainly clicks and taps, as well as creating a responsive layout that is usable on a variety of devices.</p>"),
		$("<p>My specific role included programming core funcationality in the game. For example, I was in charge of dialogue logic and boxes as well as the actual swapping of outfits. I also worked on character movement and swapping animations.</p>"),
		$("<p>Outfit Swap was awarded Game Creation Society Gold, given to games which represent the best project of the semester from Carnegie Mellon's Game Creation Society organization.</p>"),
		$("<p>A link to the game is above.</p>"),
		image2_1,
	]

	var modal2 = Modal("myModal2", "Outfit Swap", modal2Content, modal2Button);
	//var hoverImage2 = CreateHoverImageForModal(image2Top, image2Bottom, modal2);
	var image2 = new CarouselItem(image2Top,
								  image2Bottom,
								  modal2,
								  "Outfit Swap",
								  "A puzzle adventure game where the player swaps roles with other characters with the goal of becoming the president. I worked as a programmer on the project. Click for more details...");

	// Content for the EMT Game modal.
	var image3Top = $("<img src='assets/05_818.jpg' alt='Colored image of a drunk call scene.'>");
	var image3Bottom = $("<img src='assets/05_818_bw.jpg' alt='Black and white image of a drunk call scene.'>");

	var modal3Button = EMTButton();
	modal3Button.css("float", "right");
	modal3Button.css("margin-right", "20px");

	var image3_1 = $("<img src='assets/emt_game.jpg' alt='An EMT scene of an ankle injury.'>");
	var image3_2 = $("<img src='assets/emt_game_feedback.jpg' alt='A sample score scene at the end of the ankle call.'>");

	var modal3Content = [
		$("<p>One of the biggest problems facing EMTs is that the first few experiences on a scene can be extremely nerve-wracking. Also, facing a life-or-death situation can be scary for EMTs regardless of experience. Our simulation is meant to help give EMTs more experience and make it easier for them to deal with unexpected situations.</p>"),
		$("<p>We began designing the game by looking at the most common calls received by EMTs, which on Carnegie Mellon's campus happen to be ankle injuries and alcohol consumption. We also looked at high risk scenes such seizures or heart attacks due to how important it is to act properly in these scenarios. Afterwards, we performed think aloud tests of practice scenarios with real EMTs to identify problem areas that we should address in our game.</p>"),
		$("<p>Throughout the process of creating the game, we would make prototypes for user testing and think alouds for iterations. This helped us to significantly improve our user interface as well as rearrange information to best fit our users' mental model. Players can select options on the bottom of the screen as well as interact with objects in the scene, walking through different dialogue trees. After finishing up with the scene, the game will provide feedback on what the player did well, and what the player did wrong and give a final score out of five stars.</p>"),
		$("<p>Final user testing has shown improvements in the performance of EMTs in practice scenarios.</p>"),
		image3_1,
		image3_2,
	]

	var modal3 = Modal("myModal3", "EMT Game", modal3Content, modal3Button);
	//var hoverImage3 = CreateHoverImageForModal(image3Top, image3Bottom, modal3);
	var image3 = new CarouselItem(image3Top,
								  image3Bottom,
								  modal3,
								  "EMT Game",
								  "A point-and-click adventure and visual novel game which simulates scenarios faced by real emergency medical technicians. I worked as the lead programmer on the project. Click for more details...");

	// TODO: Add I'm not Comfortable with This!!!!

	carousel_list = [image1, image4, image2, image3];
	image_list2 = [image2_1];
	image_list3 = [image3_1, image3_2];

	var carousel = Carousel(carousel_list);

	$("#mainContent").append(carousel);
	carousel.carousel();

	//$("#carousel-example-generic").height(Math.min($(window).height() - 120, 551));
	resizeAll(carousel_list);
	modal2.on('shown.bs.modal', function() {
		for (var i = 0; i < image_list2.length; i++) {
			image_list2[i].width($("#myModal2").find(".modal-body").width());
		}
	});
	modal3.on('shown.bs.modal', function() {
		for (var i = 0; i < image_list3.length; i++) {
			image_list3[i].width($("#myModal3").find(".modal-body").width() / 2);
		}
	});

	Transition();
});

$(window).resize(function() {
	//$("#carousel-example-generic").height(Math.min($(window).height() - 120, 551));
	resizeAll(carousel_list);
	for (var i = 0; i < image_list2.length; i++) {
		image_list2[i].width($("#myModal2").find(".modal-body").width());
	}
	for (var i = 0; i < image_list3.length; i++) {
		image_list3[i].width($("#myModal3").find(".modal-body").width() / 2);
	}
});