<!DOCTYPE html>
<html>
<body>
var userInput = //string input from simon
userInput.toLowerCase();
var openBTab = ["open tab", "open new tab"];
var openTab = ["open ","go to"];
var closeTab= ["close", "end"];
if (userInput.substr(0,5)=="simon"){
	userIput=userInput.substr(6,userInput.length-6);
	while(userInput.length >0){
		//open blank tab
		for(i=0;i<openBTab.length;i++){
			if(userInput==openBTab[i]){
				window.open(target="_blank");
			}
		}
		//open tab w/ specific url given by user
		for(i=0;i<openTab.length;i++){
			if(userInput.substr(0,5)==openTab[i]){
				arr unserInputArr=userInput.split(" ");
				window.open(href=userInputArr[1] target="_blank");
			}
		}
		//close tab
		for(i=0;i<closeTab.length;i++){
			if(userInput.indexOf(closeTab[i])>=0){
				window.close();
			}
		}
		//refresh tab
		if(userInput=="refresh"){
			window.refresh();
		}
		//previous page
		if(userInput=="previous page"){
			history.back();
		}
		//next page
		if(userInput=="next page"){
			history.forward;
		}
	}
}