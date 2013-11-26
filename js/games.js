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

	var modal1Content = [
		$("<p>Under Construction</p>"),
	]

	var modal1 = Modal("myModal1", "Mortis", modal1Content);
	var hoverImage1 = CreateHoverImageForModal(image1Top, image1Bottom, modal1);
	var image1 = new CarouselItem(hoverImage1,
								  "Mortis",
								  "A puzzle platformer where the central game mechanic revolves around transfering life between objects in the scene. I worked as the project lead on this game.");

	// Content for the Outfit Swap modal.
	var image2Top = $("<img src='assets/outfit_swap.jpg' alt='Colored image of burger flipper in the oval office.'>");
	var image2Bottom = $("<img src='assets/outfit_swap_bw.jpg' alt='Black and white image of a burger flipper in the oval office.'>");

	var modal2Button = Button("https://www.andrew.cmu.edu/user/lwzhang/outfitter/index.html",
							  "Play Now", "Opening...");
	modal2Button.css("float", "right");
	modal2Button.css("margin-right", "20px");

	var image2_1 = $("<img src='assets/outfit_swap_screen.jpg' alt='Image of the player talking to Hobo Ozzie in a fast food restaurant.'>");

	var modal2Content = [
		$("<p>A link to the game is above. In the game, the player explores the world, talking to other characters to find out what they like or dislike. The dialogue gives the player hints as to what role the NPC really wants to fill. If the player is currently a role that can swap with the NPC, the player can swap and change roles. The ultimate goal for the player is to go from burger flipper to president, through one of multiple paths.</p>"),
		$("<p>The game was made with LimeJS for Javascript. One of the main goals for the game was to make it accessible for many devices, such as browser, tablet, and phone. This lead to many interesting challenges when designing simple controls using mainly clicks and taps, as well as creating a responsive layout that is usable on a variety of devices.</p>"),
		$("<p>My specific role included programming core funcationality in the game. For example, I was in charge of dialogue logic and boxes as well as the actual swapping of outfits. I also worked on character movement and swapping animations.</p>"),
		$("<p>Outfit Swap was awarded Game Creation Society Gold, given to games which represent the best project of the semester from Carnegie Mellon's Game Creation Society organization.</p>"),
		image2_1,
	]

	var modal2 = Modal("myModal2", "Outfit Swap", modal2Content, modal2Button);
	var hoverImage2 = CreateHoverImageForModal(image2Top, image2Bottom, modal2);
	var image2 = new CarouselItem(hoverImage2,
								  "Outfit Swap",
								  "A puzzle adventure game where the player swaps roles with other characters with the goal of becoming the president. I worked as a programmer on the project.");

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
	var hoverImage3 = CreateHoverImageForModal(image3Top, image3Bottom, modal3);
	var image3 = new CarouselItem(hoverImage3,
								  "EMT Game",
								  "A point-and-click adventure and visual novel game which simulates scenarios faced by real emergency medical technicians. I worked as the lead programmer on the project.");

	// TODO: Add I'm not Comfortable with This!!!!

	carousel_list = [image1, image2, image3];
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