import { getDecks } from '../utils/api'
export const FETCH_DECKS = 'FETCH_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function fetchDecks() {
    let decks = []
    let self = this

    let promise = getDecks()

    return {
        type: FETCH_DECKS,
        payload: promise
    }
}

export function addDeckToRedux(deckTitle) {

    let newDeck = {
        title: deckTitle,
        questions: []  
    }

    return {
        type: ADD_DECK,
        payload: newDeck
    }
}

export function addCardToRedux(deckTitle, questionText, answerText) {

    console.log('addCardToRedux called')
    let question = {
        question: questionText,
        answer: answerText,
        correct: null
    }

    return {
        type: ADD_CARD,
        question,
        deckTitle
    }
}