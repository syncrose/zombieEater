let can = <HTMLCanvasElement>document.getElementById("myCanvas");
let cont = can.getContext('2d');
let canWidth = can.width;
let canHeight = can.height;
let charIcon = new Image();
charIcon.src = "http://www.icon100.com/up/1773/256/person.png";
let zombIcon = 0;
let speed = 50;
let x = 0;
let y = 0;
let charHeight = 50;
let charWidth = 50;

cont.strokeRect(400, 400, 20, 80);

//class Player {
//    constructor() {
        
//    }

//    drawPlayer() {
//        cont.drawImage(charIcon, 0, 0, 30, 30);
//    }
//}
//let newPlayer = new Player();
//newPlayer.drawPlayer();
charIcon.onload  = function () {
   let char = cont.drawImage(charIcon, x, y, charHeight, charWidth);

 
}

document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.keyCode == 68) {
        if (x + 50 < 1000) {
            cont.clearRect(x, y, 50, 50);
            x += 50;
            let char = cont.drawImage(charIcon, x, y, 50, 50)
        }


    }

});
document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.keyCode == 65) { 
        if (x - 50 >= 0) {
            cont.clearRect(x, y, 50, 50);
            x -= 50;
            let char = cont.drawImage(charIcon, x, y, 50, 50)
        }


    }

});
document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.keyCode == 83) {
        if (y + 50 < 1000) {
            cont.clearRect(x, y, 50, 50);
            y += 50;
            let char = cont.drawImage(charIcon, x, y, 50, 50)
        }


    }

});
document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.keyCode == 87) {
        if (y - 50 >= 0) {
            cont.clearRect(x, y, 50, 50);
            y -= 50;
            let char = cont.drawImage(charIcon, x, y, 50, 50)


        }
    }

});




