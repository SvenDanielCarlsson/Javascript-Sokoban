let posY_player = -1;
let posX_player = -1;
let posPlayer;

let posGoal;
let posGoals = [];

//let steps = document.getElementById('steps'); not implemented as of now
let stepCounter = 1;
const gridDisplay = document.getElementById('grid');

document.addEventListener('DOMContentLoaded', () => {

    function createMap() {

        //steps = document.createElement('div');
        let square;
        
        for(let y = 0; y < tileMap01.height; y++){
            for (let x = 0; x < tileMap01.width; x++){ 
                square = document.createElement('div');
                square.id = "y" + y + "x" + x;

                switch(tileMap01.mapGrid[y][x][0]){

                    case "W":
                        square.classList.add("boxWall");
                        break;
                    case "B":
                        square.classList.add("boxMovBlock");
                        square.classList.add("boxSpace");
                        break;
                    case "P":
                        square.classList.add("boxPlayer");
                        square.classList.add("boxSpace");
                        posY_player = y;
                        posX_player = x;
                        posPlayer = square.id;
                        break;
                    case "G":
                        square.classList.add("boxGoal");
                        posGoal=square.id;
                        posGoals.push(posGoal);
                        break;
                    case " ":
                        square.classList.add("boxSpace");
                        break;
                }
                gridDisplay.appendChild(square);
            }
        }
    }
    createMap();    
})      //    End of addEventlistener DOMContentLoaded
