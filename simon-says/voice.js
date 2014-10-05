(function () {
	//Extension communication
	var childExtensionID = "dgenmeabhemcmchipmmkmflncedibomd";
	
	var port = chrome.runtime.connect(childExtensionID, {
			name : "simonconnection"
		});
	port.postMessage({
		action : "connected",
		target : "",
		url : ""
	});
	port.onMessage.addListener(function (msg) {
		//do things
	});
	
	//Speech recognition
	var recognition = new webkitSpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = false;
	recognition.onstart = function (event) {
		document.getElementById("voiceInput").innerHTML = "Recognition Started";
	}
	
	recognition.onresult = function (event) {
		var transcript = "";

		for (var i = event.resultIndex; i < event.results.length; i++) {
			transcript += event.results[i][0].transcript;
		}
		
		transcript = transcript.trim();
		
		document.getElementById("voiceInput").innerHTML = transcript;
		
		processString(transcript);
	}
	
	recognition.onspeechend = function (){
		recognition.start();
	}
	
	function processString(str){
		//Split the string into tokens
		var arr = str.split(" ");
		
		if (arr.indexOf("Simon") != 0){
			return;
		}
		
		//Booleans that check if the string is valid command
		var OPEN_SITE = (arr.indexOf("open") == 1 && arr.length > 2);
		var GO_TO_SITE = (((arr.indexOf("go") == 1 && arr.indexOf("to") == 2)) && arr.length == 4);
		var CLOSE_TAB = (arr.indexOf("close") == 1 && arr.indexOf("tab") == 2);
		var EXIT_APP = ((arr.indexOf("exit") == 1 || arr.indexOf("quit") == 1) && arr.length == 2);
		var PREVIOUS = (arr.indexOf("go") == 1 && arr.indexOf("back") == 2);
		var FORWARD = (arr.indexOf("go") == 1 && arr.indexOf("forward") == 2);
		var SWITCH_TO = (arr.indexOf("switch") == 1 && arr.indexOf("to") == 2 && arr.indexOf("tab") == 3 && arr.length == 5);
		var CLICK_LINK= (arr.indexOf("click") == 1 && arr.indexOf("link") == 2 && arr.length == 4);
		var REFRESH = (arr.indexOf("refresh") == 1);
		var SCROLL = (arr.indexOf("scroll") == 1);
		
		if (OPEN_SITE){
			port.postMessage({
				action : "open",
				target : "",
				url : "http://" + arr[arr.indexOf("open")+1]
			});
			document.getElementById("computerAction").innerHTML = "Open Site";
		}
		if (GO_TO_SITE){
			port.postMessage({
				action : "goto",
				target : "",
				url : "http://" + arr[3]
			});
			document.getElementById("computerAction").innerHTML = "Navigate to Site";
		}
		if (CLOSE_TAB){
			if (arr.length > 3){
				port.postMessage({
					action : "close",
					target : arr[3],
					url : ""
				});
			}
			else{
				port.postMessage({
					action : "close",
					target : "",
					url : ""
				});
			}
			document.getElementById("computerAction").innerHTML = "Close Tab";
		}
		if (SWITCH_TO){
			port.postMessage({
				action : "switch",
				target : arr[4],
				url : ""
			});
			document.getElementById("computerAction").innerHTML = "Switch Current Tab";
		}
		if (CLICK_LINK){
			port.postMessage({
				action : "click link",
				target : arr[3],
				url : ""
			});
			document.getElementById("computerAction").innerHTML = "Click a link";
		}
		if (PREVIOUS){
			port.postMessage({
				action : "back",
				target : "",
				url : ""
			});
			document.getElementById("computerAction").innerHTML = "Navigate Back";
		}
		if (FORWARD){
			port.postMessage({
				action : "forward",
				target : "",
				url : ""
			});
			document.getElementById("computerAction").innerHTML = "Navigate Forward";
		}
		if (REFRESH){
			port.postMessage({
				action : "refresh",
				target : "",
				url : ""
			});
			document.getElementById("computerAction").innerHTML = "Refresh Page";
		}
		if (arr.indexOf("up") == 1){
			port.postMessage({
				action : "scroll up",
				target : "",
				url : ""
			});
			document.getElementById("computerAction").innerHTML = "Scroll";
		}
		if (arr.indexOf("down") == 1){
			port.postMessage({
				action : "scroll down",
				target : "",
				url : ""
			});
			document.getElementById("computerAction").innerHTML = "Scroll";
		}
		if (arr.indexOf("left") == 1){
			port.postMessage({
				action : "scroll left",
				target : "",
				url : ""
			});
			document.getElementById("computerAction").innerHTML = "Scroll";
		}
		if (arr.indexOf("right") == 1){
			port.postMessage({
				action : "scroll right",
				target : "",
				url : ""
			});
			document.getElementById("computerAction").innerHTML = "Scroll";
		}
		if (arr.indexOf("page") == 1){
			if (arr.indexOf("up") == 2){
				port.postMessage({
					action : "page up",
					target : "",
					url : ""
				});
			}
			if (arr.indexOf("down") == 2){
				port.postMessage({
					action : "page down",
					target : "",
					url : ""
				});
			}
			document.getElementById("computerAction").innerHTML = "Scroll";
		}
		if (EXIT_APP){
			window.close();
		}
	}

	window.onfocus = function () {
		recognition.start();
	}
	window.onload = function () {
		recognition.start();
	}
})();
