var nameInput = document.getElementById('nameEnter');
var nameAdd = document.getElementById('nameAdd');
var nameSubmit = document.getElementById('nameSubmit');
var nameList = document.getElementById('namesList');

var inputText = nameInput;

var nameArray = [];

nameSubmit.addEventListener('click', function() {
    console.log('hello' + `${inputText}`);
})