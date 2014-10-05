function processLinks(){
	var links = document.querySelectorAll("a");
	
	for (var i = 0; i < links.length; i++){
		links[i].innerHTML += "[" + (i + 1) + "]";
	}
}

processLinks();