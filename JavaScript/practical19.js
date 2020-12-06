//Selector
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');

const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const back1 = document.getElementById('back1');
const back2 = document.getElementById('back2');
const submit = document.getElementById('submit');

const progress = document.getElementById('progress');

const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
const facebook = document.getElementById('facebook');

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const mobile = document.getElementById('mobile');

//Event Handler
next1.onclick = function() {
    if (isAccountValid(email, password1, password2)) {
        form1.style.left = "525px";
        form2.style.left = "25px";
        progress.style.width = "300px";
    }
};

next2.onclick = function() {
    if (isAddressValid(linkedin, github, facebook)) {
        form3.style.left = "25px";
        form2.style.left = "-525px";
        progress.style.width = "450px";
    }
};

back1.onclick = function() {
    form1.style.left = "25px";
    form2.style.left = "525px";
    progress.style.width = "150px";
};

back2.onclick = function() {
    form2.style.left = "25px";
    form3.style.left = "-525px";
    progress.style.width = "300px";
};

submit.onclick = function(e) {
    e.preventDefault();
    isDataValid(fname, lname, mobile)
};

//Function
function isAccountValid(email, password1, password2) {
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    let bool = true;

    if (emailValue === "") {
        showError(email, "Field can not be Blank");
        bool = false;
    } else if (!isEmailValid(emailValue)) {
        showError(email, "Email Address is not valid");
        bool = false;
    } else {
        showSuccess(email);
    }

    if (password1Value === "") {
        showError(password1, "Field can not be Blank");
        bool = false;
    } else {
        showSuccess(password1);
    }

    if (password2Value === "") {
        showError(password2, "Field can not be Blank");
        bool = false;
    } else if (password1Value != password2Value) {
        showError(password2, "Passwords do not match");
    } else {
        showSuccess(password2);
    }

    return bool;

}

function isAddressValid(linkedin, github, facebook) {
    const linkedinValue = linkedin.value.trim();
    const githubValue = github.value.trim();
    const facebookValue = facebook.value.trim();

    let bool = true;

    if (linkedinValue === "") {
        showError(linkedin, "Field can not be Blank");
        bool = false;
    } else if (!isEmailValid(linkedinValue)) {
        showError(linkedin, "Email Address is not valid");
        bool = false;
    } else {
        showSuccess(linkedin);
    }

    if (githubValue === "") {
        showError(github, "Field can not be Blank");
        bool = false;
    } else if (!isEmailValid(githubValue)) {
        showError(github, "Email Address is not valid");
        bool = false;
    } else {
        showSuccess(github);
    }

    if (facebookValue === "") {
        showError(facebook, "Field can not be Blank");
        bool = false;
    } else if (!isEmailValid(facebookValue)) {
        showError(facebook, "Email Address is not valid");
        bool = false;
    } else {
        showSuccess(facebook);
    }

    return bool;

}

function isDataValid(fname, lname, mobile) {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const mobileValue = mobile.value.trim();

    let bool = true;

    if (fnameValue === "") {
        showError(fname, "Field can not be Blank");
        bool = false;
    } else {
        showSuccess(fname);
    }

    if (lnameValue === "") {
        showError(lname, "Field can not be Blank");
        bool = false;
    } else {
        showSuccess(lname);
    }

    if (mobileValue === "") {
        showError(mobile, "Field can not be Blank");
        bool = false;
    } else {
        showSuccess(mobile);
    }

    return bool;
}

function showError(input, message) {
    const formControl = input.parentNode;
    formControl.className = "form-container error";
    const small = formControl.querySelector("small")
    small.innerHTML = message

}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = "form-container success";
}

function isEmailValid(email) {
    return /^([A-Za-z0-9\.\-\_]+)@([A-Za-z0-9]+)\.([A-Za-z]{2,3})$/.test(email);
}