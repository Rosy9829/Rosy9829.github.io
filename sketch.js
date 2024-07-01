let particles = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    for (let i = 0; i < 300; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(255);
    for (let particle of particles) {
        particle.update();
        particle.show();
    }
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.r = random(4, 8);
        this.xSpeed = random(-3, 3); // 增加速度
        this.ySpeed = random(-3, 3); // 增加速度
        this.color = color(random([255, 0]), 0, random([0, 255]));
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > width || this.x < 0) {
            this.xSpeed *= -1;
        }

        if (this.y > height || this.y < 0) {
            this.ySpeed *= -1;
        }

        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < 50) {
            this.xSpeed = random(-5, 5); // 增加跳动频率
            this.ySpeed = random(-5, 5); // 增加跳动频率
        }
    }

    show() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.r * 2);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
