(function () {
	var recognition = new webkitSpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = true;
	recognition.onresult = function(event) { 
	  console.log(event) 
	}
	recognition.start();
})();
