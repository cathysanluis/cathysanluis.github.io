const KEY_W = 87;
const KEY_D = 68;
const KEY_S = 83;
const KEY_A = 65;

var mouseX;
var mouseY;

function setupInput(){
	canvas.addEventListener('mousemove',updateMousePos);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	greenWarrior.setupInput(KEY_W, KEY_D, KEY_S, KEY_A);
}
function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	//cheat to test warrior in any position
	/*warriorX  = mouseX;
	warriorY = mouseY;
	warriorSpeedX = 3;
	warriorSpeedY  = -3;*/

}

function keySet (keyEvent, whichWarrior, setTo) {
	if (keyEvent.keyCode == whichWarrior.controlKeyLeft){
		whichWarrior.keyHeld_WalkLeft = setTo;
	}

	if (keyEvent.keyCode == whichWarrior.controlKeyRight){
		whichWarrior.keyHeld_WalkRight = setTo;
	}
	
	if (keyEvent.keyCode == whichWarrior.controlKeyUp){
		whichWarrior.keyHeld_WalkUp = setTo;
	}
	
	if (keyEvent.keyCode == whichWarrior.controlKeyDown){
		whichWarrior.keyHeld_WalkDown = setTo;
	}

}

function keyPressed(evt){
	keySet (evt,greenWarrior, true);
	evt.preventDefault();
}

function keyReleased(evt){
	keySet (evt,greenWarrior, false);
}