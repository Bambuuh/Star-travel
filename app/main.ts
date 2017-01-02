class Main {

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private width: number;
    private height: number;

    private timeout;

    private stars: Star[] = [];

    public init(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.context.translate(this.width / 2, this.height / 2);
    }

    private getRandomNumber(max: number) {
        let number = Math.floor(Math.random() * max) + 1;
        number *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

        return number;
    }

    public start(canvas) {
        this.init(canvas);
        this.stars = [];
        const amountOfStars = this.width < this.height ? this.width / 1.5 : this.height / 1.5;
        for(let i = 0; i < amountOfStars; i++) {
            const x = this.getRandomNumber(this.width / 2);
            const y = this.getRandomNumber(this.height / 2);
            this.stars.push(new Star(x, y));
        }

        this.run(true);
    }

    public run(newRun: boolean) {
        if (newRun) {
            window.clearTimeout(this.timeout);
        }
        this.update();
        this.draw();
        this.timeout = setTimeout(() => this.run(false), 10);
    }

    private draw() {
        this.context.fillStyle = 'black';
        this.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

        this.stars.forEach(star => this.drawStar(star));
    }

    public update() {
        this.stars.forEach((star, i) => {
            star.update(this.width);
            if (star.x > (this.width / 2) || star.x < -(this.width / 2) || star.y > (this.height / 2) || star.y < -(this.height / 2) ) {
                const x = this.getRandomNumber(this.width / 6);
                const y = this.getRandomNumber(this.height / 6);
                star.init(x, y);
            }
        });
    }

    private drawStar(star: Star) {
        this.context.beginPath();
        this.context.arc(star.x, star.y, star.size, 0, 2 * Math.PI, false);
        this.context.fillStyle = `rgba(255,255,255,${star.opacity})`;
        this.context.fill()
    }
}