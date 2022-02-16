//fetching the objects
//const form = document.getElementById('form');
let uname = document.getElementById('name');
let email = document.getElementById('email');
let branch = document.getElementById('branch');
let inst = document.getElementById('inst-name');
let stat = document.getElementById('stat-ut');
let addrs = document.getElementById('address');
let age = document.getElementById('age');
let phn = document.getElementById('phone');
let usr = document.getElementById('uname');
let pass = document.getElementById('password');
let cpass = document.getElementById('cnf-password');
let msg = document.getElementsByTagName('span');

//validation flag
let flag = 0

//retrieve cookies from previous sessions
window.onload = function() {
    if (document.cookie.length != 0) {
        var prev = document.cookie.split(";");
        for (let i = 0; i < prev.length; i++) {
            let temp = prev[i].split("=")
            if (temp[0] == "username" && temp[1] != "") {
                usr.value = temp[1];
            }
            if (temp[0] == "email" && temp[1] != "") {
                usr.value = temp[1];
            }
        }
    }
}

//validate name
uname.onkeypress = function(evt) {
    const rgx1 = /[^a-z.\s]/i;
    const rgx2 = /[a-z.\s]{25}/i;
    var inp = String.fromCharCode(evt.which); //to get the currently pressed char from keyboard
    if (rgx1.test(inp)) {
        msg[0].innerText = "Name CANNOT contain numbers or special characters";
        msg[0].style.color = "tomato";
        flag = 0;
        evt.preventDefault(); //to lock numeric and special char input
    }
    if (rgx2.test(uname.value)) {
        evt.preventDefault();
    }
    if ((evt.keyCode || evt.charCode) === 8) {
        evt.allowDefault();
    }

    //to capitalize first letter
    var namestr = uname.value.toLowerCase().split(" ");
    for (var i = 0; i < namestr.length; i++) {
        namestr[i] = namestr[i].charAt(0).toUpperCase() + namestr[i].substring(1);
    }
    namestr = namestr.join(" ");
    uname.value = namestr;
}


uname.onkeyup = function(evt) {
    const rgx1 = /[a-z.\s]{3,}/i;
    if (uname.value === "") {
        msg[0].innerText = "Name CANNOT remain BLANK";
        msg[0].style.color = "yellow";
        flag = 0;
    } else if (!rgx1.test(uname.value)) {
        msg[0].innerText = "Name must contain ATLEAST 3 characters";
        msg[0].style.color = "tomato";
        flag = 0;
    } else {
        msg[0].innerText = "VALID Name";
        msg[0].style.color = "lime";
        flag = 1;
    }
}

//validate email
email.onkeypress = function(evt) {
    var inp = String.fromCharCode(evt.which); //to get the currently pressed char from keyboard
    const rgx1 = /[^\.\_a-z0-9@]/;
    const rgx2 = /[A-Z]/;
    const rgx3 = /^([0-9]+)$/;
    const rgx4 = /[\.\_a-z0-9@]{35}/;
    const rgx5 = /\.in$/;
    const rgx6 = /\.co\.in$/;
    const rgx7 = /\.com$/;

    if (flag > 0) {
        evt.allowDefault();
        if (rgx4.test(email.value) || rgx5.test(email.value) || rgx6.test(email.value) || rgx7.test(email.value)) { //email cannot be more than 30 chars
            evt.preventDefault(); //to lock the keyboard
        }
        if (rgx2.test(inp)) {
            msg[1].innerText = "Email Address is ALWAYS lowercase";
            msg[1].style.color = "tomato";
            evt.preventDefault(); //to lock the keyboard
        }
        if (rgx1.test(inp)) {
            msg[1].innerText = "Invalid Character entered";
            msg[1].style.color = "tomato";
            evt.preventDefault(); //to lock the keyboard
        }
        if (inp === "@" && rgx3.test(email.value)) {
            msg[1].innerText = "Email Address must NOT contain ONLY numbers";
            msg[1].style.color = "tomato";
            evt.preventDefault(); //to lock the keyboard
        }
        if (inp === "@" && (/[@]/).test(email.value)) {
            msg[1].innerText = "Email Address CANNOT contain '@' more than once";
            msg[1].style.color = "tomato";
            evt.preventDefault(); //to lock the keyboard
        }
        if ((evt.keyCode || evt.charCode) == 8) {
            evt.allowDefault();
        }
    } else {
        msg[1].innerText = "Fill the previous field before filling this field";
        msg[1].style.color = "pink";
        evt.preventDefault();
    }
}


email.onkeyup = function() {
    //const validMail1 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    //const validMail2 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    const rgx1 = /([\.\_a-z0-9]+)@/;
    const rgx2 = /\.in$/;
    const rgx3 = /\.co\.in$/;
    const rgx4 = /\.com$/;
    if (email.value == "") {
        msg[1].innerText = "Email Address CANNOT remain BLANK";
        msg[1].style.color = "yellow";
    } else if (rgx1.test(email.value) && (rgx2.test(email.value) || rgx3.test(email.value) || rgx4.test(email.value))) {
        msg[1].innerText = "VALID Email Address";
        msg[1].style.color = "lime";
        flag = 2;
    } else {
        msg[1].innerText = "INVALID Email Address";
        msg[1].style.color = "tomato";
        flag = 1;
    }
}


//validate institution name
inst.onkeypress = function(evt) {
    const rgx1 = /[^a-z.,\s]/i;
    const rgx2 = /[a-z.,\s]{40}/i;
    var inp = String.fromCharCode(evt.which); //to get the currently pressed char from keyboard

    if (flag > 1) {
        evt.allowDefault();

        if (rgx1.test(inp)) {
            msg[3].innerText = "Institution Name CANNOT contain numbers or special characters";
            msg[3].style.color = "tomato";
            evt.preventDefault(); //to lock numeric and special char input
        }
        if (rgx2.test(inst.value)) {
            evt.preventDefault();
        }
        if ((evt.keyCode || evt.charCode) === 8) {
            evt.allowDefault();
        }
    } else {
        msg[3].innerText = "Fill the previous field before filling this field";
        msg[3].style.color = "pink";
        evt.preventDefault();
    }
}

inst.onkeyup = function(evt) {
    const rgx1 = /[a-z.\s]{10,}/i;
    if (inst.value == "") {
        msg[3].innerText = "Institution Name CANNOT remain BLANK";
        msg[3].style.color = "yellow";
        flag = 2;
    } else if (!rgx1.test(inst.value)) {
        msg[3].innerText = "Institution Name must contain ATLEAST 10 characters";
        msg[3].style.color = "tomato";
        flag = 2;
    } else {
        msg[3].innerText = "VALID Institution  Name";
        msg[3].style.color = "lime";
        flag = 3;
    }
}

//validate address
addrs.onkeypress = function(evt) {
    if (flag > 2) {
        evt.allowDefault();
        if ((evt.keyCode || evt.charCode) === 8) {
            evt.allowDefault();
        }
        if (addrs.value.length + 1 >= 130) {
            evt.preventDefault();
        }

    } else {
        msg[5].innerText = "Fill the previous field before filling this field";
        msg[5].style.color = "pink";
        evt.preventDefault();
    }
}

addrs.onkeyup = function(evt) {
    if (addrs.value === "") {
        msg[5].innerText = "Address CANNOT remain BLANK";
        msg[5].style.color = "yellow";
    }
}

//validate age
age.onkeypress = function(evt) {
    let inp = String.fromCharCode(evt.which);
    const rgx1 = /[0-9]/;
    if (flag > 3) {
        evt.allowDefault();

        if (rgx1.test(inp)) {
            msg[6].innerText = "Age contains ONLY NUMERIC values";
            msg[6].style.color = "tomato";
            evt.preventDefault();
        }
        if ((evt.keyCode || evt.charCode) === 8) {
            evt.allowDefault();
        }
    } else {
        msg[6].innerText = "Fill the previous field before filling this field";
        msg[6].style.color = "pink";
        evt.preventDefault();
    }
}

age.onkeyup = function() {
    const rgx1 = /[0-9]{1,3}$/;
    if (age.value == "") {
        msg[6].innerText = "Age CANNOT remain BLANK";
        msg[6].style.color = "yellow";
        flag = 2;
    }
    if (rgx1.test(age.value)) {
        msg[6].innerText = "Valid Age";
        msg[6].style.color = "lime";
        flag = 4;
        evt.preventDefault();
    }
}

//validate phone number
phn.onkeypress = function(evt) {
    let inp = String.fromCharCode(evt.which);

    const rgx2 = /[^0-9]/;
    const rgx3 = /[0-9\b]{10}/;
    if (flag > 4) {
        if (rgx3.test(phn.value)) {
            msg[7].innerText = "Valid Phone number";
            msg[7].style.color = "lime";
            flag = 6;
            evt.preventDefault();
        } else if (rgx2.test(inp)) {
            msg[7].innerText = "Phone Number can contain numbers ONLY";
            msg[7].style.color = "tomato";
            evt.preventDefault();
        } else {
            msg[7].innerText = "Invalid Phone number";
            msg[7].style.color = "tomato";
            flag = 5;
        }
    } else {
        msg[7].innerText = "Fill the previous field before filling this field";
        msg[7].style.color = "pink";
        evt.preventDefault();
    }
}

phn.onkeyup = function() {
    const rgx1 = /^[0-9]{10}$/;
    if (phn.value === "") {
        msg[7].innerText = "Phone Number CANNOT remain BLANK";
        msg[7].style.color = "yellow";
    }
    if (rgx1.test(phn.value)) {
        msg[7].innerText = "Valid Phone number";
        msg[7].style.color = "lime";
        flag = 6;
    }
}

//validate password
pass.onkeypress = function(evt) {
    if (flag > 6) {
        evt.allowDefault();

    } else {
        msg[9].innerText = "Fill the previous field before filling this field";
        msg[9].style.color = "pink";
        evt.preventDefault();
    }
}

pass.onkeyup = function() {
    const rgx1 = /[a-z]/;
    const rgx2 = /[A-Z]/;
    const rgx3 = /[0-9]/;
    const rgx4 = /[~`!@#\$%\^&*()-_+={}[\]|\;:"<>,.\/\?]{2,}/;
    const rgx5 = /\B[a-z]{4,}/i;
    const rgx6 = /\B[0-9]{2,}/;

    if ((rgx1.test(pass.value) && rgx2.test(pass.value) && rgx3.test(pass.value)) && rgx4.test(pass.value) && (pass.value.length + 1 > 8)) {
        msg[9].innerText = "Strong Password";
        msg[9].style.color = "yellow";
        if (rgx5.test(pass.value) && rgx6.test(pass.value) && (pass.value.length + 1 > 12)) {
            msg[9].innerText = "Hard to guess";
            msg[9].style.color = "lime";
        }
    } else {
        msg[9].innerText = "Weak Password";
        msg[9].style.color = "tomato";
    }
    if (cpass.value === pass.value) {
        msg[10].innerText = "Passwords match";
        msg[10].style.color = "lime";
    } else {
        msg[10].innerText = "Passwords do not match";
        msg[10].style.color = "tomato";
    }
    if (pass.value === "") {
        msg[9].innerText = "Password CANNOT remain BLANK";
        msg[9].style.color = "yellow";
    }
}

//validate confirm password
cpass.onkeyup = function() {
    if (cpass.value === "") {
        msg[10].innerText = "Confirm Password CANNOT remain BLANK"
        msg[10].style.color = "yellow"
    } else if (cpass.value === pass.value) {
        msg[10].innerText = "Passwords match";
        msg[10].style.color = "lime";
    } else {
        msg[10].innerText = "Passwords do not match";
        msg[10].style.color = "tomato";
    }
}

//validate question 1
q1.onclick = function() {}

//validate question 2
q2.onclick = function() {
    for (i = 0; i < 4; i++) {
        if (q2[i].checked === true) {
            msg[7].innerText = q2[i].value;
            msg[7].style.color = "yellow";
            break;
        }
    }
}

//to set cookie
function setcookie(days, hrs, mins) {
    var d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000) + (hrs * 60 * 60 * 1000) + (mins * 60 * 1000));
    var exp = "expires=" + d.toUTCString();
    if (usr.value != "" && email.value != "") {
        document.cookie = "username=" + usr.value + ";" + expires;
        document.cookie = "email=" + email.value + ";" + expires;
    }
}

//to get cookie
function getcookie() {
    if (document.cookie.length != 0) {
        alert(document.cookie);
    } else {
        alert("No cookies from past sessions.");
    }
}

//to clear cookie
function clearcookie() {
    document.cookie = "";
}