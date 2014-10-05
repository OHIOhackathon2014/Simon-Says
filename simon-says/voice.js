(function () {
	//Extension communication
	var childExtensionID = "ockkmhhdkmpecgpohbgmnoepflkdahln";
	
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
		
		//Booleans that check if the string is valid command
		var OPEN_SITE = (arr.indexOf("open") == 0 && arr.length != 1);
		var GO_TO_SITE = false;
		var EXIT_APP = ((arr.indexOf("exit") == 0 || arr.indexOf("quit") == 0) && arr.length == 1);
		
		if (OPEN_SITE){
			port.postMessage({
				action : "open",
				target : "",
				url : "http://" + arr[arr.indexOf("open")+1]
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
