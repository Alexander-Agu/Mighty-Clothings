// ----- LOGIN AND SIGN UP PAGE -----
//...When a user signs up their info will be saved so they could login later

// CONSTANT VARIABLES
const loginButton = document.querySelector(".login-button");
const signUp = document.getElementById("js-sign");
const login = document.getElementById("js-login");
const names = document.querySelector(".js-nameH2");
const number = document.querySelector(".js-numberH2");
const password = document.querySelector(".js-passwordH2");
const nameInput = document.getElementById("js-name");
const numberInput = document.getElementById("js-number");
const passwordInput = document.getElementById("js-password");
const jsLoginBTN = document.getElementById("js-login");

// When you click on the sign up button you should be directed to the sign up page
let signClick = false
signUp.onclick = ()=>{
    signClick = true
    names.textContent = "Create Username";
    number.textContent = "Create Number";
    password.textContent = "Create Password"
    loginButton.innerHTML = ""

    let button = document.createElement("button");
    button.id = "js-login"
    button.textContent = 'Sign Up'
    loginButton.append(button)
}

jsLoginBTN.onclick = ()=>{
    if(signUp.onclick === true){}
}