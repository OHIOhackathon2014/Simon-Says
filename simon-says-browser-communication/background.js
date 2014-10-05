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
		chrome.tabs.query({'active': true}, function (tab){
			chrome.tabs.remove(tab[0].id);
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
}
