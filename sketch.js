let particles = [];

function setup() {
    createCanvas(windowWidth / 2, windowHeight / 2); // 缩小画布尺寸
    for (let i = 0; i < 200; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    clear(); // 清除画布内容，以便背景图片可见
    for (let particle of particles) {
        particle.update();
        particle.show();
    }
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.r = random(2, 5); // 粒子大小在 2 到 5 像素之间
        this.xSpeed = random(-1, 1);
        this.ySpeed = random(-1, 1);
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width) {
            this.xSpeed *= -1;
        }

        if (this.y < 0 || this.y > height) {
            this.ySpeed *= -1;
        }
    }

    show() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.r * 2);
    }
}

function mousePressed() {
    particles.push(new Particle());
}

function windowResized() {
    resizeCanvas(windowWidth / 2, windowHeight / 2); // 调整窗口大小时重新调整画布尺寸
}
