const WORLD_W = 50;
const WORLD_H = 50; 
const WORLD_GAP = 2;
const WORLD_COLS = 800/WORLD_W;
const WORLD_ROWS = 600/WORLD_H;

var levelOne = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 1, 1, 1, 1,
				 1, 0, 4, 0, 4, 0, 1, 0, 2, 0, 1, 0, 1, 4, 4, 1,
				 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 1, 5, 1, 1,
				 1, 1, 1, 5, 1, 1, 1, 0, 4, 0, 1, 0, 0, 0, 1, 1,
				 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 1, 1,
				 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1,
				 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4, 0, 1, 1,
				 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1,
				 1, 0, 5, 0, 5, 0, 5, 0, 3, 0, 1, 1, 1, 1, 1, 1,
				 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var worldGrid = [];

const WORLD_ROAD = 0;
const WORLD_WALL = 1;
const WORLD_PLAYERSTART = 2;
const WORLD_GOAL = 3;
const WORLD_KEY = 4;
const WORLD_DOOR = 5;

function returnTileTypeAtColRow(col,row){

	if (col >= 0 && col < WORLD_COLS && row >= 0 && row < WORLD_ROWS ) {
		var worldIndexUnderCoord = rowColToArrayIndex (col,row);
		return (worldGrid[worldIndexUnderCoord]);
	} else {
		return WORLD_WALL;
	}
}

function warriorWorldHandling(atX, atY){
	var warriorWorldCol = Math.floor(atX/WORLD_W);
	var warriorWorldRow = Math.floor(atY/WORLD_H);
	var worldIndexUnderWarrior = rowColToArrayIndex(warriorWorldCol, warriorWorldRow);

	if (warriorWorldCol >= 0 && warriorWorldCol < WORLD_COLS && warriorWorldRow >= 0 && warriorWorldRow < WORLD_ROWS ) {
		return worldIndexUnderWarrior;
	}

	return undefined;
}

function rowColToArrayIndex (col, row) {
	return col + WORLD_COLS * row;
}

function isTileWithTransparency(tileKind){
	if (tileKind == WORLD_GOAL || tileKind == WORLD_KEY || tileKind == WORLD_DOOR){
		return true;
	} else {
		return false;
	}
}

function drawWorlds(){
	
	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;
	for (var eachRow=0; eachRow < WORLD_ROWS; eachRow++){

		for (var eachCol=0; eachCol<WORLD_COLS; eachCol++){
			var tileKindHere = worldGrid[arrayIndex];
			var useImg=worldPics[tileKindHere];

			if (isTileWithTransparency(tileKindHere)){
				canvasContext.drawImage(worldPics[WORLD_ROAD], drawTileX,drawTileY);
			}
			canvasContext.drawImage(useImg, drawTileX,drawTileY);
			drawTileX += WORLD_W;
			arrayIndex++;
		}
		drawTileY += WORLD_H;
		drawTileX = 0;
	}
}
