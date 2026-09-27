// so ito yung mag ttrack kung nasaan na yung mole dun sa tiles
let currMoleTile;

// so ito yung mag ttrack kung nasaan na yung angel dun sa tiles
let currAngelTile;

let score = 0;
let gameOver = false;



window.onload = function() {
    setGame();
     
}

function setGame() {
    //set up the grid for the game board in html
    // the board is 3x3, so theres 9 tiles


    for (let i = 0; i < 9; i++) { // i goes from 0 to 8, stops at 9   --->   0,1,2,3,4,5,6,7,8

        // <div> id="0-8"</div>
        let tile = document.createElement("div");
        tile.id = i.toString();

        tile.addEventListener("click", selectTile);

        //so what were doing is kinukuha natin yung nine tags dun sa ginawa natin sa js and
        //were accessing this tag with id="board", and were inserting the tags/tiles inside of the div tag
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000);   //2000 milisecons = 2 seconds  ---> so every 2 second the setMole is being called
    setInterval(setAngel, 2000);  //3000 milisecons = 3 seconds  ---> so every 2 second the setMole is being called
}

/*
Math.random() — gumagawa ng random decimal number sa pagitan ng 0 at 1 (halimbawa 0.4821...).
Math.random() * 9 — pinapalaki natin yung range, so 0 to 9 (hindi pa kasama ang 9 mismo).
Math.floor(...) — binabawasan/binababa natin sa pinakamalapit na buong number pababa (rounds down), so magiging integer sa pagitan ng 0-8.*/
function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}


// PARA DUN SA DEVIL/MOLE
function setMole() {

    if (gameOver) {
        return;
    }

    if(currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "assets/bry-devil-removebg-preview.png";

    let num = getRandomTile();

    if ( currAngelTile && currAngelTile.id == num ) {
        return;
    }

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

// PARA DUN SA ANGEL
function setAngel() {

    if (gameOver) {
        return;
    }
    
    if (currAngelTile) {
        currAngelTile.innerHTML = "";
    }

    let angel = document.createElement("img");
    angel.src = "assets/bry-angel-removebg-preview.png";

    let num = getRandomTile();

    if ( currMoleTile && currMoleTile.id == num ) {
        return;
    }
    currAngelTile = document.getElementById(num);
    currAngelTile.appendChild(angel);
}

//PARA DUN SA GAME OVER AT INTERACTIVITY NUNG GAME PARA CLICKABLE
function selectTile() {

    if (gameOver) {
        return;
    }

    if ( this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();  // update score

    }
    else if (this == currAngelTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); 
        gameOver = true;
    }
}