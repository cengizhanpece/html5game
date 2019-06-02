window.addEventListener('DOMContentLoaded', init, false);
const canvas = document.getElementById("canvas"),
      HEIGHT = canvas.height,
      WIDTH = canvas.width,
      ctx = canvas.getContext("2d");

const MAP_HEIGHT = HEIGHT*10,
      MAP_WIDTH = WIDTH*10;
// create player
var player = new Player("Cengiz", WIDTH/2, HEIGHT/2, 30, 30);
// player speed
var speed = 10;
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
    
    // draw player center screen
    player.draw(WIDTH/2,WIDTH/2);
    setTimeout(redraw,30);
}
// create random object on random position
function createObj(){
    for(i = 0; i < 10000; i++){
        var randX = Math.floor(Math.random() * MAP_WIDTH );
        var randY = Math.floor(Math.random() * MAP_HEIGHT );
        var obj = new Obj(randX,randY, 50, 50);
        allObj.push(obj);
    }
}
// catch player move
function Move(e) {
    if(e.keyCode == '38' && player.y > player.height + 0) {
        if(player.collide(allObj, camera, player.x, player.y - speed)){
            return true;
        }
        player.y -= speed; 
        camera.y -= speed;
    }
    if(e.keyCode == '40' && player.y < player.height + MAP_HEIGHT) {
        if(player.collide(allObj, camera, player.x, player.y + speed)){
            return true;
        }
        player.y += speed; 
        camera.y += speed;
    }
    if(e.keyCode == '37' && player.x > player.width + 0) {
        if(player.collide(allObj, camera, player.x - speed, player.y)){
            return true
        }

        player.x -= speed; 
        camera.x -= speed;
    }
    if(e.keyCode == "39" && player.x < player.width + MAP_WIDTH) {
        if(player.collide(allObj, camera, player.x + speed, player.y)){
            return true
        }
        player.x += speed; 
        camera.x += speed;
    }
  }