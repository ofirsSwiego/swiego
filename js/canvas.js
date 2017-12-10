"use strict";
var toggle = document.querySelector(".toggle");

var VW = window.innerWidth;
var VH = window.innerHeight;
var getContext = function (w, h, c) {
    var canvas = document.createElement("canvas");
    canvas.classList.add("header-canvas");
    document.querySelector(".header").appendChild(canvas);
    canvas.width = w || window.innerWidth;
    canvas.height = h || window.innerHeight;
    return canvas.getContext("2d");
};
var ctx = getContext(VW, VH);
var Particle = /** @class */ (function () {
    function Particle(x, y, radius, opacity) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.radius = 0;
        this.targetRadius = radius;
        this.opacity = 0;
        this.targetOpacity = opacity;
        this.waxing = true;
    }
    Particle.prototype.move = function () {
        this.vy -= 0.005;
        this.y += this.vy;
        this.radius += (this.targetRadius - this.radius) / 50;
        this.opacity += (this.targetOpacity - this.opacity) / 50;
        if (this.y < 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Particle.prototype.draw = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255," + this.opacity / 100 + ")";
        ctx.fill();
    };
    return Particle;
}());
var particles = [];
var update = function () {
    var s = Math.round(Math.random() * 100);
    if (s < 10) {
        var p = new Particle(Math.round(Math.random() * VW), Math.round(Math.random() * VH), Math.ceil(Math.random() * 3), Math.round(Math.random() * 50 + 25));
        particles.push(p);
    }
    var a = [];
    particles.forEach(function (e) {
        if (!e.move()) {
            a.push(e);
        }
    });
    particles.length = 0;
    a.forEach(function (e) {
        particles.push(e);
    });
};
var draw = function () {
    ctx.clearRect(0, 0, VW, VH);
    particles.forEach(function (e) {
        e.draw(ctx);
    });
};
var frame = setInterval(function () {
    update();
    draw();
}, 16); // ~60fps