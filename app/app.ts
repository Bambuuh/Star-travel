const main = new Main();

window.onload = () => {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    main.init(canvas);
    main.run();
}