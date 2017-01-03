var main = new Main();
var canvas;
window.onload = function () {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    main.start(canvas);
};
window.onresize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    main.setResizedTrue();
    main.start(canvas);
};
//# sourceMappingURL=app.js.map