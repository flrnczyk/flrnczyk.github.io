
document.addEventListener("DOMContentLoaded", function () {

    // create canvas element and append it to document body
    var canvas = document.createElement('canvas');
    var everything = document.getElementById("everything");
    // document.body.appendChild(canvas);
    everything.appendChild(canvas);
    // some hotfixes... ( ≖_≖)
    // document.body.style.margin = 0;
    canvas.style.marginTop = "-5%";
    canvas.style.marginLeft = "-10%";
    canvas.style.position = 'absolute';
    canvas.style.zIndex = -1;

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


    function randomcolor() {
        const palettes = [
            // red
            { h: [350, 360], s: [80, 100], l: [45, 55] },
            { h: [0, 20],    s: [80, 100], l: [45, 55] },

            // pink
            { h: [300, 330], s: [50, 80],  l: [65, 80] },

            // purp
            { h: [260, 290], s: [60, 90],  l: [45, 60] },

            // blue
            { h: [200, 240], s: [60, 90],  l: [45, 60] },

            // gray
            { h: [0, 360],   s: [0, 10],   l: [30, 70] },

            // black
            { h: [0, 360],   s: [0, 10],   l: [0, 15] }
        ];

        const p = palettes[Math.floor(Math.random() * palettes.length)];

        const h = rand(p.h[0], p.h[1]);
        const s = rand(p.s[0], p.s[1]);
        const l = rand(p.l[0], p.l[1]);

        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }


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
            // document.getElementById("canvasimg").style.border = "2px solid";
            // var dataURL = canvas.toDataURL();
            // document.getElementById("canvasimg").src = dataURL;
            // document.getElementById("canvasimg").style.display = "inline";

    //         html2canvas(document.querySelector("#capture")).then(canvas => {
    //     document.body.appendChild(canvas)
    // });
    // windowbutton.addEventListener("click", openManyWindows);
    // html2canvas(document.body).then(function(canvas) {
    //     document.querySelector("#capture").appendChild(canvas);
    // });
    html2canvas(everything).then(function(canvas) {
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

    ////////////////////////////////
    // function openWindow(){
    //
    //   let ranX = Math.random()*sw - popupWidth;
    //   let ranY = Math.random()*sh - popupHeight;
    //
    //   let specifications = "width="+popupWidth+", height="+popupHeight+", left="+ranX+", top="+ranY;
    //
    //   let url =  "balls";
    //
    //   let win = window.open(url, "", specifications);
    //
    //   let ranTime = 3000 + Math.random()*1000;
    //
    //   setTimeout(()=>{
    //     win.close();
    //   }, ranTime);
    // }


    function erase() {
            var m = confirm("Want to clear");
            if (m) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                //
                // let blank = document.createElement('div');
                // querySelector("canvas").innerHTML = blank.innerHTML;
            }
    }
});