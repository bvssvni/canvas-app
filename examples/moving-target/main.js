
var game = {};
// Easy, medium, hard.
game.targetRadius = [100, 50, 30];
game.targetCircles = [4, 4, 4];
game.targetCircleWidth = [20, 10, 5];
game.targetDarkColor = ["#CC0000", "#00CC00", "#0000CC"];
game.targetBrightColor = ["#FFFFFF", "#FFFFFF", "#FFFFFF"];
game.targetPoints = [[1, 2, 3, 4], [2, 4, 8, 16], [4, 16, 64, 256]];
game.targetFrequency = [0.8, 1, 1.2];
game.targetX = 0;
game.targetY = 0;
game.difficulty = 0;
game.targetTime = 0;
game.score = 0;
game.scoreColor = "#FFFF00";
game.scoreFont = "Georgia";
game.scoreSize = 20;
game.scoreStyle = "bold";
game.missTargetPoints = -20;

// Draws the target.
function drawTarget(x, y, difficulty) {
	var g = app.graphics;
	var rad = game.targetRadius[difficulty];
	var circles = game.targetCircles[difficulty];
	var darkColor = game.targetDarkColor[difficulty];
	var brightColor = game.targetBrightColor[difficulty];
	var width = game.targetCircleWidth[difficulty];
	for (var i = 0; i < circles; i++) {
		if ((i % 2) == 0) g.setColor(darkColor);
		else g.setColor(brightColor);
		
		g.ellipse("fill", x - rad, y - rad, 2 * rad, 2 * rad);
		rad -= width;
	}
}

function targetPoints(x, y, targetX, targetY, difficulty) {
	var rad = game.targetRadius[difficulty];
	var circles = game.targetCircles[difficulty];
	var darkColor = game.targetDarkColor[difficulty];
	var brightColor = game.targetBrightColor[difficulty];
	var width = game.targetCircleWidth[difficulty];
	var targetPoints = game.targetPoints[difficulty];
	var dx = targetX - x;
	var dy = targetY - y;
	var dist = Math.sqrt(dx * dx + dy * dy);
	var points = game.missTargetPoints;
	for (var i = 0; i < circles; i++) {
		if (dist >= rad) break;
		
		points = targetPoints[i];
		rad -= width;
	}
	return points;
}

function test_targetPoints() {
	if (targetPoints(0, 0, 0, 0, 0) <= 0) throw "What?";
}

function newTarget() {
	game.targetTime = app.timer.getTime();
	game.difficulty = Math.floor(Math.random() * 3);
}

function load() {
	app.timer.setFPS(120);
	app.timer.setUPS(120);
	app.graphics.setSize(750, 450);
	
	test_targetPoints();
	
	newTarget();
}

function update() {
	var difficulty = game.difficulty;
	var frequency = game.targetFrequency[difficulty];
	var w = app.graphics.getWidth();
	var t = app.timer.getTime() - game.targetTime;
	game.targetY = app.graphics.getHeight() / 2;
	game.targetX = Math.cos(t * frequency) * w + w/2;
}

function draw() {
	var w = app.graphics.getWidth();
	var h = app.graphics.getHeight();
	var cx = w/2;
	var cy = h/2;
	
	if (targetPoints(cx, cy, game.targetX, game.targetY, game.difficulty) > 0) {
		app.graphics.clear(game.targetDarkColor[game.difficulty]);
	} else {
		app.graphics.clear("#000000");
	}
	drawTarget(game.targetX, game.targetY, game.difficulty);
	
	app.graphics.setFont(game.scoreFont, game.scoreStyle, game.scoreSize);
	app.graphics.setColor(game.scoreColor);
	app.graphics.print("score: " + game.score, 20, 20);
	
	app.graphics.setColor("#C0C0C0");
	app.graphics.line(cx - 10, cy, cx - 2, cy);
	app.graphics.line(cx + 10, cy , cx + 2, cy);
	app.graphics.line(cx, cy - 10, cx, cy - 2);
	app.graphics.line(cx, cy + 10, cx, cy + 2);
}

function shoot() {
	var w = app.graphics.getWidth();
	var h = app.graphics.getHeight();
	var cx = w/2;
	var cy = h/2;
	var targetX = game.targetX;
	var targetY = game.targetY;
	var difficulty = game.difficulty;
	game.score += targetPoints(cx, cy, targetX, targetY, difficulty);
	newTarget();
}

function keypressed(keyCode) {
	if (app.keyboard.isSpace(keyCode)) {
		shoot();
	}
}

function keyreleased(keyCode) {
	
}

function mousemove(x, y) {
}

function mousepressed(button, x, y) {
	shoot();
}

function mousereleased(button, x, y) {
	
}


