var Star = (function () {
    function Star(x, y) {
        this.opacity = 0;
        this.size = 0;
        this.maxSize = 1;
        this.maxSpeed = 7;
        this.init(x, y);
    }
    Star.prototype.update = function (width) {
        this.size = ((this.getDistance() / (width / 2)) * this.maxSize) + 0.5;
        this.opacity = (this.size / 3 * 1) * 0.8;
        this.speed = (this.getDistance() / (width / 2)) * this.maxSpeed;
        this.dx = this.speed * Math.sin(this.angle);
        this.dy = this.speed * Math.cos(this.angle);
        this.x += this.x >= 0 && this.isPositive(this.dx) ? this.dx : this.dx * -1;
        this.y += this.y >= 0 && this.isPositive(this.dy) ? this.dy : this.dy * -1;
    };
    Star.prototype.getDistance = function () {
        var a = this.isPositive(this.x) ? this.x : this.x * -1;
        var b = this.isPositive(this.y) ? this.y : this.y * -1;
        return a > b ? a : b;
    };
    Star.prototype.isPositive = function (number) {
        return number > 0;
    };
    Star.prototype.init = function (x, y) {
        this.maxSpeed = Math.random() * (7 - 1 + 1) + 1;
        this.maxSize = this.maxSpeed / 5 * 1.8;
        this.size = 0.5;
        this.x = x;
        this.y = y;
        this.speed = (this.getDistance() / 250) * this.maxSpeed;
        this.baseDx = -this.x;
        this.baseDy = -this.y;
        this.angle = Math.atan2(this.baseDx, this.baseDy);
        this.dx = this.speed * Math.sin(this.angle);
        this.dy = this.speed * Math.cos(this.angle);
    };
    return Star;
}());
//# sourceMappingURL=star.js.map