var canvas = document.getElementById("app") as HTMLCanvasElement;
var stage = engine.run(canvas);
var bitmap = new engine.Bitmap();
stage.addChild(bitmap);

var button = new engine.Bitmap();
button.src = "按钮.jpg";
button.x = 300;

var bitmap1 = new engine.Bitmap();
bitmap1.src = "1.jpg";
bitmap1.x = 300;




/**
 * 动画
 */

var moveRightData: engine.MovieClipData = {//向右移动头文件
	name: "three",
	frames: [
		{ image: "resource/moveR/moveR1.jpg" },
		{ image: "resource/moveR/moveR2.jpg" },
		{ image: "resource/moveR/moveR3.jpg" },
		{ image: "resource/moveR/moveR4.jpg" },
		{ image: "resource/moveR/moveR5.jpg" },
		{ image: "resource/moveR/moveR6.jpg" },
		{ image: "resource/moveR/moveR7.jpg" },
		{ image: "resource/moveR/moveR8.jpg" },

	]
}

var moveLeftData: engine.MovieClipData = {//向左移动头文件
	name: "three",
	frames: [
		{ image: "resource/moveL/moveL1.jpg" },
		{ image: "resource/moveL/moveL2.jpg" },
		{ image: "resource/moveL/moveL3.jpg" },
		{ image: "resource/moveL/moveL4.jpg" },
		{ image: "resource/moveL/moveL5.jpg" },
		{ image: "resource/moveL/moveL6.jpg" },
		{ image: "resource/moveL/moveL7.jpg" },
		{ image: "resource/moveL/moveL8.jpg" },

	]
}

var fightData: engine.MovieClipData = {//战斗头文件
	name: "three",
	frames: [
		{ image: "resource/fight/fight1.jpg" },
		{ image: "resource/fight/fight2.jpg" },
		{ image: "resource/fight/fight3.jpg" },
		{ image: "resource/fight/fight4.jpg" },
		{ image: "resource/fight/fight5.jpg" },
		{ image: "resource/fight/fight6.jpg" },
		{ image: "resource/fight/fight7.jpg" },
		{ image: "resource/fight/fight8.jpg" },

	]
}



//动画序列
var moveRightclip = new engine.MovieClip(moveRightData)
var moveLeftclip = new engine.MovieClip(moveLeftData)
var fightclip = new engine.MovieClip(fightData);



var container1 = new engine.DisplayObjectContainer();
container1.x = 0;


var container2 = new engine.DisplayObjectContainer();
container2.x = 100;

var container3 = new engine.DisplayObjectContainer();
container3.x = 100;
container3.y = 100;

var container4 = new engine.DisplayObjectContainer();
container4.x = 100;
container4.y = 200;


container1.addChild(bitmap1);
container1.addChild(button);

container2.addChild(moveRightclip);
container3.addChild(moveLeftclip);
container4.addChild(fightclip);

// stage.addChild(container1);
stage.addChild(container2);
stage.addChild(container3);
stage.addChild(container4);

bitmap1.addEventListener(engine.MouseState.MOUSE_MOVE, (e) => {
	// console.log("e.offsetX: " + e.offsetX + "  e.offsetY: " + e.offsetY);
	container1.x += e.movementX;
	container1.y += e.movementY;
});

button.addEventListener(engine.MouseState.MOUSE_CLICK, (e) => {
	alert("111");
});



