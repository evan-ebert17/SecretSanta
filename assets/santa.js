var nameEnter = document.getElementById("nameEnter");
// var txtField = document.querySelector('#hello');

var nameAdd = document.getElementById('nameAdd');
var nameSubmit = document.getElementById('nameSubmit');
var nameList = document.getElementById('namesList');

var inputText = nameEnter.nodeValue

var nameArray = [];

nameAdd.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(inputText);
    // nameArray.push(inputText);
    // console.log(nameArray);
    // if (inputText.value == '') {
    //     return
    // } else {
    //     var newName = document.createElement('li');
    //     newName.textContent = inputText;
    // }
})

nameSubmit.addEventListener('click', function () {
    console.log('hello' + `${inputText}`);
})