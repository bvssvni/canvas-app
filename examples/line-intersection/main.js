/*
 
 This example converts line segments into normal form (ABC).
 
 http://community.topcoder.com/tc?module=Static&d1=tutorials&d2=geometry2
 
 */


// First, set up the lines.
var lines = [200, 200, 400, 400,
			400, 200, 200, 400];

// This array contains the lines in normal form.
var normals = [];

// Tells which point we want to move.
var dragIndex = -1;

// Contains the x and y coordinate of intersecting point.
var intersection = null;

var ext = {};

function load() {
	ext.geometry = load_geometry();
}

function update() {
	var geometry = ext.geometry;
	geometry.linesToABCs(lines, normals);
	intersection = geometry.intersection(normals, 0, 1);
}

function draw() {
	var geometry = ext.geometry;
	var g = app.graphics;
	g.clear("#000000");
	
	g.setColor("#FFFFFF");
	g.setFont("Georgia", "normal", 20);
	g.print("FPS: " + app.timer.getFPS(), 20, 20);
	g.print("Drag line end points with mouse cursor", 20, 40);
	
	geometry.drawLines(lines);
	
	if (intersection != null) {
		g.ellipse("fill", intersection[0]-4, intersection[1]-4, 8, 8);
	}
}

function keypressed(keyCode) {
	
}

function keyreleased(keyCode) {
	
}

function dragLine() {
	// Don't do anything if there is no selected point.
	if (dragIndex == -1) return;
	
	var i = dragIndex;
	lines[i] = app.mouse.getX();
	lines[i+1] = app.mouse.getY();
}

function mousemove(x, y) {
	dragLine();
}

function mousepressed(button, x, y) {
	dragIndex = ext.geometry.closestPoint(lines, x, y);
}

function mousereleased(button, x, y) {
	dragIndex = -1;
}


