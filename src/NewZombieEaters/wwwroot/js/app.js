var can = document.getElementById("myCanvas");
var cont = can.getContext('2d');
var canWidth = can.width;
var canHeight = can.height;
var charIcon = new Image();
charIcon.src = "http://www.icon100.com/up/1773/256/person.png";
var zombIcon = 0;
var speed = 50;
var x = 0;
var y = 0;
var charHeight = 50;
var charWidth = 50;
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
charIcon.onload = function () {
    var char = cont.drawImage(charIcon, x, y, charHeight, charWidth);
};
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 68) {
        if (x + 50 < 1000) {
            cont.clearRect(x, y, 50, 50);
            x += 50;
            var char = cont.drawImage(charIcon, x, y, 50, 50);
        }
    }
});
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 65) {
        if (x - 50 >= 0) {
            cont.clearRect(x, y, 50, 50);
            x -= 50;
            var char = cont.drawImage(charIcon, x, y, 50, 50);
        }
    }
});
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 83) {
        if (y + 50 < 1000) {
            cont.clearRect(x, y, 50, 50);
            y += 50;
            var char = cont.drawImage(charIcon, x, y, 50, 50);
        }
    }
});
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 87) {
        if (y - 50 >= 0) {
            cont.clearRect(x, y, 50, 50);
            y -= 50;
            var char = cont.drawImage(charIcon, x, y, 50, 50);
        }
    }
});
//# sourceMappingURL=app.js.map