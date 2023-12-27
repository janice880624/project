function setup() {
	// step.1 背景大小
	createCanvas(600, 800);

	// step.2 背景顏色
	background(255);
	
	// 每秒影格數
	frameRate(15);

	// step.3 卡片設定
	// 3-2 線寬
	strokeWeight(3);

	// 3-4 線的顏色
	stroke(51);

	// 3-3 卡片顏色
	fill('#fce4ec');

	// 3-1 矩形
	rect(0, 0, 600, 800);
}

function draw() {
	
	// 文字
	var s = "媽媽母親節快樂";
	textSize(50);
	strokeWeight(2);
	fill("#D74B4B");
	text(s, 120, 100)
	
	// 葉子
	noFill();
	stroke(0, random(255), random(255), random(100));
	// bezier(300, 1000, 300, random(400, 700), 300, random (400, 700), random(600), random(400, 700));
	bezier(300, 1000, 300, random(450, 550), 300, random (450, 550), random(600), random(450, 550));
	
	// 花
	var tran = random(50, 100); // 透明度
	var loca = random(100); // 花瓣隨機位置
	
	// 花的顏色
	fill(random(55, 234), random(234), 255, tran);
	
	noStroke();
	translate(300, 320)
	rotate(random(360))
	triangle(loca, loca, 0, loca, loca, 0)
}