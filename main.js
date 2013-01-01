
var game = {};
// Easy, medium, hard.
game.targetRadius = [100, 50, 30];
game.targetCircles = [4, 4, 4];
game.targetCircleWidth = [20, 10, 5];
game.targetDarkColor = ["#CC0000", "#00CC00", "#0000CC"];
game.targetBrightColor = ["#FFFFFF", "#FFFFFF", "#FFFFFF"];
game.targetPoints = [[1, 2, 3, 4], [2, 4, 6, 8], [4, 8, 12, 16]];
game.targetFrequency = [0.8, 1, 2];
game.targetX = 0;
game.targetY = 0;
game.difficulty = 0;
game.targetTime = 0;
game.score = 0;
game.scoreColor = "#FFFF00";
game.scoreFont = "Georgia";
game.scoreSize = 20;
game.scoreStyle = "bold";

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
	var points = -20;
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
	test_targetPoints();
	
	newTarget();
}

function update() {
	var difficulty = game.difficulty;
	var frequency = game.targetFrequency[difficulty] * 0.2;
	var w = app.graphics.getWidth();
	var t = app.timer.getTime() - game.targetTime;
	game.targetY = app.graphics.getHeight() / 2;
	game.targetX = Math.cos(t * frequency) * w + w/2;
}

function draw() {
	var x = app.mouse.getX();
	var y = app.mouse.getY();
	if (targetPoints(x, y, game.targetX, game.targetY, game.difficulty) > 0) {
		app.graphics.clear("#0000FF");
	} else {
		app.graphics.clear("#000000");
	}
	drawTarget(game.targetX, game.targetY, game.difficulty);
	
	app.graphics.setFont(game.scoreFont, game.scoreStyle, game.scoreSize);
	app.graphics.setColor(game.scoreColor);
	app.graphics.print("score: " + game.score, 20, 20);
}

function keypressed(keyCode) {
	
}

function keyreleased(keyCode) {
	
}

function mousemove(x, y) {
	
}

function mousepressed(button, x, y) {
	var targetX = game.targetX;
	var targetY = game.targetY;
	var difficulty = game.difficulty;
	game.score += targetPoints(x, y, targetX, targetY, difficulty);
	newTarget();
}

function mousereleased(button, x, y) {
	
}


