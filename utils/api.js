import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'DECK_STORAGE'

export function addDeck(deckName) {
    // We know that this is a brand new deck and it should look like this:

    let newDeck = {
        title: deckName,
        questions: []  
    }

    // Add the item if it's not already there.
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [deckName]: newDeck
    }))
}

export function getDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function submitCard(deckKey, questionText, answerText) {

    let question = {
        question: questionText,
        answer: answerText,
        correct: null
    }

    // Now get the decks so we can find the one we want
    return getDecks().then(function(data) {
        let deck = JSON.parse(data)[deckKey]
        console.log(deck)

        deck.questions.push(question)

        AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
            [deckKey]: deck
        }))
    })
}