<!DOCTYPE html>
<html>
<body>
var userInput = //string input from simon
userInput.toLowerCase();
var openTab = ["open ","go to"];
var closeTab= ["close", "end"];

while(userInput.length > 0){

	for(i=0;i<openTab.length;i++){
		if(userInput.indexOf(openTab[i])>=0){
			var whichOpenT=i;
			arr unserInputArr=userInput.split(" ");
			for(i=0; i<userInputArr.length;i++){
				if(userInputArr[i]==openTab[whichOpenT]){
					window.open(href=userInputArr[whichOpenT+1] target="_blank")
				}
			}
		}
	}	
	for(i=0;i<closeTab.length;i++){
		if(userInput.indexOf(closeTab[i])>=0){
			window.close();
		}
	}
	userInput = //string input from simon
}
</html>
</body>