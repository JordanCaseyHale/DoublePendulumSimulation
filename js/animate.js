
function setUp() {

}

function draw() {
	context.beginPath();
		context.moveTo(xStart, yStart);
		context.lineTo(xStart, yStart+100);
		context.moveTo(xStart+10, yStart+110)
		context.arc(xStart, yStart+110, 10, 0, Math.PI*2, true);
		context.moveTo(xStart, yStart+120);
		context.lineTo(xStart, yStart+220);
		context.moveTo(xStart+10, yStart+230);
		context.arc(xStart, yStart+230, 10, 0, Math.PI*2, true);
	context.stroke();
}

var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
const Width = canvas.width;
const Height = canvas.height;

var xStart = Width/2;
var yStart = 100;

//inilisation of rods
var r1 = 100;
var r2 = 100;

//inilisation of balls
var m1 = 10;
var m2 = 10;

draw();

