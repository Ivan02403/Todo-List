//Create X
let myNodeList = document.getElementsByTagName("LI");

let i;

for( i = 0; i < myNodeList.length; i++){
	let span = document.createElement("SPAN");
	let text = document.createTextNode("x");

	span.className = "close";

	span.appendChild(text);
	myNodeList[i].appendChild(span);
}

//close or hide the task

let close = document.getElementsByClassName("close");
let j; 
for(j = 0; j < close.length; j++){
	close[j].onclick = function(){
		let div = this.parentElement;
		div.style.display = "none"
	} 
}

