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
}

function hideSecret() {
    setTimeout( function() { importantDiv.innerHTML = '' }, 5000);
}

function secretSanta() {
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
            if (nameArray.includes(inputFixed2) && itemArr > -1) {
                scramblArray.push(nameArray[itemArr]);
                nameArray.splice(itemArr, 1);
                const randomElement = nameArray[Math.floor(Math.random() * nameArray.length)];
                var secretName = document.createElement('h2');
                secretName.textContent = randomElement;
                importantDiv.appendChild(secretName);
                for (let i = 0; i < nameArray.length; i++) {
                    if(nameArray.includes(secretName.textContent)){
                        var secretnamePos = nameArray.indexOf(secretName.textContent);
                        nameArray.splice(secretnamePos, 1);
                    }
                };
                nameArray.push(scramblArray[0]);
                scramblArray.splice(0);
                creInp.value = '';
                hideSecret();
            } else {
                const randomElement = nameArray[Math.floor(Math.random() * nameArray.length)];
                var secretName = document.createElement('h2');
                secretName.textContent = randomElement;
                importantDiv.appendChild(secretName);
                for (let i = 0; i < nameArray.length; i++) {
                    if(nameArray.includes(secretName.textContent)){
                        var secretnamePos = nameArray.indexOf(secretName.textContent);
                        nameArray.splice(secretnamePos, 1);
                    }
                };
                creInp.value = '';
                hideSecret();
            }
        })
    }
};

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
    secretSanta();
})