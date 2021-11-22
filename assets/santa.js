var nameEnter = document.getElementById("nameEnter");
var nameAdd = document.getElementById('nameAdd');
var nameSubmit = document.getElementById('nameSubmit');
var nameList = document.getElementById('namesList');
var scrambleDiv = document.getElementById('scrambleDiv');

var nameArray = [];
var scramblArray = [];

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
    //after creating names, you then put yours in to prevent duplicate gets
    //then once a name is pulled, it is removed from the hat
    //click next, name gets put back in, but other one stays out
    //go back to step one until there is no more names
    //then the process ends

    //name entry field to check with already prexisting names
    //if name in field = name left in array, remove name temporarily
    //if no names left, but still ... tenative
    nameEnter.style.display = 'none';
    nameAdd.style.display = 'none';
    nameSubmit.style.display = 'none';
    nameList.innerHTML = '';
    
    var creInp = document.createElement('input');
    var creBtn = document.createElement('button');

    creBtn.classList.add('createdNameEnter')
    // creInp.classList.add('')
    creBtn.textContent = "Next"
    creBtn.addEventListener('click', function() {
        for (let i = 0; i < nameArray.length; i++) {
            const currentPos = nameArray[i];
            
        }
    })
    scrambleDiv.appendChild(creInp);
    scrambleDiv.appendChild(creBtn);
})