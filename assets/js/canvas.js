//之後可以把刪除和保存功能加上
document.addEventListener("DOMContentLoaded", function () {

    // create canvas element and append it to document body
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    

    // get canvas 2D context and set him correct size
    var ctx = canvas.getContext('2d');
    resize();

    // last known position
    var pos = { x: 0, y:0 };

    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', draw);
    document.addEventListener('mousedown', setPosition);
    document.addEventListener('mouseenter', setPosition);

    // new position from mouse event
    function setPosition(e) {
        const rect = canvas.getBoundingClientRect();
        pos.x = e.clientX - rect.left;
        pos.y = e.clientY - rect.top;
    }

    // resize canvas
    function resize() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
    }


    function randomcolor() { return "hsl(" + Math.random() * 360 + ",100%,50%)"; }


    function draw(e) {
    // mouse left button must be pressed
    // if (e.buttons !== 1) return;

    ctx.beginPath(); // begin

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = randomcolor();

    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!
    }

    function save() {
        html2canvas(document.body).then(function(canvas) {
            // Export the canvas to its data URI representation
            var base64image = canvas.toDataURL("image/png");

            function debugBase64(base64URL){
                var win = window.open();
                win.document.write('<iframe src="' + base64URL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
            }
            // Open the image in a new window
            debugBase64(base64image);
        });
    }


    function erase() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

});


