function showOther (checkbox, input, other = "") {
    let _checkbox = document.getElementById(checkbox);
    let _input = document.getElementById(input);

    if (_checkbox.checked === true) {
        _input.style.display = "block";
        if(other != "") {
            let _other = document.getElementById(other);
            _other.style.display = "none";
        }

    } 
    else {
        _input.style.display = "none";
    }
}

var selectedNation = document.getElementById('krajiny');
var clubCollection = document.getElementsByClassName('klub');
var arrClubs = Array.from(clubCollection);

selectedNation.onchange = function() {
    arrClubs.forEach(function(element){ element.style.display = "none"; });
    document.getElementById(this.value).style.display = "block";
}


var club = document.getElementsByClassName('klub');
var playerCollection = document.getElementsByClassName('hraci');
var arrPlayers = Array.from(playerCollection);

for (let i = 0; i<3; i++) {
    club[i].onchange = function() {
        arrPlayers.forEach(function(element){ element.style.display = "none"; });
        document.getElementById(this.value).style.display = "block";
    }
}


// Validation
function validateNotEmpty (text, id) {
    let element = document.getElementById(id).nextSibling.nextSibling;

    if(text == ""){
        element.className -= " closed";
    }
    else {
        element.className += " closed";
    }
}

function validateDate (value, id) {
    let element = document.getElementById(id).nextSibling.nextSibling;

    value = new Date(value);
    today = new Date();

    if(value >= today) {
        element.className -= " closed";
    }
    else {
        element.className += " closed";
    }

    if(document.getElementById('vek').value != "") {
        validateAge(document.getElementById('vek').value, document.getElementById('vek').id, value)
    }
}

function validateAge (value, id, date) {
    if (document.getElementById('datumNarodenia').value == "" ){
        return;
    }

    let element = document.getElementById(id).nextSibling.nextSibling;

    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }

    if(value == "") {
        element.className += " closed";
        return;
    }

    if (age != value) {
        element.className -= " closed";
    }
    else {
        element.className += " closed";
    }
}
 
function validateEmail (value, id) {
    let element = document.getElementById(id).nextSibling.nextSibling;

    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (value.match(regex)) {
        element.className += " closed";
    }
    else {
        element.className -= " closed";
    }
}

//submit
function submitForm() {

    let htmlCollection = document.getElementsByClassName('closed');
    console.log(htmlCollection.length);
    if(htmlCollection.length != 18){
        return;
    }

    document.getElementById('form').submit();
}

