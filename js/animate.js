function nextFrame() {
	if (loop > 10) {
		clear();
		draw();
		loop=0;
	}
	else {
		loop+=1;
	}
	reqID = requestAnimationFrame(nextFrame);
}

function draw() {
	drawBackground();
	calculateValues();
	context.beginPath();
		context.moveTo(xStart, yStart);
		context.lineTo(x1, y1);
		context.moveTo(x1+10, y1+10);
		context.arc(x1, y1+10, 10, 0, Math.PI*2, true);
		context.moveTo(x1, y1+20);
		context.lineTo(x2, y2);
		context.moveTo(x2+10, y2+10);
		context.arc(x2, y2+10, 10, 0, Math.PI*2, true);
	context.stroke();
}

function calculateValues() {

	//Calculations for angle 1 acceleration
	n1 = -g * (2 * m1 + m2) * Math.sin(a1);
	n2 = -m2 * g * Math.sin(a1-2*a2);
	n3 = -2 * Math.sin(a1-a2) * m2;
	n4 = a2_v*a2_v*r2+a1_v*a1_v*r1*Math.cos(a1-a2);
	den = r1 * (2*m1+m2-m2*Math.cos(2*a1-2*a2));
	a1_a = (n1+n2+n3*n4)/den;

	//Calculations for angle 2 acceleration
	n1 = 2 * Math.sin(a1-a2);
	n2 = (a1_v*a1_v*r1*(m1+m2));
	n3 = g * (m1 + m2) * Math.cos(a1);
	n4 = a2_v*a2_v*r2*m2*Math.cos(a1-a2);
	den = r2 * (2*m1+m2-m2*Math.cos(2*a1-2*a2));
	a2_a = (n1*(n2+n3+n4))/den;	

	a1_v += a1_a;
	a2_v += a2_a;
	a1 += a1_v;
	a2 += a2_v;

	x1 = xStart + r1 * Math.sin(a1);
	y1 = yStart + r1 * Math.cos(a1);
	x2 = x1 + r2 * Math.sin(a2);
	y2 = y1 + r2 * Math.cos(a2);
}

function drawBackground() {
	context.beginPath();
		context.rect(0,0,1000,600);
	context.stroke();
}

function clear() {
	context.clearRect(0,0,1000,600);
}

var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var xStart = 500;
var yStart = 200;
var x1, y1, x2, y2, a1, a2;
var a1_a, a2_a, a1_v, a2_v;

var n1, n2, n3, n4, den;

var loop = 0;

x1 = 100;
y1 = 100;

var a1 = Math.PI/2;
var a2 = Math.PI/8;

var a1_v = 0.1;
var a2_v = 0.1;

var g = 9.81;

//inilisation of rods
var r1 = 100;
var r2 = 100;

//inilisation of balls
var m1 = 20;
var m2 = 20;

context.strokeStyle = "rgb(100,100,100)";
var reqID = requestAnimationFrame(nextFrame);
var timing;

