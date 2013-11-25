var linkLocation;
var name = "Cory Chang";
var links = {
	Resume:"Resume.pdf",
	Courses:"courses.html",
	Games:"games.html"
};
var emtMac = "EMT-zip-files/EMT-1.0-mac.zip";
var emtWin = "EMT-zip-files/EMT-1.0-win.zip";
var emtLinux = "EMT-zip-files/EMT-1.0-linux.tar.bz2";

/*
 * Resize all of the images inside of the carousel.
 */
function resizeAll(list, w) {
	var width = $("#carousel-example-generic").width();
	if (w !== undefined)
		width = w;
	for (var i = 0; i < list.length; i++) {
		list[i].resize(width);
	}
}

/*
 * Resize all of the sliders in the modal.
 */
function resizeSliders(list, w) {
	var width = $(".modal-body").width();
	if (w !== undefined)
		width = w;
	for (var i = 0; i < list.length; i++) {
		list[i].resize(width);
	}
}

/*
 * Creates a button to the specified link.
 */
function Button(link, text, clickedText) {
	var button = $("<button type='button' data-loading-text='" + clickedText + "' class='btn btn-primary'>"
				   + text + "</button>");
	button.click(function() {
		window.open(link);
	});

	return button;
}

/*
 * Creates a download link for my EMT game.
 */
function EMTButton() {
	var os = DetectOS();
	var link;
	var text;
	if (os === "MAC") {
		link = emtMac;
		text = "Download for Mac";
	}
	if (os === "WIN") {
		link = emtWin;
		text = "Download for Windows";
	}
	if (os === "LINUX") {
		link = emtLinux;
		text = "Download for Linux";
	}
	return Button(link, text, "Downloading...");
}

/*
 * Create the div for the menu. There are optional parameters for
 * the creator's name and a list of links to place in the nav bar.
 */
 function Menu(n, l) {
 	if (n !== undefined && typeof n === "string")
 		name = n;
 	if (l !== undefined)
 		links = l;

 	// Create the navigation bar.
 	var menu = $("<div></div>");
 	menu.attr('id', 'custNav');
 	var unorderedList = $("<ul></ul>");
 	var list1 = $("<li></li>");

 	// Add link back to home page.
 	var link1 = $("<a class='brand' href='index.html'>" + name + "</a>");
 	list1.append(link1);
 	unorderedList.append(list1);

 	// Loop through and attach links for navigation.
	var first = true;
	for (link in links) {
		var listHTML = $("<li></li>");
		var type = first ? "linksLast" : "links";
		if (type === "links") {
			var linkHTML = $("<a class='" + type + "' href='" + links[link] + "'>" + link + "</a>");
			listHTML.append(linkHTML);
		} else {
			var linkHTML = $("<a class='" + type + "' href='#'>" + link + "</a>");
			(function (theLink) {
				linkHTML.click(function() {
					window.open(theLink);
				});
			})(links[link]);
			listHTML.append(linkHTML);
		}
		unorderedList.append(listHTML);
		first = false;
	}

 	menu.append(unorderedList);

 	return menu;
 }

 /*
  * Create a buffer div after the menu.
  */
 function MenuBuffer() {
 	var buff = $("<div></div>");
 	buff.height(100);
 	return buff;
 }

/*
 * Object providing information for carousel.
 */
 function CarouselItem(image, title, caption) {
 	this.image = image;
 	this.title = title;
 	this.caption = caption;

 	this.resize = function(width) {
 		this.image.resize(width);
 	}
 }

 /*
  * Create a carousel given a list of CarouselItem's.
  */
function Carousel(itemList) {
	var carousel = $("<div id='carousel-example-generic' class='carousel slide' data-ride='carousel'></div>");

	// Indicators.
	var indicators = $("<ol class='carousel-indicators'></ol>");
	for (var i = 0; i < itemList.length; i++) {
		var active = i === 0 ? " class='active'" : "";
		var indicatorElement = $("<li data-target='#carousel-example-generic' data-slide-to='" + i + "'" + active + "></li>");
		indicatorElement.css("margin-right", "5px");
		indicators.append(indicatorElement);
	}
	carousel.append(indicators);

	// Wrapper for slides.
	var carouselInner = $("<div class='carousel-inner'></div>");
	for (var i = 0; i < itemList.length; i++) {
		var classType = i === 0 ? "'item active'" : "'item'";
		var itemDiv = $("<div class=" + classType + " align='center'></div>");
		itemDiv.append(itemList[i].image);
		var caption = $("<div class='carousel-caption'></div>");
		caption.append($("<h3>" + itemList[i].title + "</h3>"));
		var captionText = $("<p>" + itemList[i].caption + "</p>");
		captionText.addClass("carousel-caption-text");
		caption.append(captionText);
		captionText.css("opacity", "0");
		itemDiv.append(caption);
		carouselInner.append(itemDiv);
	}
	carousel.append(carouselInner);

	// Controls.
	var left = $("<a class='left carousel-control' href='#carousel-example-generic' data-slide='prev'></a>");
	left.append($("<span class='glyphicon glyphicon-chevron-left'></span>"));
	var right = $("<a class='right carousel-control' href='#carousel-example-generic' data-slide='next'></a>");
	right.append($("<span class='glyphicon glyphicon-chevron-right'></span>"));
	carousel.append(left);
	carousel.append(right);

	return carousel;
}

/*
 * Create an image with hover transitions used with modals.
 */
function CreateHoverImageForModal(imageTop, imageBottom, modal) {
	var ans = $("<div></div>");
	imageTop.css("position", "relative");
	imageBottom.css("position", "absolute");
	ans.append(imageBottom);
	ans.append(imageTop);

	ans.click(function() {
		$("#carousel-example-generic").carousel('pause');
		modal.modal('show');
	});

	ans.hover(
		function() {
			imageTop.stop().animate({"opacity": "0"}, "medium");
			$(".carousel-caption-text").stop().animate({"opacity": "1"}, "medium");
		},
		function() {
			imageTop.stop().animate({"opacity": "1"}, "medium");
			$(".carousel-caption-text").stop().animate({"opacity": "0"}, "medium");
		}
	);

	ans.resize = function(width) {
		imageTop.width(width);
		imageBottom.width(width);
	}

	ans.css("cursor", "pointer");

	return ans;
}

/*
 * Create a modal with a given id, title, and content.
 */
 // TODO: change content sizes on resize.
 function Modal(id, title, content, button) {
 	// Default divs for the modal.
 	var modal = $("<div class='modal fade' id='" + id +
				  "' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'></div>");
 	var modalDialog = $("<div class='modal-dialog'></div>");
 	modal.append(modalDialog);
 	var modalContent = $("<div class='modal-content'></div>");
 	modalDialog.append(modalContent);

 	// Header divs.
 	var modalHeader = $("<div class='modal-header'></div>");
 	modalContent.append(modalHeader);
 	var closeButton = $("<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>");
 	var modalTitle = $("<h4 class='modal-title' id='myModalLabel'>" + title + "</h4>");
 	modalHeader.append(closeButton);
 	if (button !== undefined) {
 		modalHeader.append(button);
 	}
 	modalHeader.append(modalTitle);

 	// Body divs.
 	var modalBody = $("<div class='modal-body'></div>");
 	modalContent.append(modalBody);
 	for (var i = 0; i < content.length; i++) {
 		modalBody.append(content[i]);
 	}

 	// Footer divs.
 	var modalFooter = $("<div class='modal-footer'></div>");
 	modalContent.append(modalFooter);
 	var footerClose = $("<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>");
 	modalFooter.append(footerClose);

 	modal.on('hide.bs.modal', function() {
 		$("#carousel-example-generic").carousel('cycle');
 	});

 	return modal;
 }

/*
 * Return a div containing the given image with the given class name.
 */
function CreateImageDiv(image, className) {
	var myDiv = $("<div></div>");
	myDiv.addClass(className);
	myDiv.append(image);
	myDiv.css("position", "absolute");
	// The left image of the slider should overlap. 
	if (className !== undefined && className === "left")
		myDiv.css("overflow", "hidden");
	return myDiv;
}

/*
 * Return a div containing a slider of the two given images.
 */
function ImageSlider (imageLeft, imageRight) {
	// Get widths needed to produce the slider.
	var imageWidth = imageLeft.width;
	var defaultSplit = Math.round(imageWidth / 2);

	var slider = $("<div></div>");
	slider.addClass("slider");
	slider.css("position", "relative");
	slider.width(imageLeft.width());
	slider.height(imageLeft.height());
	// Create divs for the two images and attach them to the slider.
	var right = CreateImageDiv(imageRight, "right");
	var left = CreateImageDiv(imageLeft, "left");
	slider.append(right);
	slider.append(left);

	// Set the left image to cover half of the div.
	left.width(defaultSplit);

	// Set event handlers for the sliding effect.
	slider.mousemove(function(e) {
		var newWidth = (e.offsetX || e.clientX - left.offset().left);
		left.width(newWidth);
	});

	slider.mouseleave(function(e) {
		left.stop().animate({
			width: defaultSplit
		}, 200)
	});

	// TODO: make sure this actually works
	slider.resize = function(width) {
		defaultSplit = Math.round(width / 2);
		imageLeft.width(width);
		imageRight.width(width);
		slider.width(imageLeft.width());
		slider.height(imageLeft.height());
		left.width(defaultSplit);
	};

	return slider;
}

/*
 * Return "MAC", "WIN", or "LINUX" based on the OS.
 */
 function DetectOS() {
 	var os = navigator.platform.toUpperCase();
 	if (os.indexOf("MAC") !== -1)
 		return "MAC";
 	if (os.indexOf("WIN") !== -1)
 		return "WIN";
 	if (os.indexOf("LINUX") !== -1)
 		return "LINUX";
 	return "UNKNOWN";
 }

/*
 * Transition function to be attached to the document's ready event.
 */
function Transition () {
 	$("#mainContent").css("display", "none");

	$("#mainContent").fadeIn(400);

	$("#custNav a").each(function(index, cur) {
		if (cur.className !== "linksLast") {
			$(cur).click(function(event) {
				event.preventDefault();
				linkLocation = this.href;
				$("#mainContent").fadeOut(250, redirectPage);
			});
		}
	});
}

/*
 * Function which switches windows.
 */
function redirectPage() {
	window.location = linkLocation;
}