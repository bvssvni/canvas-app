
function load_mouse(box) {
	if (box == null) throw "Missing argument \"box\"";
	
	var mouse = {};
	mouse.x = 0;
	mouse.y = 0;
	mouse.left = false;
	mouse.right = false;
	mouse.middle = false;
	
	mouse.getX = function() {
		return mouse.x;
	}
	
	mouse.getY = function() {
		return mouse.y;
	}
	
	mouse.isDown = function(button) {
		if (button == null) throw "Missing argument \"button\"";
		
		if (button == "l") return mouse.left;
		if (button == "m") return mouse.middle;
		if (button == "r") return mouse.right;
		
		return false;
	}
	
	box.onmousemove = function(event) {
		event = event || window.event;
		
		mouse.x = event.clientX;
		mouse.y = event.clientY;
		
		if (typeof(mousemove) == "function") mousemove();
	}
	
	box.onmousedown = function(event) {
		event = event || window.event;
		
		var button = null;
		switch (event.button) {
			case 0: mouse.left = true; button = "l"; break;
			case 1: mouse.middle = true; button = "m"; break;
			case 2: mouse.right = true; button = "r"; break;
		}
		
		if (typeof(mousepressed) == "function") mousepressed(button);
	}
	
	box.onmouseup = function(event) {
		event = event || window.event;
		
		var button = null;
		switch (event.button) {
			case 0: mouse.left = false; button = "l"; break;
			case 1: mouse.middle = false; button = "m"; break;
			case 2: mouse.right = false; button = "r"; break;
		}
		
		if (typeof(mousereleased) == "function") mousereleased(button);
	}
	
	return mouse;
}