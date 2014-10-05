chrome.runtime.onConnectExternal.addListener(function (port) {
	port.onMessage.addListener(function (msg) {
		processString(msg.action, msg.target, msg.url);
	});
});

function processString(action, target, url) {
	if (action == "open"){
		chrome.tabs.create({url: url});
	}
	else if (action == "goto"){
		var code = "window.location.href = \"" + url + "\";";
		chrome.tabs.query({'active': true}, function (tab){
			chrome.tabs.executeScript(tab[0].id, {code: code});
		});
	}
	else if (action == "close"){
		if (target != ""){
			chrome.tabs.query({'index': parseInt(target,10)-1}, function (tab){
				chrome.tabs.remove(tab[0].id);
			});
		}
		else{
			chrome.tabs.query({'active': true}, function (tab){
				chrome.tabs.remove(tab[0].id);
			});
		}
	}
	else if (action == "switch" && target != ""){
		chrome.tabs.query({'index': parseInt(target,10)-1}, function (tab){
			chrome.tabs.update(tab[0].id, {active : true});
		});
	}
	else if (action == "click link" && target != ""){
		var code = "document.querySelectorAll(\"a\")[" + (parseInt(target,10)-1) + "].click();";		
		chrome.tabs.query({'active': true}, function (tab){
			chrome.tabs.executeScript(tab[0].id, {code: code});
		});
	}
	else if (action == "back"){
		var code = "window.history.back();";
		chrome.tabs.query({'active': true}, function (tab){
			chrome.tabs.executeScript(tab[0].id, {code: code});
		});
	}
	else if (action == "forward"){
		var code = "window.history.forward();";
		chrome.tabs.query({'active': true}, function (tab){
			chrome.tabs.executeScript(tab[0].id, {code: code});
		});
	}
	else if (action == "refresh"){
		chrome.tabs.query({'active': true}, function (tab){
			chrome.tabs.reload(tab[0].id);
		});
	}
	else if (action == "scroll up"){
		var code = "window.scrollBy(0,-300);";
		chrome.tabs.query({'active': true}, function (tab){
			chrome.tabs.executeScript(tab[0].id, {code: code});
		});
	}
	else if (action == "scroll down"){
		var code = "window.scrollBy(0, 300);";
		chrome.tabs.query({'active': true}, function (tab){
			chrome.tabs.executeScript(tab[0].id, {code: code});
		});
	}
	else if (action == "scroll right"){
		var code = "window.scrollBy(300, 0);";
		chrome.tabs.query({'active': true}, function (tab){
			chrome.tabs.executeScript(tab[0].id, {code: code});
		});
	}
	else if (action == "scroll left"){
		var code = "window.scrollBy(-300, 0);";
		chrome.tabs.query({'active': true}, function (tab){
			chrome.tabs.executeScript(tab[0].id, {code: code});
		});
	}
	else if (action == "page up"){
		var code = "window.scrollBy(0, -window.innerHeight);";
		chrome.tabs.query({'active': true}, function (tab){
			chrome.tabs.executeScript(tab[0].id, {code: code});
		});
	}
	else if (action == "page down"){
		var code = "window.scrollBy(0, window.innerHeight);";
		chrome.tabs.query({'active': true}, function (tab){
			chrome.tabs.executeScript(tab[0].id, {code: code});
		});
	}
}
