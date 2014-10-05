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
	
	function processString(str){
		//Split the string into tokens
		var arr = str.split(" ");
		
		if (arr.indexOf("Simon") != 0){
			return;
		}
		
		//Booleans that check if the string is valid command
		var OPEN_SITE = (arr.indexOf("open") == 1 && arr.length > 2);
		var GO_TO_SITE = (((arr.indexOf("go") == 1 && arr.indexOf("to") == 2)) && arr.length > 2);
		var CLOSE_TAB = (arr.indexOf("close") == 1 && arr.indexOf("tab") == 2);
		var EXIT_APP = ((arr.indexOf("exit") == 1 || arr.indexOf("quit") == 1) && arr.length == 2);
		var PREVIOUS = (arr.indexOf("go") == 1 && arr.indexOf("back") == 2);
		var FORWARD = (arr.indexOf("go") == 1 && arr.indexOf("forward") == 2);
		var REFRESH = (arr.indexOf("refresh") == 1);
		
		if (OPEN_SITE){
			port.postMessage({
				action : "open",
				target : "",
				url : "http://" + arr[arr.indexOf("open")+1]
			});
		}
		if (GO_TO_SITE){
			port.postMessage({
				action : "goto",
				target : "",
				url : "http://" + arr[3]
			});
		}
		if (CLOSE_TAB){
			port.postMessage({
				action : "close",
				target : "",
				url : ""
			});
		}
		if (PREVIOUS){
			port.postMessage({
				action : "back",
				target : "",
				url : ""
			});
		}
		if (FORWARD){
			port.postMessage({
				action : "forward",
				target : "",
				url : ""
			});
		}
		if (REFRESH){
			port.postMessage({
				action : "refresh",
				target : "",
				url : ""
			});
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
