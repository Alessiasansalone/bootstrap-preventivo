// Prova funzionamento
// console.log('bonus')

// ------------------------------ RECUPERO DOM ------------------------------

// Form 
const formElement = document.getElementById('preventive-form')
// console.log(formElement)

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
let jobElement = document.getElementById('input-job');
// Codice sconto
const codeElement = document.getElementById('input-code')
const invalidCodeElement = document.getElementById('invalid-code')

// Prezzo finale 
const finalPriceElement = document.getElementById('final-price')

// Mailestone con bonus

// ------------------------------ OBJECT FOR SELECT OPTIONS ------------------------------

// Creo un array di oggetti con i valori da immettere nella select e le relative proprietà
const jobs = [
    {
        name: 'Scegli un\'opzione...'
    },

    {
        name: 'Sviluppo backend',
        hourlyPrice: 20.5,
        workHours: 10
    },

    {
        name: 'Sviluppo frontend',
        hourlyPrice: 15.3,
        workHours: 10
    },

    {
        name: 'Analisi progettuale',
        hourlyPrice: 33.6,
        workHours: 10
    }
]

// Ciclo l'array di oggetti
jobs.forEach(function (element, i) {

    // ------------------------------ VALUE VARIABLES' OBJECT ------------------------------

    // Nome
    const jobsName = jobs[i].name

    // Prezzi orari singoli
    const backendPrice = jobs[1].hourlyPrice
    const frontendPrice = jobs[2].hourlyPrice
    const analysesPrice = jobs[3].hourlyPrice

    // Ore di lavoro singole
    const backendHours = jobs[1].workHours
    const frontendHours = jobs[2].workHours
    const analysesHours = jobs[3].workHours

    // ------------------------------ RATE CALCULATION ------------------------------

    // Calcolo le tariffe base
    const backendBasicRate = (backendPrice * backendHours).toFixed(2)
    const frontendBasicRate = (frontendPrice * frontendHours).toFixed(2)
    const analysesBasicRate = (analysesPrice * analysesHours).toFixed(2)

    // Per ogni elemento dell'array creo una option, ognuna col suo valore
    jobElement.innerHTML = jobElement.innerHTML + '<option value= "' + i + '">' + jobsName + '</option>'

    // ------------------------------ FORM ------------------------------
    // --------------------------- SEZIONE RICONTROLLATA ---------------------------

    // Ascoltiamo evento del form
    formElement.addEventListener('submit', function (e) {

        // Preveniamo il comportamento di default
        e.preventDefault()

        // ------------------------------ FORM-SELECT ------------------------------
        // --------------------------- SEZIONE RICONTROLLATA ---------------------------

        // Dichiaro e assegno il valore di jobElement ad una variabile
        let currentJob = jobElement.value

        // Ciclo if per gestire le condizioni [Ricontrollato]
        // SE il valore è 0
        if (currentJob === '0') {
            // allora il valore inserito non è valido
            jobElement.classList.add('is-invalid')
            // scrivo il messaggio d'errore in rosso
            finalPriceElement.classList.add('text-danger')
            finalPriceElement.innerHTML = '<b> Ehi, manca qualcosa! Ricontrolla il modulo </b>'
        }
        // ALTRIMENTI SE il valore è 1
        else if (currentJob === '1') {
            // allora il valore inserito è valido
            jobElement.classList.add('is-valid')
            // il prezzo finale sarà la tariffa base
            finalPriceElement.innerHTML = '<div> \u20AC ' + '<b>' + backendBasicRate + '</b> </div>'
        }
        // ALTRIMENTI SE il valore è 2
        else if (currentJob === '2') {
            // allora il valore insrito è valido
            jobElement.classList.add('is-valid')
            // il prezzo finale sarà la tariffa base
            finalPriceElement.innerHTML = '\u20AC ' + '<b>' + frontendBasicRate + '</b>'
        }
        // ALTRIMENTI SE il valore è 3
        else if (currentJob === '3') {
            // allora il valore inserito è valido
            jobElement.classList.add('is-valid')
            // il prezzo finale sarà la tariffa base
            finalPriceElement.innerHTML = '\u20AC ' + '<b>' + analysesBasicRate + '</b>'
        }

        // ------------------------------ DISCOUNT-SELECT ------------------------------
        // --------------------------- SEZIONE RICONTROLLATA ---------------------------

        // Creo un array in cui inserisco i codici sconto disponibili
        const availableCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

        // Dichiaro e assegno a una variabile il valore dell'input
        codeInput = codeElement.value;

        // Dichiaro e assegno il valore zero a una variabile sconto
        let sconto = 0

        // Ciclo if per gestire le condizioni [Ricontrollato]
        // SE il campo è vuoto
        if (codeInput === '') {
            // rimuovo se necessario la classe per inofrmare dell'errore
            codeElement.classList.remove('is-invalid')
        }
        // ALTRIMENTI SE il codice sconto non fa parte della lista dei codici disponibiliil campo è vuoto
        else if (!availableCodes.includes(codeInput)) {
            // aggiungo il codice inserito non è valido
            codeElement.classList.add('is-invalid')
            // scrivo il messaggio d'errore
            invalidCodeElement.innerHTML = 'Codice non valido.'
        }
        // ALTRIMENTI SE il codice è corretto (opzione 1)
        else if (availableCodes.includes(codeInput) && currentJob === '1') {
            // allora il codice inserito è valido
            codeElement.classList.add('is-valid')
            // calcolo lo sconto
            sconto = backendBasicRate * 0.25
            // calcolo la nuova tariffa
            let backendDiscount = (backendBasicRate - sconto).toFixed(2)
            // il prezzo finale sarà scontato del 25% 
            finalPriceElement.innerHTML = '<div>\u20AC ' + '<b>' + backendDiscount + '</b> </div>'
        }
        // ALTRIMENTI SE il codice è corretto (opzione 2)
        else if (availableCodes.includes(codeInput) && currentJob === '2') {
            // allora il codice è valido
            codeElement.classList.add('is-valid')
            // calcolo lo sconto
            sconto = frontendBasicRate * 0.25
            // calcolo la nuova tariffa
            let frontendDiscount = (frontendBasicRate - sconto).toFixed(2)
            // il prezzo finale sarà scontato del 25% 
            finalPriceElement.innerHTML = '\u20AC ' + '<b>' + frontendDiscount + '</b>'
        }
        // ALTRIMENTI SE il codice è corretto (opzione 3)
        else if (availableCodes.includes(codeInput) && currentJob === '3') {
            // allora il codice è valido
            codeElement.classList.add('is-valid')
            // calcolo lo sconto
            sconto = analysesBasicRate * 0.25
            // calcolo la nuova tariffa
            let analysesDiscount = (analysesBasicRate - sconto).toFixed(2)
            // il prezzo finale sarà scontato del 25% 
            finalPriceElement.innerHTML = '\u20AC ' + '<b>' + analysesDiscount + '</b>'
        }

        // --------------------------- CONTROLLO CAMPI VUOTI ---------------------------
        // --------------------------- SEZIONE RICONTROLLATA ---------------------------

        // Nome [Ricontrollato]
        // SE il campo è vuoto
        if (!nameElement.value) {
            // allora il valore inserito non è valido
            nameElement.classList.add('is-invalid')
            // scrivo il messaggio d'errore in rosso
            finalPriceElement.classList.add('text-danger')
            validationNameElement.innerHTML = 'Campo obbligatorio!'
            // Il prezzo finale non verrà calcolato e verrà visualizzato un messaggio d'errore
            finalPriceElement.innerHTML = '<b> Ehi, manca qualcosa! Ricontrolla il modulo </b>'
        }
        // ALTRIMENTI
        else {
            // è corretto
            nameElement.classList.add('is-valid')
        }

        // Cognome [Ricontrollato]
        // SE il campo è vuoto
        if (!lastNameElement.value) {
            // allora il valore inserito non è valido
            lastNameElement.classList.add('is-invalid')
            // scrivo il messaggio d'errore in rosso
            finalPriceElement.classList.add('text-danger')
            validationLastNameElement.innerHTML = 'Campo obbligatorio!'
            // il prezzo finale non verrà calcolato e verrà visualizzato un messaggio d'errore
            finalPriceElement.innerHTML = '<b> Ehi, manca qualcosa! Ricontrolla il modulo </b>'
        }
        // ALTRIMENTI 
        else {
            // è corretto
            lastNameElement.classList.add('is-valid')
        }

        // Email [Ricontollato]
        // SE il campo è vuoto
        if (!emailElement.value) {
            // allora il valore inserito non è valido
            emailElement.classList.add('is-invalid')
            // scrivo il messaggio d'errore in rosso
            finalPriceElement.classList.add('text-danger')
            validationEmailElement.innerHTML = 'Campo obbligatorio!'
            // il prezzo finale non verrà calcolato e verrà visualizzato un messaggio d'errore
            finalPriceElement.innerHTML = '<b> Ehi, manca qualcosa! Ricontrolla il modulo </b>'
        }
        // ALTRIMENTI
        else {
            // è corretto
            emailElement.classList.add('is-valid')
        }
    })
})