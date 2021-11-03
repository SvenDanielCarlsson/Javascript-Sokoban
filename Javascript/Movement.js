
document.addEventListener('keydown', function(event){
    
    const goUp = -1,
    goDown = 1,
    goLeft = -1,
    goRight = 1;
    
    let walked = 0;

if(event.key){event.preventDefault(); arrowKeys();}

function arrowKeys() {
    
    if( event.key == 'W' || event.key == 'w' || event.key == 'ArrowUp')     {console.log("\nWalked to the rakt upp");   walked='up';    movePlayer((posY_player + goUp), posX_player);}
    if( event.key == 'S' || event.key == 's' || event.key == 'ArrowDown')   {console.log("\nWalked to the rakt ner");   walked='down';  movePlayer((posY_player + goDown), posX_player);}
    if( event.key == 'A' || event.key == 'a' || event.key == 'ArrowLeft')   {console.log("\nWalked to the left");       walked='left';  movePlayer(posY_player, (posX_player +goLeft));}
    if( event.key == 'D' || event.key == 'd' || event.key == 'ArrowRight')  {console.log("\nWalked to the right");      walked='right'; movePlayer(posY_player, (posX_player + goRight));}
}

function movePlayer(moveY, moveX){

    thePlayerMove = "y" + moveY + "x" + moveX;    

    if (isWall() == true) {}
    else if (isMoveableBlock() == false) { console.log("BLOCK BLOCKED!")}
    else if (isMoveableBlock() == true) { playerWalk(moveY, moveX); }
    else {playerWalk(moveY, moveX);}
    console.log("Player Position: ", posPlayer);
    if(isLevelWon() == true) { alert("Congratulations you beat the level!"); }
}

function isWall(checkForWall){
    
    if(document.getElementById(thePlayerMove).classList.contains('boxWall') == true) { console.log("ITS A WAAAAALL!"); return true;}
}

function isMoveableBlock(){

    let moveblock;

    switch(walked){
        case 'up':
            moveblock = "y"+(posY_player+(2*goUp)+"x"+posX_player);
            break;
        case 'down':
            moveblock = "y"+(posY_player+(2*goDown))+"x"+posX_player;
            break;
        case 'left':
            moveblock = "y"+posY_player+"x"+(posX_player+(2*goLeft));
            break;
        case 'right':
            moveblock = "y"+posY_player+"x"+(posX_player+(2*goRight));
            break;
    }
    //  check if block is blocked
    if (document.getElementById(thePlayerMove).classList.contains('boxMovBlock') == true &&
        (document.getElementById(moveblock).classList.contains('boxWall') == true ||
        document.getElementById(moveblock).classList.contains('boxMovBlock') == true)) {return false;}

    // move single block
    else if(document.getElementById(thePlayerMove).classList.contains('boxMovBlock') == true){
        document.getElementById(thePlayerMove).classList.remove("boxMovBlock");
        document.getElementById(moveblock).classList.add("boxMovBlock");

        console.log("BLOCK MOVED!"); return true;
    }
}



})  //      __      __      End of addEventLister 'keydown'     __          __          ||




function playerWalk(moveY, moveX){

    document.getElementById(posPlayer).classList.remove("boxPlayer");
    document.getElementById(thePlayerMove).classList.add("boxPlayer");
    posPlayer = thePlayerMove;
    posY_player = moveY;
    posX_player = moveX;

    console.log("counter: ",stepCounter++);
    //stepCounter++;
    //steps.append(stepcounter);
}

function isLevelWon(){

    let inTheGoal = 0;
    for (i = 0; i < posGoals.length ; i++){
        if(document.getElementById(posGoals[i]).classList.contains('boxMovBlock') == true){inTheGoal++;}
    }
    if(inTheGoal == posGoals.length){
        console.log("SUPER WINNER");
        return true;
    }
}
