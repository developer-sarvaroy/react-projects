function generate(){

const length =
document.getElementById("length").value

const chars =
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"

let password = ""

for(let i=0;i<length;i++){

const random =
Math.floor(Math.random()*chars.length)

password += chars[random]

}

document.getElementById("password").innerText = password

}