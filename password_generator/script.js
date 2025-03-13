

const passwordBox = document.getElementById('password')

let length = 12

const alphabateInCapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alphabateInLower = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const specialChars = '@#!$%^&*()_-=+{}[]|~`?'

let allCharas = alphabateInCapital + alphabateInLower + number + specialChars

function createPassword(){
    let password = ''

    password += alphabateInCapital[Math.floor(Math.random() * alphabateInCapital.length)]
    password += alphabateInLower[Math.floor(Math.random() * alphabateInLower.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += specialChars[Math.floor(Math.random() * specialChars.length)]
    
    while(length > password.length){
        password += allCharas[Math.floor(Math.random() * allCharas.length)]  
    }
    passwordBox.value = password
}

function copyPassword(){
    passwordBox.select()
    document.execCommand('copy')
    
}

