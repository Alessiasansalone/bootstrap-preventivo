// Prova funzionamento
console.log('milestone')

// Recupero form dal DOM
const formElement = document.getElementById('preventive-form')
// console.log(formElement)

// Recupero dal DOM
// Nome
const nameElement = document.getElementById('input-name')
const validationNameElement = document.getElementById('required-name')

// Cognome
const lastNameElement = document.getElementById('input-last-name')
const validationLastNameElement = document.getElementById('required-last-name')

// Email
const emailElement = document.getElementById('input-email')
const validationEmailElement = document.getElementById('required-email')

// Select 
const jobElement = document.getElementById('input-job')
// Codice sconto
const codeElement = document.getElementById('input-code')
const invalidCodeElement = document.getElementById('invalid-code')

// Prezzo finale 
const finalPriceElement = document.getElementById('final-price')


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

    // Dichiaro e assegno il valore zero a una variabile sconto
    let sconto = 0

    // SE il campo è vuoto
    if (codeInput === '') {
        // Rimuovo se necessario la classe per inofrmare dell'errore
        codeElement.classList.remove('is-invalid')
    }
    // ALTRIMENTI SE il codice sconto non fa parte della lista dei codici disponibiliil campo è vuoto
    else if (!availableCodes.includes(codeInput)) {
        // Aggiungo la classe is-invalid e informo l'utente dell'errore
        codeElement.classList.add('is-invalid')
        invalidCodeElement.innerHTML = 'Codice non valido.'
    }
    // ALTRIMENTI SE il codice è corretto (opzione 1)
    else if (availableCodes.includes(codeInput) && selectedJob === '1') {
        codeElement.classList.add('is-valid')
        sconto = tariffa1 * 0.25
        newTariffa1 = (tariffa1 - sconto).toFixed(2)
        finalPriceElement.innerHTML = '\u20AC ' + '<b>' + newTariffa1 + '</b>'
    }
    // ALTRIMENTI SE il codice è corretto (opzione 2)
    else if (availableCodes.includes(codeInput) && selectedJob === '2') {
        codeElement.classList.add('is-valid')
        sconto = tariffa2 * 0.25
        newTariffa2 = (tariffa2 - sconto).toFixed(2)
        finalPriceElement.innerHTML = '\u20AC ' + '<b>' + newTariffa2 + '</b>'
    }
    // ALTRIMENTI SE il codice è corretto (opzione 3)
    else if (availableCodes.includes(codeInput) && selectedJob === '3') {
        codeElement.classList.add('is-valid')
        sconto = tariffa3 * 0.25
        newTariffa3 = (tariffa3 - sconto).toFixed(2)
        finalPriceElement.innerHTML = '\u20AC ' + '<b>' + newTariffa3 + '</b>'
    }
})