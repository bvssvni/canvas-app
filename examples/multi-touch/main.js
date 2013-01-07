
function load_touchscreen(box) {
	var touchscreen = {};
	
	box.ontouchmove = function(event) {
		if (typeof(event.preventDefault) == "function") event.preventDefault();
		if (typeof(touchmove) == "function") touchmove();
	}
	
	box.ontouchstart = function(event) {
		if (typeof(event.preventDefault) == "function") event.preventDefault();
		if (typeof(touchpressed) == "function") touchpressed();
	}
	
	box.ontouchend = function(event) {
		if (typeof(event.preventDefault) == "function") event.preventDefault();
		if (typeof(touchreleased) == "function") touchreleased();
	}
	
	return touchscreen;
}

var countFingers = 0;

function load() {
	
}

function update() {
	
}

function draw() {
	var g = app.graphics;
	g.clear("#000000");
	g.setColor("#FFFFFF");
	g.setFont("georgia", "normal", 20);
	g.print("Counting fingers: " + countFingers, 0, 20);
}

function keypressed(keyCode) {
	
}

function keyreleased(keyCode) {
	
}

function mousemove(x, y) {
	
}

function mousepressed(button, x, y) {
	
}

function mousereleased(button, x, y) {
	
}

function touchmove() {
	
}

function touchpressed() {
	countFingers++;
}

function touchreleased() {
	countFingers--;
}



