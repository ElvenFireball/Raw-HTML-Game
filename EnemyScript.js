var player = document.getElementById("player"); //Defines Player
var playerLeft = 256; //Defining the position of the player
var playerTop = 256; //Defining the position of the player
var enemy = document.getElementById("enemy"); //Defines Enemy
var enemyLeft = 512; //Defining the position of the enemy
var enemyTop = 512; //Defining the position of the enemy
var enemyHP = 5; //Defining the health of the Enemy

function findEntities() { //Function for finding the players position and setting the playerLeft and playerTop variables
	playerLeft = parseInt(player.style.left);
	playerTop = parseInt(player.style.top);
	enemyLeft = parseInt(enemy.style.left);
	enemyTop = parseInt(enemy.style.top);
	chooseMovement();
	setTimeout(findEntities, 1000) //starting a loop.
}
findEntities();
function chooseMovement() { //Chooses the direction to move, moves on X-axis first, then Y-axis
	if((playerLeft - 64) > enemyLeft) {
		Right();
	} else if((playerLeft + 64) < enemyLeft) {
		Left();
	} else if((playerTop + 64) < enemyTop) {
		Up();
	} else if((playerTop - 64) > enemyTop) {
		Down();
	} else {
		damagePlayer();
}}

function Right() { //Moves the enemy right
	enemy.style.left = parseInt(enemy.style.left) + 64;
	enemyLeft += 64;
}
function Left() { //Moves the enemy left
	enemy.style.left = parseInt(enemy.style.left) - 64;
	enemyLeft -= 64;
}
function Up() { //Moves the enemy up
	enemy.style.top = parseInt(enemy.style.top) - 64;
	enemyTop -= 64;
}
function Down() { //Moves the enemy down
	enemy.style.top = parseInt(enemy.style.top) + 64;
	enemyTop += 64;
}

function damageEnemy() {
	if(enemyHP != 0) {
		enemyHP -= 1;
	} else {
		setAttribute("hidden");
}}