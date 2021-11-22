var nameInput = document.getElementById('nameEnter');
var nameButton = document.getElementById('nameSubmit');
var nameList = document.getElementById('namesList');

var inputText = nameInput;



var nameArray = [];

nameButton.addEventListener('click', function() {
    console.log('hello' + `${inputText}`);
})