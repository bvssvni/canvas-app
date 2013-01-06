
function load_geometry() {
	var geometry = {};
	
	// Finds the closest point to a coordinate.
	geometry.closestPoint = function(points, x, y) {
		if (points == null) throw "Missing argument 'points'";
		if (x == null) throw "Missing argument 'x'";
		if (y == null) throw "Missing argument 'y'";
		
		var minIndex = -1;
		var minDist = 0;
		var n = points.length/2;
		for (var i = 0; i < n; i++) {
			var dx = points[2*i] - x;
			var dy = points[2*i+1] - y;
			var d = dx * dx + dy * dy;
			if (d < minDist || minIndex == -1) {
				minDist = d;
				minIndex = 2*i;
			}
		}
		return minIndex;
	}
	
	// Draws a list of lines.
	geometry.drawLines = function(points) {
		var n = points.length / 4;
		var g = app.graphics;
		for (var i = 0; i < n; i++) {
			g.line(points[4*i], points[4*i+1], points[4*i+2], points[4*i+3]);
		}
	}
	
	// Calculates the ABC format for each line.
	// A = y2 - y1
	// B = x1 - x2
	// C = A * x1 + B * y1
	geometry.linesToABCs = function(lines, res) {
		var n = lines.length/4;
		for (var i = 0; i < n; i++) {
			var x1 = lines[4*i];
			var y1 = lines[4*i+1];
			var x2 = lines[4*i+2];
			var y2 = lines[4*i+3];
			var a = y2 - y1;
			var b = x1 - x2;
			var c = a * x1 + b * y1;
			res[3*i] = a;
			res[3*i+1] = b;
			res[3*i+2] = c;
		}
	}
	
	// Finds the intersection coordinates between lines in ABC format.
	geometry.intersection = function(abcs, i, j) {
		var a1 = abcs[3*i];
		var b1 = abcs[3*i+1];
		var c1 = abcs[3*i+2];
		var a2 = abcs[3*j];
		var b2 = abcs[3*j+1];
		var c2 = abcs[3*j+2];
		var det = a1 * b2 - a2 * b1;
		if (det == 0) return null;
		
		return [(b2*c1 - b1*c2)/det, (a1*c2 - a2*c1)/det];
	}
	
	return geometry;
}
