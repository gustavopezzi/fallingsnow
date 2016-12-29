document.addEventListener('DOMContentLoaded', function (event) {
	var w = window.innerWidth;
	var h = window.innerHeight;
	var canvas = document.getElementById('snow');
	var ctx = canvas.getContext('2d');
	var arc = 3000;
	var time;
	var count;
	var size = 1.3;
	var speed = 10;
	var lights = new Array;
	var colors = ['#eee', '#ddd', '#bbb'];

	canvas.setAttribute('width', w);
	canvas.setAttribute('height', h);

	function init() {
		time = 0;
		count = 0;

		for (var i = 0; i < arc; i++) {
			lights[i] = {
				x: Math.ceil(Math.random() * w),
				y: Math.ceil(Math.random() * h),
				toX: Math.random() * 5 + 1,
				toY: Math.random() * 5 + 1,
				c: colors[Math.floor(Math.random() * colors.length)],
				size: Math.random() * size
			}
		}
	}

	function bubble() {
		ctx.clearRect(0, 0, w, h);

		for (var i = 0; i < arc; i++) {
			var li = lights[i];

			ctx.beginPath();
			ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
			ctx.fillStyle = li.c;
			ctx.fill();

			li.x = li.x + li.toX * (time * 0.05);
			li.y = li.y + li.toY * (time * 0.05);

			if (li.x > w)
				li.x = 0;

			if (li.y > h)
				li.y = 0;

			if (li.x < 0)
				li.x = w;

			if (li.y < 0)
				li.y = h;
		}

		if (time < speed)
			time++;

		var timerID = setTimeout(bubble, 1000/50);
	}
	init();
	bubble();
});