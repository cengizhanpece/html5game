window.addEventListener('DOMContentLoaded', init, false);
const canvas = document.getElementById("canvas"),
      HEIGHT = canvas.height,
      WIDTH = canvas.width,
      ctx = canvas.getContext("2d");


// create player
var player = new Player("Cengiz", WIDTH/2, HEIGHT/2, '30', '30');
// player speed
var speed = 50;
// create camera
var camera = new Camera(0, 0, HEIGHT, WIDTH);
// store all created object
var allObj = [];
    

// set up game
function init(){
        createObj(); 
        setTimeout(redraw,30);
        document.onkeydown = Move;
}
// clear screen
function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function redraw(){
    clear(ctx);
    // draw only those entering the camera frame
    for(i = 0; i < allObj.length; i++){
        if(camera.isDrawing(allObj[i])){
            ctx.fillStyle = allObj[i].colour;
            allObj[i].draw(camera.x, camera.y);
        }
    }
    console.log("x: " + camera.x + " y: " + camera.y);
    // draw player center screen
    player.draw(WIDTH/2,WIDTH/2);
    setTimeout(redraw,30);
}
// create random object on random position
function createObj(){
    for(i = 0; i < 1000; i++){
        var randX = Math.floor(Math.random() * (WIDTH * 10));
        var randY = Math.floor(Math.random() * (HEIGHT * 10));
        var obj = new Obj(randX,randY, '50', '50');
        allObj.push(obj);
    }
}
// catch player move
function Move(e) {
    if(e.keyCode == '38') {player.y -= speed; camera.y -= speed;}
    if(e.keyCode == '40') {player.y += speed; camera.y += speed;}
    if(e.keyCode == '37') {player.x -= speed; camera.x -= speed;}
    if(e.keyCode == "39") {player.x += speed; camera.x += speed;}
  }