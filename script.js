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
const brand = document.querySelector('h1')
const formLogin = document.querySelector('form')
const btnExit = document.querySelector('.exit')
const cardOwner = document.querySelector('.user')
const cardNumber = document.querySelector('.card_numbers')
const cardBalans = document.querySelector('.balance')

// Functions
const createLogin = () => {
    accounts.forEach(acc => {
        acc.username = acc.owner.fristName[0].toLowerCase() + acc.owner.lastName[0].toLowerCase()
    })

}
createLogin()

// Login

let loggedInAccount;   //boshshlanishiga undefined bo'lib turadi

const currenyFormatte = (amount, locale, currency) => {
    return amount.toLocaleString(locale, {
        style: "currency",
        currency,
    })
}
const calcBalance = (tranfers) => {
    return +tranfers.reduce((bal, tr) => bal + tr.amount, 0).toFixed(2)
}
const mackCreditCard = (cardNumber) => {
    const str = cardNumber + ''
    const last = str.slice(-4)
    return last.padStart(str.length, '*')
}
const setCardInfo = (acc) => {
    cardOwner.textContent = Object.values(loggedInAccount.owner).join(' ')
    cardNumber.textContent = mackCreditCard(acc.cardNumber)
    const bal = calcBalance(acc.tranfers)
    cardBalans.textContent = currenyFormatte(bal, acc.locale, acc.curreny)
}
const setAllinfo = (acc) => {
    setCardInfo(acc)
}
btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    const candidate = accounts.find(acc => acc.username === inputLogin.value)
    if (!candidate) return //console.log('login xato');
    if (candidate.password !== inputPassword.value) return
    // console.log('hush kelibsiz')

    loggedInAccount = candidate;
    brand.textContent = `Hush kelibsiz ${candidate.owner.fristName} ${candidate.owner.lastName}`

    inputLogin.value = ''
    inputPassword.value = ''

    formLogin.classList.add('hide')
    btnExit.classList.remove('hide')
    cardOwner.textContent = `${candidate.owner.fristName} ${candidate.owner.lastName}`

    setAllinfo(loggedInAccount)
})





