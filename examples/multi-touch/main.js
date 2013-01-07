
function load_touchscreen(box) {
	var touchscreen = {};
	
	touchscreen.touches = [];
	
	touchscreen.numberOfFingers = function() {
		return touchscreen.touches.length;
	}
	
	touchscreen.getTouches = function() {
		return touchscreen.touches;
	}
	
	var updateTouches = function(event) {
		if (typeof(event.preventDefault) == "function") event.preventDefault();
		
		var targetTouches = event.targetTouches;
		if (targetTouches == null || targetTouches.length == 0) {
			if (touchscreen.touches.length != 0) touchscreen.touches = [];
			return;
		}
		
		touchscreen.touches = [];
		for (var i = 0; i < targetTouches.length; i++) {
			var x = targetTouches[i].clientX - box.offsetLeft;
			var y = targetTouches[i].clientY - box.offsetTop;
			touchscreen.touches[i] = {"x": x, "y": y};
		}
	}
	
	box.ontouchmove = function(event) {
		updateTouches(event);
		
		if (typeof(touchmove) == "function") touchmove();
	}
	
	box.ontouchstart = function(event) {
		updateTouches(event);
		
		if (typeof(touchpressed) == "function") touchpressed();
	}
	
	box.ontouchend = function(event) {
		updateTouches(event);
		
		if (typeof(touchreleased) == "function") touchreleased();
	}
	
	box.ontouchcancel = function(event) {
		updateTouches(event);
		
		if (typeof(touchcancel) == "function") touchcancel();
	}
	
	return touchscreen;
}

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
	
	var fingers = app.touchscreen.numberOfFingers();
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
	countFingers++;
}

function touchreleased() {
	countFingers--;
}

function touchcancel() {
	countFingers = 0;
}



