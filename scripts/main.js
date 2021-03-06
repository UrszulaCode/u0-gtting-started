var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/writer.png') {
      myImage.setAttribute ('src','images/writer-working.png');
    } else {
      myImage.setAttribute ('src','images/writer.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Be nice to ' + myName;
}

var NameItem = localStorage.getItem('name');

if(!NameItem) {
  setUserName();
} else {
  var storedName = NameItem;
  myHeading.textContent = 'Be nice to ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}