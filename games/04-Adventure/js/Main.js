var canvas, canvasContext;

var greenWarrior = new warriorClass();

window.onload = function(){
	canvas = document.getElementById('adventureGameCanvas');
	canvasContext = canvas.getContext('2d');
	
	colorRect(0,0,canvas.width, canvas.height, 'white');
	
	colorText("Loading...", canvas.width/2, canvas.height/2, 'black');

	loadImages();
}

function imageLoadingDoneSoStartGame(){
	var framesPerSecond = 30;
	setInterval(updateAll,1000/framesPerSecond);

	setupInput();

	loadLevel(levelOne);
}

function loadLevel (whichLevel){
	worldGrid = whichLevel.slice();
	greenWarrior.reset(otherWarriorPic,"Green Machine");
}

function updateAll(){
	moveAll();
	drawAll();
}

function moveAll(){
	greenWarrior.move();
}

function clearScreen() {
	colorRect(0,0, canvas.width,canvas.height, 'black'); //clear screen
}

function drawAll(){
	drawWorlds();
	greenWarrior.draw();
}


