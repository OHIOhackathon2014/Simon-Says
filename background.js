chrome.app.runtime.onLaunched.addListener(function () {
	var screenWidth = screen.availWidth;
	var screenHeight = screen.availHeight;
	var width = 500;
	var height = 300;
	var height = 250;
	chrome.app.window.create('index.html', {
		id : "helloWorldID",
		outerBounds : {
			width : width,
			height : height,
			left : Math.round((screenWidth - width) / 2),
			top : Math.round((screenHeight - height) / 2)
			left : 0,
			top : 0
		}
	});
});