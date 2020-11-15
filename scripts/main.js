

document.querySelector('html').onclick = function() {
	alert (' Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/setting-icon.png'){
	   myImage.setAttribute ('src','images/food.jpg');
} else {
	   myImage.setAttribute ('src', 'images/setting-icon.png');
           }
}


var myButton = document. querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = ' Mozilla is cool, ' + myName;
}


if(!localStorage.getItem('name')){
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}	

myButton.onclick = function(){
	setUserName();
}




