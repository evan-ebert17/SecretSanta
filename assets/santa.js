var nameEnter = document.getElementById("nameEnter");
var nameAdd = document.getElementById('nameAdd');
var nameSubmit = document.getElementById('nameSubmit');
var nameList = document.getElementById('namesList');

var nameArray = [];

nameAdd.addEventListener('click', function (event) {
    event.preventDefault();
    let inputText = nameEnter.value;
    if (inputText === '') {
        return
    } else {
        nameArray.push(inputText);
        var newName = document.createElement('li');
        newName.textContent = inputText;
        nameList.appendChild(newName);
        console.log(nameArray)
        nameEnter.value = '';
    }
    
})

nameSubmit.addEventListener('click', function () {
    
})