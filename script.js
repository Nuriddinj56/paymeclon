'use strict'

// Data
// 1- account

const account1 = {
    password: "1111",
    cardNumber: 86001402345678,
    owner: {
        fristName: "Nuriddin",
        lastName: "Jo'rayev"
    },
    curreny: "USD",
    locale: "en-EN",
    tranfers: [
        {
            amount: 200,
            datal: "2019-12-18T21:31:17.1782",
        },
        {
            amount: 500,
            datal: "2019-11-23T21:31:17.1782",
        },
        {
            amount: 1100,
            datal: "2019-12-18T09:31:17.1782",
        },
        {
            amount: 1500,
            datal: "2019-11-18T21:19:17.1782",
        },
        {
            amount: -1100,
            datal: "2019-12-18T06:31:17.3882",
        }
    ]
}

// 2-account

const account2 = {
    password: "2222",
    cardNumber: 86001401965193,
    owner: {
        fristName: "Farrux",
        lastName: "Jo'rayev"
    },
    curreny: "USD",
    locale: "en-EN",
    tranfers: [
        {
            amount: 5000,
            datal: "2019-12-18T21:31:17.1782",
        },
        {
            amount: -500,
            datal: "2019-11-23T21:31:17.1782",
        },
        {
            amount: 1300,
            datal: "2019-12-18T09:31:17.1782",
        },
        {
            amount: 2000,
            datal: "2019-11-18T21:19:17.1782",
        },
        {
            amount: -2200,
            datal: "2019-12-18T06:31:17.3882",
        }
    ]
}
const accounts = [account1, account2]

// Elemment
const inputLogin = document.querySelector('.login_input')
const inputPassword = document.querySelector('.password_input')
const btnLogin = document.querySelector('.enter')


// Functions
const createLogin = () => {
    accounts.forEach(acc => {
        acc.username = acc.owner.fristName[0].toLowerCase() + acc.owner.lastName[0].toLowerCase()
    })

}
createLogin()

// Login


btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    const candidate = accounts.find(acc => acc.username === inputLogin.value)
    if (!candidate) return console.log('login xato');
    if (candidate.password !== inputPassword.value) return
    console.log('hush kelibsiz')
})




