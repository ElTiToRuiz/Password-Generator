const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
const numbers = '0123456789';
const special = "!@#$%^&*()_+-=[]{}|;':\",.<>/?`~";

const text = document.getElementById('text')
const num = document.getElementById('length');
const valueDisplay = document.getElementById('valueDisplay');
const input = document.querySelectorAll('.selects input')
const copy = document.querySelector('.btn')
const spanCopy = document.querySelector('.btn .material-symbols-outlined')

function makeAlphabet(l, n, s){
    let acceptedLetters = alphabet
    if(l){
        acceptedLetters += upper
    }
    if(n){
        acceptedLetters += numbers
    }
    if(s){
        acceptedLetters += special
    }
    return acceptedLetters.split('')
}

function getEnable(){
    let l = document.getElementById('capital').checked
    let n = document.getElementById('numbers').checked
    let s = document.getElementById('s-characters').checked

    return makeAlphabet(l, n, s)
}

function updatePassword(){
    let password = ''
    let length = num.value
    let letters = getEnable()
    let c;
    for(let i =0; i < length; i++){
        c = letters[Math.floor(Math.random()*letters.length)]
        password += c
    }
    text.textContent = password
}

function updateValue() {
    valueDisplay.textContent = num.value;
    num.addEventListener('input', () => {
        valueDisplay.textContent = num.value;
        updatePassword()
    });
}

function change(){
    input.forEach(element => {
        element.addEventListener('click', ()=>{
            updatePassword()
        })
    });
}

function copyPassword(){
    copy.addEventListener('click', ()=>{
        navigator.clipboard.writeText(text.textContent)
        spanCopy.style.color = '#d1ede0';
        document.getElementById('copy-text').style.display = 'block'
        setTimeout(()=>{
            spanCopy.style.color = 'black'
            document.getElementById('copy-text').style.display = 'none'
        }, 1000)
    })
}

updateValue();
change();
copyPassword()

