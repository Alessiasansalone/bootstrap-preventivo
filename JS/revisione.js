// Prova funzionamento
// console.log('bonus')

// Recupero dal DOM

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

// Button
const buttonElement = document.getElementById('button')

// Prezzo finale 
const finalPriceElement = document.getElementById('final-price')

// Mailestone con bonus

// OGGETTO

// Creo un array di oggetti con i valori da immettere nella select e le relative proprietà
const jobs = [
    {
        value: 0,
        name: 'Scegli un\'opzione...'
    },

    {
        value: 1,
        name: 'Sviluppo backend',
    },

    {
        value: 2,
        name: 'Sviluppo frontend',
    },

    {
        value: 3,
        name: 'Analisi progettuale',
    }
]
// console.log(jobs)


// Ciclo l'array di oggetti
jobs.forEach(function (element, i) {

    // Name
    const jobsName = jobs[i].name
    // console.log(jobsName)
    // Value
    const jobsValue = jobs[i].value
    // console.log(jobsValue)

    // Per ogni elemento dell'array creo una option, ognuna col suo valore
    jobElement.innerHTML = jobElement.innerHTML + '<option>' + jobsName + '</option>'

    // FORM
    // Ascoltiamo evento del form
    formElement.addEventListener('submit', function (e) {

        // Preveniamo il comportamento di default
        e.preventDefault()

        // SELECT
        // Dichiaro e assegno il valore di jobElement ad una variabile
        let currentJob = jobElement.value
        // console.log(currentJob)

        // Dichiaro e assegno alle variabili tariffe il valore corrispondente
        let tariffa1 = (20.50 * 10).toFixed(2)
        let tariffa2 = (15.30 * 10).toFixed(2)
        let tariffa3 = (33.60 * 10).toFixed(2)

        // SE il valore è 0
        if (jobsValue === '0') {
            // Allora il campo sarà vuoto [ERRORE]
            jobElement.classList.add('is-invalid')
            finalPriceElement.classList.add('text-danger')
            finalPriceElement.innerHTML = '<b> Ehi, manca qualcosa! Ricontrolla il modulo </b>'
        }
        // ALTRIMENTI SE il valore è 1
        else if (jobsValue === 1) {
            jobElement.classList.remove('is-invalid')
            finalPriceElement.classList.remove('text-danger')
            // Il prezzo finale sarà la tariffa senza sconti
            finalPriceElement.innerHTML = '<div> \u20AC ' + '<b>' + tariffa1 + '</b> </div>'
        }
        // ALTRIMENTI SE il valore è 2
        else if (jobsValue === 2) {
            jobElement.classList.remove('is-invalid')
            finalPriceElement.classList.remove('text-danger')
            // Il prezzo finale sarà la tariffa senza sconti
            finalPriceElement.innerHTML = '\u20AC ' + '<b>' + tariffa2 + '</b>'
        }
        // ALTRIMENTI SE il valore è 3
        else if (jobsValue === 3) {
            jobElement.classList.remove('is-invalid')
            finalPriceElement.classList.remove('text-danger')
            // Il prezzo finale sarà la tariffa senza sconti
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
        else if (availableCodes.includes(codeInput) && jobsValue === 1) {
            codeElement.classList.remove('is-invalid')
            finalPriceElement.classList.remove('text-danger')
            // Allora il codice è valido
            codeElement.classList.add('is-valid')
            // Calcolo lo sconto
            sconto = tariffa1 * 0.25
            // Calcolo la nuova tariffa
            let newTariffa1 = (tariffa1 - sconto).toFixed(2)
            // Stampo in pagina la nuova tariffa
            finalPriceElement.innerHTML = '\u20AC ' + '<b>' + newTariffa1 + '</b>'
        }
        // ALTRIMENTI SE il codice è corretto (opzione 2)
        else if (availableCodes.includes(codeInput) && jobsValue === 2) {
            // Allora il codice è valido
            codeElement.classList.add('is-valid')
            // Calcolo lo sconto
            sconto = tariffa2 * 0.25
            // Calcolo la nuova tariffa
            let newTariffa2 = (tariffa2 - sconto).toFixed(2)
            // Stampo in pagina la nuova tariffa
            finalPriceElement.innerHTML = '\u20AC ' + '<b>' + newTariffa2 + '</b>'
        }
        // ALTRIMENTI SE il codice è corretto (opzione 3)
        else if (availableCodes.includes(codeInput) && jobsValue === 3) {
            // Allora il codice è valido
            codeElement.classList.add('is-valid')
            // Calcolo lo sconto
            sconto = tariffa3 * 0.25
            // Calcolo la nuova tariffa
            let newTariffa3 = (tariffa3 - sconto).toFixed(2)
            // Stampo in pagina la nuova tariffa
            finalPriceElement.innerHTML = '\u20AC ' + '<b>' + newTariffa3 + '</b>'
        }

        // CONTROLLO CAMPI VUOTI

        // NOME 
        // SE il campo è vuoto
        if (!nameElement.value) {
            // allora il valore inserito non è valido e scrivo il messaggio d'errore
            nameElement.classList.add('is-invalid')
            finalPriceElement.classList.add('text-danger')
            validationNameElement.innerHTML = 'Campo obbligatorio!'
            // Il prezzo finale non verrà calcolato e verrà visualizzato un messaggio d'errore
            finalPriceElement.innerHTML = '<b> Ehi, manca qualcosa! Ricontrolla il modulo </b>'
        }
        else {
            nameElement.classList.add('is-valid')
        }

        // COGNOME
        // SE il campo è vuoto
        if (!lastNameElement.value) {
            // allora il valore inserito non è valido e scrivo il messaggio d'errore
            lastNameElement.classList.add('is-invalid')
            finalPriceElement.classList.add('text-danger')
            validationLastNameElement.innerHTML = 'Campo obbligatorio!'
            // Il prezzo finale non verrà calcolato e verrà visualizzato un messaggio d'errore
            finalPriceElement.innerHTML = '<b> Ehi, manca qualcosa! Ricontrolla il modulo </b>'
        }
        else {
            lastNameElement.classList.add('is-valid')
        }

        // EMAIL
        // SE il campo è vuoto
        if (!emailElement.value) {
            // allora il valore inserito non è valido e scrivo il messaggio d'errore
            emailElement.classList.add('is-invalid')
            finalPriceElement.classList.add('text-danger')
            validationEmailElement.innerHTML = 'Campo obbligatorio!'
            // Il prezzo finale non verrà calcolato e verrà visualizzato un messaggio d'errore
            finalPriceElement.innerHTML = '<b> Ehi, manca qualcosa! Ricontrolla il modulo </b>'
        }
        else {
            emailElement.classList.add('is-valid')
        }
    })
    // console.log(jobs)
})