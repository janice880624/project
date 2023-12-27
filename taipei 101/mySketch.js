let particles = [];
let fontSize = 48;
let yPosition;
let letterSpacing = 10; 
let letters = []; 
var canvas_w = 800
var canvas_h = 600
var bNum=7;
var cc = [];
var r=[];
var m=[];

function setup() {
  createCanvas(canvas_w, canvas_h); 
  for (i = 0; i < bNum; i++) {
    r[i] = random(canvas_h / 4, canvas_h / 6 * 3);
    m[i] = random(canvas_h / 8, canvas_h / 6);
  }
}

function drawBuilding() {
  stroke(255); 
  strokeWeight(2); 
  noFill(); 
	
  let x = canvas_w/2-35; // 初始 X
  let y = 500; // 初始 Y 
  let width = 90; // 梯形寬
  let height = 45; // 梯形高
  let rectHeight1 = 15; 
  let rectHeight2 = 55; 

  for (let i = 0; i < 8; i++) {
    let currentY = y - height * i;
    quad(
      x + 10, currentY,
      x + width - 10, currentY,
      x + width, currentY - height,
      x, currentY - height
    );
  }

  let baseY = y;
  quad(
    x + width+10, 610, // 右下
    x-5,610, // 左下
    x + 10, baseY, // 左上
    x + width-10, baseY // 右上
  );

  let topRectY = y - height * 8 - rectHeight1;
  rect(x + 20, topRectY, width - 40, rectHeight1);
  
  let topRectY2 = y - height * 8 - rectHeight2 - rectHeight1;
  rect(x + 35, topRectY2, 20, rectHeight2);
  
  fill(255);
  ellipse(x + 45, baseY, 35, 35);
  
  fill(205, 173, 0);
  ellipse(x + 45, baseY, 30, 30);

  line(x + width / 2, y - height * 8- rectHeight2 - rectHeight1, x + width / 2, y - height * 10-10);
  
  for (let i = 0; i < 8; i++) {
    let currentY = y - height * i;
    if (frameCount % 60 === 0) { 
      let col = [random(0, 255), random(0, 255), random(0, 255)]; 
      let vxLeft = random(-3, -1);
      let vy = random(-5, -3);
      particles.push(new Particle(x, currentY, col, vxLeft, vy));

      let vxRight = random(1, 3);
      particles.push(new Particle(x + width, currentY, col, vxRight, vy));
    }
  }
}

class Particle {
  constructor(x, y, col, vx, vy) {
    this.x = x;
    this.y = y;
    this.col = col;
    this.vx = vx;
    this.vy = vy;
    this.alpha = 255;

  }

  update() {
    this.vx *= 0.99; 
    this.vy += 0.1; 
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 2; 
  }

  show() {
    noStroke();
    if (this.col && this.col.length === 3) {
      fill(this.col[0], this.col[1], this.col[2], this.alpha);
    } else {
      fill(255, this.alpha);
    }
    ellipse(this.x, this.y, 10);
  }
}

function draw() {
  background(0, 25); 
  drawBuilding(); 
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].alpha <= 0) {
      particles.splice(i, 1);
    }
  }

}