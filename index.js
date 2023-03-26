let username = document.getElementById('username');
let password = document.getElementById('password');
let falg = 1;

function formValidation() {
    if (username.value == "") {
        document.getElementById('usererror').innerHTML = 'User Name empty';
        flag = 0;
    } else if (username.value.length < 3) {
        document.getElementById('usererror').innerHTML = 'Username minimum 3 char';
        flag = 0;
    }
    else {
        document.getElementById('usererror').innerHTML = "";
        flag = 1;
    }

    if (password.value == "") {
        document.getElementById('passerror').innerHTML = 'password required';
        flag = 0;
    }
     else if(password.value.length < 6){
        document.getElementById('passerror').innerHTML = 'password must have 6 char';
        flag = 0;
    }
    else {
        document.getElementById('passerror').innerHTML = "";
        flag = 1;
    }

        if (flag) {
        return true;
    }
    else {
        return false;
    }
}