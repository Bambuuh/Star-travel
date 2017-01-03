class Star {

    public x: number;
    public y: number;
    public opacity = 0;

    private baseDx: number
    private baseDy: number;
    private dx: number;
    private dy: number;
    private speed;

    public angle: number;
    public size: number = 0;

    private maxSize = 1;
    private maxSpeed = 7;

    constructor(x: number, y: number) {
        this.init(x, y);
    }

    public update(width: number) {
        this.size = ((this.getDistance() / (width / 2)) * this.maxSize) + 0.5;
        this.opacity = (this.size / 3 * 1) * 0.8;

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
        this.maxSpeed = Math.random() * (7 - 1 + 1) + 1;
        this.maxSize = this.maxSpeed / 5 * 1.8;

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