var rock = document.getElementById("rock"); //Declaring the Rock as a variable
var Health = 5; //Declares Health variable
var Stones = 0; //Declares Stones variable
var PlayerLeft = 256; //Declares Player position
var PlayerTop = 256; //Declares Player position
var RockLeft = 64; //Declares Rock position
var RockTop = 64; //Declares Rock position
var totalStones = document.getElementById("stone"); //REMOVE THIS DUMBASS ITS A WASTE OF SPACE
var deathMessage = document.getElementById("deathScreen"); //Declares the death message as a variable
	function healthbarUpdate() { //Updates the image for the Healthbar based on what the Health variable is.
		var Healthbarimg = document.getElementById("Healthbar");
		Healthbarimg.value == Health;
		if(Health == "5") { //Stage 1, Max health
			Healthbarimg.src = "Images/Healthstage1.png";
		}	
		if(Health == "4") { //Stage 2, Slightly Damaged
			Healthbarimg.src = "Images/Healthstage2.png";
		}
		if(Health == "3") { //Stage 3, Moderately Damaged
			Healthbarimg.src = "Images/Healthstage3.png";
		}
		if(Health == "2") { //Stage 4, Very Damaged
			Healthbarimg.src = "Images/Healthstage4.png";
		}
		if(Health == "1") { //Stage 5, Death
			Healthbarimg.src = "Images/Healthstage5.png";
		}
		setTimeout(healthbarUpdate, 10);
	}
	healthbarUpdate();
	  function interact() { //Interaction script for rock
		  if((PlayerLeft - 64) == RockLeft) {
			  if(PlayerTop == RockTop) {
				  localStorage.stonecount = Number(localStorage.stonecount) + 1; //Adds to the stone
				  player.className = "rotate270"; //Rotates your player towards the rock
			  }
	  	  }
		if((PlayerLeft + 64) == RockLeft) {
			if(PlayerTop == RockTop) {
				localStorage.stonecount = Number(localStorage.stonecount) + 1;
				player.className = "rotate90";
			}}
		if((PlayerTop + 64) == RockTop) {
			if(PlayerLeft == RockLeft) {
				localStorage.stonecount = Number(localStorage.stonecount) + 1;
				player.className = "rotate180";
			}
		}
		if((PlayerTop - 64) == RockTop) {
			if(PlayerLeft == RockLeft) {
				localStorage.stonecount = Number(localStorage.stonecount) + 1;
				player.className = "rotate0";
			}}}
	  	function Inv() { //Switches pages to the Inventory
			sessionStorage.Page = 1;
			location = "Inventory.html"
		}
		function Crafting() { //Switches pages to the Crafting Menu
			sessionStorage.Page = 2;
			location = "Craftingmenu.html"
		}
	  //Detects Key Presses
	function KeyDetector(event) {
		switch (event.keyCode) {
			case 65: //A Key.
				if(Health != 1) {
				moveLeft();
				}
			break;
			case 87: //W Key.
				if(Health != 1) {
				moveUp();
				}
			break;
			case 68: //D Key.
				if(Health != 1) {
				moveRight();
				}
			break;
			case 83: //S Key.
				if(Health != 1) {
				moveDown();
				}
			break;
			case 32: //Spacebar
				interact();
				totalStones.textContent = "Stones:" + Number(localStorage.stonecount);
			break;
			case 69: //E Key. nice
				Inv();
			break;
			case 192: //GRAVE KEY
				Game();
			break;
			case 67: //C key
				Crafting();
			break;
			case 74: //J key FOR TESTING!
				localStorage.stonecount = 0
				totalStones.textContent = "Stones:" + Number(localStorage.stonecount);
			break;
			case 8: //Backspace FOR TESTING!
				damageEnemy();
			break;
		}
	};
	function gameLoop() //Function for KeyDetector. note to self: DONT FUCKING TOUCH IT
	  {
		KeyDetector();
		setTimeout("gameLoop()", 10)
	  }


		//INVENTORY

function Game() { //Switches to game page
sessionStorage.Page = 0;
location = "Game.html"
}
		//LOCAL STORAGE
function Counter() { //Counts the local storage for stones
  if (typeof(Storage) !== "undefined") {
    if (localStorage.stonecount) { //Detects if stonecount is stored, if it is it proceeds.
      localStorage.stonecount = Number(localStorage.stonecount);
    } else {
      localStorage.stonecount = 1; //Sets the stonecount if its not already set.
    }
	if(sessionStorage.Page = "1") { //Detects if the Inventory is open
		document.getElementById("stonecount").innerHTML = "Stone: " + localStorage.stonecount;
  	}
	if(sessionStorage.Page = "2") { //Detects if the Crafting menu is open
		document.getElementById("craftstone").innerHTML = "Stone: " + localStorage.stonecount;	
	}
  }}
function pageNumb() { //Stores temp data about what html document is active
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.Page) { //Detects if the page is stored, if it is not, it stores it.
      sessionStorage.Page = Number(sessionStorage.Page);
    } else {
      sessionStorage.Page = 0; //This stores it.
    }
  }}

document.body.onload = function() { //Starts gameLoop function when the body finishes loading
	gameLoop();
}