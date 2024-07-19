// Prova funzionamento
console.log('milestone')

// Recupero form dal DOM
const formElement = document.getElementById('preventive-form')
// console.log(formElement)

// Recupero dal DOM i vari input
const nameElement = document.getElementById('input-name')
const lastNameElement = document.getElementById('input-last-name')
const emailElement = document.getElementById('input-email')

// Recupero dal DOM i div 
const validationNameElement = document.getElementById('required-name')
const validationLastNameElement = document.getElementById('required-last-name')
const validationEmailElement = document.getElementById('required-email')

// aggiungiamo evento al form
formElement.addEventListener('submit', function (e) {

    // preveniamo il comportamento di default
    e.preventDefault()
    // console.log('submit', e)

    // CONTROLLO CAMPI VUOTI

    // NOME 
    // SE il campo è vuoto
    if (!nameElement.value) {
        // allora il valore inserito non è valido e scrivo il messaggio d'errore
        nameElement.classList.add('is-invalid')
        validationNameElement.innerHTML = 'Campo obbligatorio!'
    }
    else {
        nameElement.classList.add('is-valid')
    }

    // COGNOME
    // SE il campo è vuoto
    if (!lastNameElement.value) {
        // allora il valore inserito non è valido e scrivo il messaggio d'errore
        lastNameElement.classList.add('is-invalid')
        validationLastNameElement.innerHTML = 'Campo obbligatorio!'
    }
    else {
        lastNameElement.classList.add('is-valid')
    }

    // EMAIL
    // SE il campo è vuoto
    if (!emailElement.value) {
        // allora il valore inserito non è valido e scrivo il messaggio d'errore
        emailElement.classList.add('is-invalid')
        validationEmailElement.innerHTML = 'Campo obbligatorio!'
    }
    else {
        emailElement.classList.add('is-valid')
    }

})



/* // recupero il valore della email indicata nel form
const emailElement = document.getElementById('inputEmail');
console.log(emailElement)

function validazioneEmail(emailElement) {

    if (emailElement.value === '') {
        console.log('il valore inserito non è valido')
    }
}
    */