var Engine = (function(){
    var i = 0;
    return function Engine() {
        this.serial = i++;
    };
}());

function Wheel(name) {
    this.name = name;
}

function Car(wheel, engine) {
    this.engine = engine;
    this.wheel = wheel;
    this.speed = 0;
}
Car.prototype.speedUp = function(speed) {
    return speed >= 0 ? this.speed += speed : ++this.speed;
};
Car.prototype.speedDown = function(speed) {
    if(speed >= 0) {
        this.speed -= speed;
        if(this.speed <= 0) {
            this.speed = 0;;
        }
    }else {
        this.speed <= 0 ? this.speed = 0 : --this.speed;
    }
    return this.speed;
};

Car.prototype.changeSpeed = function(speed) {
    return speed >= 0 ? this.speed += speed : this.speed <= Math.abs(speed) ? this.speed = 0 : this.speed += speed;
};
Car.prototype.boost = function() {
    var self = this,
        oldSpeed = this.speed;
    setTimeout(function() {
        self.speed = oldSpeed;
    }, 3000);
    return this.speed *= this.speed;
};
