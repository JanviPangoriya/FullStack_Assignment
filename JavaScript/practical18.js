const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
var  msg = document.querySelector("small");

form.addEventListener('submit',function(e){
    e.preventDefault(); // stop data submission to server
    checkInput();
});

function checkInput()
{
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    if(userNameValue === "")
    {
        showError(username,"UserName can not be blank");
    }
    else if (!isUsernameValid(userNameValue)) {
        showError(username, "Username is not valid");
    } else {
        showSuccess(username);
    
        }
    if(emailValue === "")
    {
        showError(email,"Email can not be blank");
    }
    else if(!isEmailValid(emailValue))
    {
        showError(email,"Email not in valid format")
    }
    else{
        showSuccess(email);
    }
    if (password1Value === '') {
        showError(password1, "Password can not be blank");
    } else {
        showSuccess(password1);
    }
    if (password2Value === '') {
        showError(password2, "Re enter your password");
    } else if (password2Value != password1Value) {
        showError(password2, "Passwords does not match");
    } else {
        showSuccess(password2);
    }
}

function showError(input,msg)
{
    const formControl = input.parentNode;
    formControl.className  = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
    console.log(small)
}
function showSuccess(input)
{
    const formControl = input.parentNode;
    formControl.className  = 'form-control success';
}
function isEmailValid(email)
{
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]+){2,3}$/.test(email);
}
function isUsernameValid(username) {
    return /^([a-z0-9]+)$/.test(username);
}