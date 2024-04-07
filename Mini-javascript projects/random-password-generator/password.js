const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "#@$&*{}<>?/^!()~[]";
const allchars = upperCase + lowerCase + number + symbols;

function createPassword()  {
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
   password += number[Math.floor(Math.random()*number.length)];
password += symbols[Math.floor(Math.random()*symbols.length)];

while(length>password.length){
    password += allchars[Math.floor(Math.random()*allchars.length)];
}

passwordBox.value = password;
}

function copyPassword(){
    navigator.clipboard.writeText(passwordBox.value);
   
}
