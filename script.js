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


let loginInfo = [];

// When you click on the sign up button you should be directed to the sign up page
signUp.onclick = ()=>{
    names.textContent = "Create Username";
    number.textContent = "Create Number";
    password.textContent = "Create Password";
    loginButton.innerHTML = "";
    document.querySelector('.sign-section').innerHTML = '';

    loginButton.innerHTML = "<button id='js-signUp' onclick='appendDetails()'>Sign Up</button>"  

    // Handles the sign in...
    // Saves info into local storage
    document.getElementById("js-signUp").onclick = ()=>{
        let signInDetails = {
            name: nameInput.value,
            number: numberInput.value,
            password: passwordInput.value
        };

        const stringIfiedObject = JSON.stringify(signInDetails);
        loginInfo.push(stringIfiedObject);
        const stringIfiedArray = JSON.stringify(loginInfo);

        localStorage.setItem("Detail", stringIfiedArray);

    }
};


login.onclick = ()=>{
    const backToArray = JSON.parse(localStorage.getItem("Detail")); 
    const backToObject = JSON.parse(backToArray);

    if(backToObject.name === nameInput.value && backToObject.number === numberInput.value && backToObject.password === passwordInput.value){
        console.log("Alex" )
    }

    else{
        alert("Please enter the correct details")
    }
}