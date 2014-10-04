(function () {
	//Speech recognition
	var recognition = new webkitSpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = true;
	recognition.onstart = function (event) {
		document.getElementById("voiceInput").innerHTML = "Recognition Started";
	}

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

	recognition.onresult = function (event) {
		var transcript = "";

		for (var i = event.resultIndex; i < event.results.length; i++) {
			transcript += event.results[i][0].transcript;
		}

		document.getElementById("voiceInput").innerHTML = transcript;

		if (transcript.indexOf("open") > -1) {
			port.postMessage({
				action : "open",
				target : "",
				url : "http://google.com"
			});
		}

	}

	window.onfocus = function () {
		recognition.start();
	}
})();
