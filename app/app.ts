const main = new Main();
let canvas;

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    main.start(canvas);
}

window.onresize =() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    main.start(canvas);
};