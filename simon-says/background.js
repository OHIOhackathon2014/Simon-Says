chrome.app.runtime.onLaunched.addListener(function () {
	// Center window on screen.
	var screenWidth = screen.availWidth;
	var screenHeight = screen.availHeight;
	var width = 500;
	var height = 307;
	chrome.app.window.create('index.html', {
		id : "simonSaysBrowser",
		frame : "none",
		outerBounds : {
			
			width : width,
			height : height,
			left : 0,
			top : 0
		},
		resizable : false
	}, function (createdWindow){
		createdWindow.setAlwaysOnTop(true);
	});
});

chrome.tabs.create();