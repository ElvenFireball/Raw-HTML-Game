var player = document.getElementById("player"); //Declares Player as a variable.
var Healthbar = document.getElementById("Healthbar"); //Declares Healthbar as a variable.
//Movement
function moveLeft() { //Moves Player left
	if((PlayerLeft - 64) != RockLeft) {
		player.style.left = parseInt(player.style.left) - 64;
		PlayerLeft -= 64;
	} else if(PlayerTop != RockTop) {
		player.style.left = parseInt(player.style.left) - 64;
		PlayerLeft -= 64;
	}
	player.className= 'rotate270';
}
function moveRight() { //Moves Player right
	if((PlayerLeft + 64) != RockLeft) {
		player.style.left = parseInt(player.style.left) + 64;
		PlayerLeft += 64;
	} else if(PlayerTop != RockTop) {
		player.style.left = parseInt(player.style.left) + 64;
		PlayerLeft += 64;
	}
	player.className = 'rotate90';
}
function moveUp() { //Moves Player up
	if((PlayerTop - 64) != RockTop) {
		player.style.top = parseInt(player.style.top) - 64;
		PlayerTop -= 64;
	} else if(PlayerLeft != RockLeft) {
		player.style.top = parseInt(player.style.top) - 64;
		PlayerTop -= 64;
	}
	player.className = 'rotate0';
}
function moveDown() { //Moves the player down
	player.className = 'rotate180';
	if((PlayerTop + 64) != RockTop) {
		player.style.top = parseInt(player.style.top) + 64;
		PlayerTop += 64;
	} else if(PlayerLeft != RockLeft) {
		player.style.top = parseInt(player.style.top) + 64;
		PlayerTop += 64;
}}
	  //Damage and Health
function damagePlayer() { //Damages the player
	if(Health != 1) { //Detects what the health of the player is at, and makes sure that the health doesn't go below death
		Health -= 1; //Negates 1 from the health
		Healthbar.value = Health;
	} else {
		deathMessage.removeAttribute("hidden");
		localStorage.stonecount = 0;
}}
function healthRegen() { //Script for health regeneration
	if(Health != 5) { //Detects if the health is at max and proceeds if the health is lower than 5
		if(Health != 1) { //Detects if the health is at stage 5, and proceeds if the player isn't dead
			Health += 1; //Adds to the health
			Healthbar.value = Health;
	}}
	setTimeout(healthRegen, 5000) //Sets a timer for 5 seconds to repeat this script again
}
healthRegen(); //Calls the function