
function load_touchscreen(box) {
	var touchscreen = {};
	
	touchscreen.touches = null;
	touchscreen.targetTouches = null;
	touchscreen.changedTouches = null;
	
	touchscreen.getTouches = function() {
		return touchscreen.touches;
	}
	
	touchscreen.getTargetTouches = function() {
		return touchscreen.targetTouches;
	}
	
	touchscreen.getChangedTouches = function() {
		return touchscreen.changedTouches;
	}
	
	box.ontouchmove = function(event) {
		if (typeof(event.preventDefault) == "function") event.preventDefault();
		
		touchscreen.touches = event.touches;
		touchscreen.targetTouches = event.targetTouches;
		touchscreen.changedTouches = event.changedTouches;
		
		if (typeof(touchmove) == "function") touchmove();
	}
	
	box.ontouchstart = function(event) {
		if (typeof(event.preventDefault) == "function") event.preventDefault();
		
		touchscreen.touches = event.touches;
		touchscreen.targetTouches = event.targetTouches;
		touchscreen.changedTouches = event.changedTouches;
		
		if (typeof(touchpressed) == "function") touchpressed();
	}
	
	box.ontouchend = function(event) {
		if (typeof(event.preventDefault) == "function") event.preventDefault();
		
		touchscreen.touches = event.touches;
		touchscreen.targetTouches = event.targetTouches;
		touchscreen.changedTouches = event.changedTouches;
		
		if (typeof(touchreleased) == "function") touchreleased();
	}
	
	box.ontouchcancel = function(event) {
		if (typeof(event.preventDefault) == "function") event.preventDefault();
		
		touchscreen.touches = event.touches;
		touchscreen.targetTouches = event.targetTouches;
		touchscreen.changedTouches = event.changedTouches;
		
		if (typeof(touchcancel) == "function") touchcancel();
	}
	
	return touchscreen;
}

var countFingers = 0;

function load() {
	
}

function update() {
	
}

function drawTouches() {
	if (touches == null) return;
	
	var y = 40;
	var touches = app.touchscreen.getTouches();
	for (var i = 0; i < touches.length; i++) {
		g.print("" + touches[i].pageX + ", " + touches[i].pageY, 0, y);
		y += 20;
	}
}

function draw() {
	var g = app.graphics;
	g.clear("#000000");
	g.setColor("#FFFFFF");
	g.setFont("georgia", "normal", 20);
	g.print("Counting fingers: " + countFingers, 0, 20);
	
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



