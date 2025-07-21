"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });



const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;

		// Replace with your own code //
		// Set the home position at (0, 0) before the game starts
		this.positionRow = 0; //up down
		this.positionCol = 0; // left right
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}

	Print field //
	print() {

		let randomShape = Math.random();
		if(randomShape >=0 && randomShape<1/3	){
			randomShape =  hat;
		}
		else if(randomShape >=1/3 && randomShape<2/3){
			randomShape = hole;

		}else if(randomShape >= 2/3 && randomShape<1){
			randomShape = fieldCharacter;
		}
		console.log(randomShape);

move(){
		while(true){
			const command = prompt("input :");
console.log(`your input ${command}`);

if(command === 'r'){
  console.log(this.positionRow);
  console.log(this.positionCol);
	console.log(this.field);
}
		}
	}


		// clear();

		// Replace with your own code //
		// console.log(this.field); // Please REMOVE this line before you start your code!
	}

	// Your Code //


// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);
newGame.print();
