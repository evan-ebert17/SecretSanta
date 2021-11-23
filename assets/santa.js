var nameEnter = document.getElementById("nameEnter");
var nameAdd = document.getElementById('nameAdd');
var nameSubmit = document.getElementById('nameSubmit');
var nameList = document.getElementById('namesList');
var pRemove = document.getElementById('pRemove');
var scrambleDiv = document.getElementById('scrambleDiv');
var scrambleDivTitle = document.getElementById('scrambleDivTitle');
var importantDiv = document.getElementById('importantName');

var nameArray = [];
var scramblArray = [];

function capitalizeFirstLetter(string) {
    var sepWord = string.toLowerCase().split(' ');
    for (var i = 0; i < sepWord.length; i++) {
        sepWord[i] = sepWord[i].charAt(0).toUpperCase() + sepWord[i].substring(1);
    }
    return sepWord.join(' ');
    // return string[0].toUpperCase() + string.slice(1);
}

nameAdd.addEventListener('click', function (event) {
    event.preventDefault();
    let inputText = nameEnter.value;
    if (inputText === '') {
        return
    } else {
        var inputFixed = capitalizeFirstLetter(inputText);
        nameArray.push(inputFixed);
        var newName = document.createElement('li');
        newName.textContent = inputFixed;
        nameList.appendChild(newName);
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
    if (nameArray.length == 0 || nameArray.length == 1) {
        return
    } else {
        pRemove.style.display = 'none';
        nameEnter.style.display = 'none';
        nameAdd.style.display = 'none';
        nameSubmit.style.display = 'none';
        nameList.innerHTML = '';

        var creInp = document.createElement('input');
        var creBtn = document.createElement('button');
        var creP = document.createElement('p');

        creInp.classList.add('createdNameEnter');
        creInp.setAttribute('placeholder', 'Michael D (again)')
        creBtn.textContent = "Next"
        creP.textContent = "Now, put in !YOUR! First Name, then the First initial of !YOUR! Last Name."

        scrambleDivTitle.appendChild(creP);
        scrambleDiv.appendChild(creInp);
        scrambleDiv.appendChild(creBtn);

        creBtn.addEventListener('click', function () {
            var inputFixed2 = capitalizeFirstLetter(creInp.value);
            const itemArr = nameArray.indexOf(inputFixed2);
            if (itemArr > -1) {
                scramblArray.push(nameArray[itemArr]);
                console.log(nameArray);
                nameArray.splice(itemArr, 1);
                console.log(nameArray);
                const randomElement = nameArray[Math.floor(Math.random() * nameArray.length)];
                var secretName = document.createElement('h2');
                secretName.textContent = randomElement;
                importantDiv.appendChild(secretName);
                for (let i = 0; i < nameArray.length; i++) {
                    const currentPos = nameArray[i];
                    if(nameArray.includes(secretName.textContent)){
                        console.log('hello')
                        console.log(nameArray);
                        var secretnamePos = nameArray.indexOf(secretName.textContent);
                        console.log(secretnamePos);
                        nameArray.splice(secretnamePos, 1);
                        console.log(nameArray);
                    }
                };
                console.log(nameArray);
                nameArray.push(scramblArray[0]);
                console.log(nameArray);
                scramblArray.splice(0);
                creInp.value = '';
            } else {
                console.log('fucko-boingo');
            }
        })
    }
})