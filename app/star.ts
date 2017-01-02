class Star {

    public x: number;
    public y: number;

    private baseDx: number
    private baseDy: number;
    private dx: number;
    private dy: number;

    public angle: number;
    private maxSize = 2;
    public size: number = 0.5;

    private maxSpeed = 7;
    private speed;

    constructor(x: number, y: number) {
        this.init(x, y);
    }

    public update(width: number) {
        this.size = (this.getDistance() / (width / 2)) * this.maxSize;

        this.speed = (this.getDistance() / (width / 2)) * this.maxSpeed;

        this.dx =  this.speed * Math.sin(this.angle);
        this.dy = this.speed * Math.cos(this.angle);

        this.x += this.x >= 0 && this.isPositive(this.dx) ? this.dx : this.dx * -1;
        this.y += this.y >= 0 && this.isPositive(this.dy) ? this.dy : this.dy * -1;

    }

    private getDistance() {
        const a = this.isPositive(this.x) ? this.x : this.x * -1;
        const b = this.isPositive(this.y) ? this.y : this.y * -1;
        return a > b ? a : b;
    }

    private isPositive(number: number) {
        return number > 0;
    }

    public init(x:number, y: number) {
        this.size = 0.5;
        this.x = x; 
        this.y = y;
        this.speed = (this.getDistance() / 250) * this.maxSpeed;

        this.baseDx = -this.x;
        this.baseDy = -this.y;

        this.angle = Math.atan2(this.baseDx, this.baseDy);

        this.dx =  this.speed * Math.sin(this.angle);
        this.dy = this.speed * Math.cos(this.angle);
    }
}