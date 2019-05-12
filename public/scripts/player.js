function Player(name, x,y, width,height){
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour =  "rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255+ ")";
}

// player draw method. Args for player drawin only screen center
Player.prototype.draw = function(x,y){
    ctx.fillStyle = this.colour;
    ctx.fillRect(x, y, this.width, this.height);
    ctx.fillText ( name + " " + this.x + " " + this.y, x, y)
}