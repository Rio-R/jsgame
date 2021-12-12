// Define Dom
let selecT = document.querySelector('#validation_check');

// Event
selecT.addEventListener('change', function(){
    if(selecT.value == 1){
        emailValid();
    }else if(selecT.value == 2){
        passwordValid();
    }else if(selecT.value == 3){
        zipCode();
    }else if(selecT.value == 4){
        phoneValid();
    }
})

// Define Function
// Email 
function emailValid(){
    let inputData = prompt("Enter Email Address");
    let validFormat = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
    if(inputData.match(validFormat)){
        alert("Email Address is valid")
    }else{
        alert("Unvalid")
    }
}

// password
function passwordValid(){
    alert(`Password must contains One(uppercase, lowercase, digit, specialcharacter) & length is 8 and more`)
    let inputData = prompt("Enter Password");
    let validFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    
    if(inputData.match(validFormat)){
        alert("Password is valid")
    }else{
        alert("Unvalid")
    }
}

// Zip Code
function zipCode(){
    let inputData = prompt("Enter Zip Code");
    let validFormat = /^[0-9]{4}$/;
    
    if(inputData.match(validFormat)){

        alert("Zip Code is valid")
    }else{
        alert("Unvalid")
    }
}

// Phone
function phoneValid(){
    let inputData = prompt("Enter Phone Number");
    let validFormat = /^(\+)?(88)?01[0-9]{9}$/;
    if(inputData.match(validFormat)){
        alert("Phone Number is valid")
    }else{
        alert("Unvalid")
    }
}



