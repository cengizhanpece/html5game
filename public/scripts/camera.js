function Camera(x,y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

// if given args on the camera frame return true 
Camera.prototype.isDrawing = function(obj){
    if((obj.x + obj.width >= this.x && obj.x <= this.x + this.width) && (obj.y + obj.height >= this.y && obj.y <= this.y + this.height)){
        return true;
    }
    else{
        return false;
    }
}