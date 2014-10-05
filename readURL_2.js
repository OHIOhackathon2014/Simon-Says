<!DOCTYPE html>
<html>
<body>
var userInput = //string input from simon
userInput.toLowerCase();
var openTab = ["open ","go to"];
var closeTab= ["close", "end"];

while(userInput.length >0){
	for(i=0;i<openTab.length;i++){
		if(userInput.substr(0,5)==openTab[i]){
			arr unserInputArr=userInput.split(" ");
			window.open(href=userInputArr[1] target="_blank")
		}
	}
	for(i=0;i<closeTab.length;i++){
		if(userInput.indexOf(closeTab[i])>=0){
			window.close();
		}
	}
}