<!DOCTYPE html>
<html>
<body>
var userInput = //string input from simon
userInput.toLowerCase();

if (userInput.substr(0,5)=="simon"){
	userIput=userInput.substr(6,userInput.length-6);
	while(userInput.length >0){
		//scroll down
		if(userInput="scroll down"){
			scrollTo(0,450);
		}
		//scroll up
		if(userInput="scroll up"){
			scrollTo(0,-450);
		}
		//scroll left
		if(userInput="scroll left"){
			scrollTo(-200,0);
		}
		//scroll right
		if(userInput="scroll right"){
			scrollTo(200,0);
		}
		//page down
		if(userInput="page down"){
			scrollTo(0,650);
		}
		//page up
		if(userInput="page up"){
			scrollTo(0,-650);
		}
		//zoomin ..............................
		////////copied from internet must be changed
		if(userInput=="zoom in"){
			if (window.parent.document.body.style.zoom < maxZoom) {
				if (window.parent.document.body.style.zoom > 0) {
					window.parent.document.body.style.zoom *= zoomFactor; 
				}else { 
					window.parent.document.body.style.zoom = startIncZoom;
				}
			}else {
				if (alertEnabled) {
					alert("Warning: Max size reached");
				}
			}
		//zoomout....................................................
		
		
		
		//click
		
		
		
</body>
</html>