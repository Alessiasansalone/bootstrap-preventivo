// Prova funzionamento
console.log('milestone')

// Recupero form dal DOM
const formElement = document.getElementById('preventive-form')
// console.log(formElement)

// Recupero dal DOM i vari input
const nameElement = document.getElementById('input-name')
const lastNameElement = document.getElementById('input-last-name')
const emailElement = document.getElementById('input-email')
const jobElement = document.getElementById('input-job')
const codeElement = document.getElementById('input-code')

// Recupero dal DOM i div 
const validationNameElement = document.getElementById('required-name')
const validationLastNameElement = document.getElementById('required-last-name')
const validationEmailElement = document.getElementById('required-email')
const finalPriceElement = document.getElementById('final-price')
const invalidCodeElement = document.getElementById('invalid-code')


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

    // SELECT
    // Recuper il valore in input
    const selectedJob = jobElement.value;
    let tariffa1 = (20.50 * 10).toFixed(2)
    let tariffa2 = (15.30 * 10).toFixed(2)
    let tariffa3 = (33.60 * 10).toFixed(2)

    // SE non viene selezionato nessun valore
    if (selectedJob === '') {
        // Allora sarà un errore
        jobElement.classList.add('is-invalid')
    }
    else if (selectedJob === '1') {
        finalPriceElement.innerHTML = '\u20AC ' + '<b>' + tariffa1 + '</b>'
    }
    else if (selectedJob === '2') {
        finalPriceElement.innerHTML = '\u20AC ' + '<b>' + tariffa2 + '</b>'
    }
    else if (selectedJob === '3') {
        finalPriceElement.innerHTML = '\u20AC ' + '<b>' + tariffa3 + '</b>'
    }

    // SCONTI
    // Creo un array in cui inserisco i codici sconto disponibili
    const availableCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

    // Dichiaro e assegno a una variabile il valore dell'input
    codeInput = codeElement.value;

    // Calcolo sconto
    let sconto = 0

    if (!availableCodes.includes(codeInput)) {
        codeElement.classList.add('is-invalid')
        invalidCodeElement.innerHTML = 'Codice non valido.'
    }
    else if (codeInput === '') {
        codeElement.classList.remove('is-invalid')
    }
    else if (availableCodes.includes(codeInput) && selectedJob === '1') {
        codeElement.classList.add('is-valid')
        sconto = tariffa1 * 0.25
        newTariffa1 = (tariffa1 - sconto).toFixed(2)
        finalPriceElement.innerHTML = '\u20AC ' + '<b>' + newTariffa1 + '</b>'
    }
    else if (availableCodes.includes(codeInput) && selectedJob === '2') {
        codeElement.classList.add('is-valid')
        sconto = tariffa2 * 0.25
        newTariffa2 = (tariffa2 - sconto).toFixed(2)
        finalPriceElement.innerHTML = '\u20AC ' + '<b>' + newTariffa2 + '</b>'
    }
    else if (availableCodes.includes(codeInput) && selectedJob === '3') {
        codeElement.classList.add('is-valid')
        sconto = tariffa3 * 0.25
        newTariffa3 = (tariffa3 - sconto).toFixed(2)
        finalPriceElement.innerHTML = '\u20AC ' + '<b>' + newTariffa3 + '</b>'
    }
})