
var x = 0;
var y = 0;
var lastPressed = 0;

function load() {
	document.title = "Example";
	
	app.graphics.setSize(600, 400);
	
	app.timer.setFPS(60);
	app.timer.setUPS(120);
}

function keypressed(keyCode) {
	var keyboard = app.keyboard;
	
	lastPressed = keyCode;
	if (keyboard.isUp(keyCode)) lastPressed += " up";
	if (keyboard.isRight(keyCode)) lastPressed += " right";
	if (keyboard.isDown(keyCode)) lastPressed += " down";
	if (keyboard.isLeft(keyCode)) lastPressed += " left";
	if (keyboard.isJump(keyCode)) lastPressed += " jump";
	if (keyboard.isCrouch(keyCode)) lastPressed += " crouch";
	if (keyboard.isAlt(keyCode)) lastPressed += " alt";
	if (keyboard.isCtrl(keyCode)) lastPressed += " ctrl";
	if (keyboard.isMeta(keyCode)) lastPressed += " meta";
}

function keyreleased(keyCode) {
	
}

function update() {
	var time = app.timer.getTime();
	x = Math.sin(time) * 100 + 100;
}

function draw() {
	var g = app.graphics;
	var timer = app.timer;
	
	g.clear("#000000");
	
	g.setColorRGBA(200, 10, 100, 255);
	g.ellipse("fill", x, 0, 100, 100);
	g.setColor("white");
	g.ellipse("fill", x+10, 10, 80, 80);
	
	g.setColorRGBA(255, 255, 255, 255);
	g.setFont("Arial", "normal", 50);
	g.print("FPS: " + timer.getFPS(), 50, 200);
	g.print("UPS: " + timer.getUPS(), 50, 250);
	g.print("Last pressed: " + lastPressed, 50, 300);
}

