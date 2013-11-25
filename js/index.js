$(window).load(function() {
//$(document).ready(function() {
	$("body").prepend(MenuBuffer());
	$("body").prepend(Menu());

	var welcome = $("<div></div>");
	welcome.width(180);
	welcome.css("margin-left", "30px");
	welcome.css("float", "left");
	welcome.append("<img src='assets/coco.png' alt='Image of Coco Pineapple from the game \"I'm not Comfortable with This.\">");
	$("#mainContent").append(welcome);

	var content = $("<div></div>");
	content.append($("<p>Hi, I'm Cory, a Computer Science and Human Computer Interaction double major at Carnegie Mellon University. I have a passion for solving problems and working on awesome projects.</p>"));
	content.append($("<p>In my free time, I enjoy working on game projects. A sampling of my work can be found under the \"Games\" tab. A selection of interesting courses that I've taken can also be found under \"Courses.\"</p>"));
	content.append($("<p>I also really enjoy film. Currently, my favorite movie is <i>The Shawshank Redemption</i>, and my favorite TV series is <i>The Wire</i>.</p>"));
	content.append($("<p>Contact: <a href='mailto:changcory@gmail.com'>changcory@gmail.com</a></p>"));
	//content.width(580);
	content.css("max-width", "600px");
	content.css("width", "60%");
	content.css("margin-left", "30px");
	content.css("float", "left");
	$("#mainContent").append(content);

	Transition();
});