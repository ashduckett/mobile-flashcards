import { FETCH_DECKS, ADD_DECK, ADD_CARD } from '../actions'

export default function decks (state = [], action) {

    let currentState
    switch(action.type) {
        
        case 'FETCH_DECKS_FULFILLED':
            return action.payload
        case ADD_DECK:

            // Get the object form of the state
            currentState = JSON.parse(state)
            let mergedState = {
                ...currentState,
                [action.payload.title]: action.payload
            }
            return JSON.stringify(mergedState)
        
        case ADD_CARD:

            // What to do here? First grab all of the state in it's object form
            currentState = JSON.parse(state)


            // Next, grab the deck you want to add a question to
            let deck = currentState[action.deckTitle]

            deck.questions.push(action.question)

            let newState = {
                ...currentState,
                [action.deckTitle]: deck
            }
            return JSON.stringify(newState)



        default:
            return state
    }
}