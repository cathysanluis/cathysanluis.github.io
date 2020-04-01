//const GROUNDSPEED_DECAY_MULT = 0.94;
//const DRIVE_POWER = 0.5;
//const REVERSE_POWER = 0.2;
//const TURN_RATE = 0.06;
//const MIN_SPEED_TO_TURN = 0.5;

const WARRIOR_WALK_SPEED = 5;


function warriorClass(){

	this.x = 75;
	this.y = 75;
	this.ang = 0;
	this.myWarriorPic; //which picture to use
	this.name = "Untitled Warrior";

	this.keyCount = 0;
	this.worldIndexUnderWarrior;

	this.keyHeld_Gas = false;
	this.keyHeld_Reverse = false;
	this.keyHeld_TurnLeft = false;
	this.keyHeld_TurnRight = false;

	this.controlKeyUp;
	this.controlKeyRight;
	this.controlKeyDown;
	this.controlKeyLeft;

	this.setupInput = function (upKey, rightKey, downKey, leftKey){
		this.controlKeyUp = upKey;
		this.controlKeyRight = rightKey;
		this.controlKeyDown = downKey;
		this.controlKeyLeft = leftKey;
	}

	this.reset  = function (whichImage, warriorName){
		this.name = warriorName;
		this.myWarriorPic = whichImage;
		this.speed = 0;

		for (var eachRow=0; eachRow < WORLD_ROWS; eachRow++) {
			for (var eachCol=0; eachCol<WORLD_COLS; eachCol++){
				var arrayIndex = rowColToArrayIndex (eachCol, eachRow);
				if(worldGrid[arrayIndex] == WORLD_PLAYERSTART){
					worldGrid[arrayIndex] = WORLD_ROAD;
				//	this.ang = -Math.PI/2;
					this.x = eachCol * WORLD_W + WORLD_W/2;
					this.y = eachRow * WORLD_H + WORLD_H/2;
					return;
				} //end of player start if
			} //end of col for
		}	// end of row for
	} //end of warriorReset func

	this.move = function (){
//		this.speed *= GROUNDSPEED_DECAY_MULT;
		var nextX = this.x;
		var nextY = this.y;

		if (this.keyHeld_WalkUp){
			nextY -= WARRIOR_WALK_SPEED;
		}
		if (this.keyHeld_WalkDown){
			nextY += WARRIOR_WALK_SPEED;
		}
		if (this.keyHeld_WalkRight){
			nextX += WARRIOR_WALK_SPEED;
		}
		if (this.keyHeld_WalkLeft){
			nextX -= WARRIOR_WALK_SPEED;
		}


//STUDY THIS :(
		var tileIndexUnder = warriorWorldHandling(nextX, nextY);
		var tileTypeUnder = WORLD_WALL;

		if (tileIndexUnder != undefined){
			tileTypeUnder = worldGrid[tileIndexUnder];
		}

		switch (tileTypeUnder) {
			case WORLD_ROAD:
				this.x = nextX;
				this.y = nextY;
				break;
			case WORLD_DOOR:
				if (this.keyCount > 0) {
					worldGrid[tileIndexUnder] = WORLD_ROAD;
					this.keyCount--;
				}
				break;
			case WORLD_KEY:	
				worldGrid[tileIndexUnder] = WORLD_ROAD;
				this.keyCount++;
				console.log("Keys: "+this.keyCount);	
				break;
			case WORLD_GOAL:
				console.log("won");
				loadLevel(levelOne);
				break;
			case WORLD_WALL:
				break;
			}	
		}			


/*		if (Math.abs(this.speed) > MIN_SPEED_TO_TURN){
			if (this.keyHeld_TurnLeft){
				this.ang -= TURN_RATE;
			}
			if (this.keyHeld_TurnRight){
				this.ang += TURN_RATE;
			}
		}

		this.x += Math.cos(this.ang) * this.speed;
		this.y += Math.sin(this.ang) * this.speed; */

this.draw = function(){
		drawBitmapCenteredWithRotation(this.myWarriorPic, this.x, this.y,this.ang);
	}
}