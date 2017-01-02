var Main = (function () {
    function Main() {
        this.stars = [];
    }
    Main.prototype.init = function (canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.context.translate(this.width / 2, this.height / 2);
    };
    Main.prototype.getRandomNumber = function (max) {
        var number = Math.floor(Math.random() * max) + 1;
        number *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        return number;
    };
    Main.prototype.start = function (canvas) {
        this.init(canvas);
        this.stars = [];
        var amountOfStars = this.width < this.height ? this.width / 1.5 : this.height / 1.5;
        for (var i = 0; i < amountOfStars; i++) {
            var x = this.getRandomNumber(this.width / 2);
            var y = this.getRandomNumber(this.height / 2);
            this.stars.push(new Star(x, y));
        }
        this.run(true);
    };
    Main.prototype.run = function (newRun) {
        var _this = this;
        if (newRun) {
            window.clearTimeout(this.timeout);
        }
        this.update();
        this.draw();
        this.timeout = setTimeout(function () { return _this.run(false); }, 10);
    };
    Main.prototype.draw = function () {
        var _this = this;
        this.context.fillStyle = 'black';
        this.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        this.stars.forEach(function (star) { return _this.drawStar(star); });
    };
    Main.prototype.update = function () {
        var _this = this;
        this.stars.forEach(function (star, i) {
            star.update(_this.width);
            if (star.x > (_this.width / 2) || star.x < -(_this.width / 2) || star.y > (_this.height / 2) || star.y < -(_this.height / 2)) {
                var x = _this.getRandomNumber(_this.width / 6);
                var y = _this.getRandomNumber(_this.height / 6);
                star.init(x, y);
            }
        });
    };
    Main.prototype.drawStar = function (star) {
        this.context.beginPath();
        this.context.arc(star.x, star.y, star.size, 0, 2 * Math.PI, false);
        this.context.fillStyle = "rgba(255,255,255," + star.opacity + ")";
        this.context.fill();
    };
    return Main;
}());
//# sourceMappingURL=main.js.map