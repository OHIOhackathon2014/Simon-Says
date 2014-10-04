var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.onstart = function (event) {
	document.getElementById("voiceInput").innerHTML = "Recognition Started";
}
recognition.onresult = function (event) {
	var transcript = "";
	
	for (var i = event.resultIndex; i < event.results.length; i++) {
		transcript += event.results[i][0].transcript;
	}
	
	document.getElementById("voiceInput").innerHTML = transcript;
	if (document.getElementById("voiceInput").innerHTML.indexOf("close") > -1){	
		window.close();
	}
	if (document.getElementById("voiceInput").innerHTML.indexOf("open") > -1){	
		window.open("http://google.com");
	}
}

window.onfocus = function(){
	recognition.start();
}
