
function load() {
	
}

function update() {
	
}

function drawTouches() {
	var g = app.graphics;
	var touches = app.touchscreen.getTouches();
	if (touches.length == 0) {
		g.print("No touching", 0, 40);
		return;
	}
	
	var y = 40;
	for (var i = 0; i < touches.length; i++) {
		g.print("" + touches[i].x + ", " + touches[i].y, 0, y);
		y += 20;
	}
}

function draw() {
	var g = app.graphics;
	g.clear("#000000");
	g.setColor("#FFFFFF");
	g.setFont("georgia", "normal", 20);
	
	var fingers = app.touchscreen.getTouches().length;
	g.print("Number of fingers: " + fingers, 0, 20);
	
	drawTouches();
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
}

function touchreleased() {
}

function touchcancel() {
}



