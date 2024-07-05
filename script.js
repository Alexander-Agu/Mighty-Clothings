// ----- LOGIN AND SIGN UP PAGE ----- \\
// CONSTANT VARIABLES FOR THE LOGIN AND SIGN IN PAGE
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

// Handles the signIn link to direct user to from the login to sign up page
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

// Handles the login button
login.onclick = ()=>{
    const backToArray = JSON.parse(localStorage.getItem("Detail")); 
    const backToObject = JSON.parse(backToArray);

    // If user enters the correct details he will be directed to the landing page
    if(backToObject.name === nameInput.value && backToObject.number === numberInput.value && backToObject.password === passwordInput.value){
        console.log("Alex" )
    }else{
        alert("Please enter the correct details")
    }
}
