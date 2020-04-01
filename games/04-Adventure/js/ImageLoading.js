var otherWarriorPic = document.createElement("img");

var worldPics = [];

var picsToLoad = 0; //set automatically based on imageList in loadImages()

function countLoadedImagesandLaunchifReady(){
	picsToLoad--;
	// console.log(picsToLoad);
	if (picsToLoad == 0) {
		imageLoadingDoneSoStartGame();
	}	
}

function beginLoadingImage (imgVar, fileName){
	imgVar.onload = countLoadedImagesandLaunchifReady;
	imgVar.src = "images/"+fileName;
}

function loadImageForWorldCode(worldCode, fileName){
	worldPics[worldCode] = document.createElement("img");
	beginLoadingImage (worldPics[worldCode], fileName);
}
function loadImages(){
//	var dataSet = {varName: warriorPic, theFile: "player1warrior.png"};

	var imageList = [
	{varName: otherWarriorPic, theFile: "player2warrior.png"},
	{worldType: WORLD_ROAD, theFile: "world_road.png"},
	{worldType: WORLD_WALL, theFile: "world_wall.png"},
	{worldType: WORLD_GOAL, theFile: "world_goal.png"},
	{worldType: WORLD_KEY, theFile: "world_key.png"},
	{worldType: WORLD_DOOR, theFile: "world_door.png"}
	];

	picsToLoad = imageList.length;

	for(var i=0; i< imageList.length; i++) {
		if (imageList[i].varName != undefined){
			beginLoadingImage (imageList[i].varName, imageList[i].theFile);	
		} else {
			loadImageForWorldCode(imageList[i].worldType,imageList[i].theFile);
		}
	}
}