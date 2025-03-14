

const passwordBox = document.getElementById('password')
document.getElementById('btn').addEventListener('click',createPassword)
document.getElementById('copyIcon').addEventListener('click',copyPass)

let pass_length = 12

const alphabate_In_Capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alphabate_In_Lower = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const special_Charas = '@#!$%^&*()_-=+{}[]|~`?'

let allCharas = alphabate_In_Capital + alphabate_In_Lower + number + special_Charas

function createPassword(){

    let password = ''

    password += alphabate_In_Capital[Math.floor(Math.random() * alphabate_In_Capital.length )]
    password += alphabate_In_Lower[Math.floor(Math.random() * alphabate_In_Lower.length )]
    password += number[Math.floor(Math.random() * number.length )]
    password += special_Charas[Math.floor(Math.random() * special_Charas.length )]

    while(pass_length > password.length){
        password += allCharas[Math.floor(Math.random() * allCharas.length )]   
    }
    passwordBox.value = password
}

function copyPass() {
    passwordBox.select()
    document.execCommand('copy')
}

