 function Obj(x,y, width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour =  "rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255+ ")";
}

// obj drawing on screen args for camera offset but actual x and y position doesnt change
Obj.prototype.draw = function(x,y){
    ctx.fillRect(this.x - x , this.y - y,this.width,this.height);
    ctx.fillText(this.x + " " + this.y, this.x -x  , this.y - y )
}

Obj.prototype.collide = function(player){
    if((player.x >= this.x && player.x <= this.x + this.width) && (player.y >= this.y && player.y <= this.y + this.height)){
        console.log(this);
        return true;
    }
    return false;
}