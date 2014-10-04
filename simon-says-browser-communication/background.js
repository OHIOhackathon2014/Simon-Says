chrome.runtime.onConnectExternal.addListener(function (port) {
	port.onMessage.addListener(function (msg) {
		processString(msg.action, msg.target, msg.url);
	});
});

function processString(action, target, url) {
	if (action == "open"){
		chrome.tabs.create({url: url});
	}
}
