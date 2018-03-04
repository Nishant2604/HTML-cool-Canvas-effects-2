var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

function Rain() {
    this.x = x;
    this. y = y;
    this.dx = dx;
    this.dy = dy;

    this.draw = function () {
        var a = 50 * Math.random();
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.x + a, this.y + a);
        context.strokeStyle = '#aaabbc';
        context.stroke();
    }

    this.update = function(){
        this.x += this.dx;
        this.y += this.dy;

        if (this.x >= window.innerWidth) {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
        }

        if (this.y >= window.innerHeight) {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
        }

        this.draw()
    }
}

var rainArray = [];
rainDensity = 200;

for(var i = 0; i < rainDensity; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    var dx = Math.random() + 5;
    var dy = dx;

    rainArray.push(new Rain(x, y, dx, dy));
}


console.log(rainArray);


function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for(var i = 0; i < rainArray.length; i++){
        rainArray[i].update();
    }
}

animate();



