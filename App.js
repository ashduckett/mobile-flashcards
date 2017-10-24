import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import Decks from './components/decks'
import NewDeck from './components/newdeck'
import NewCard from './components/newcard'
import DeckDetailView from './components/deckdetail'
import QuizPage from './components/quizpage'
import QuizComplete from './components/quizcomplete'
import { setLocalNotification } from './utils/helper'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(promise())

const Tabs = TabNavigator({
  Decks: {
    screen: Decks
  },
  "New Deck": {
    screen: NewDeck
  },
})

const Stack = StackNavigator({
  Decks: {
      screen: Tabs
  },
  DeckDetailView: {
      screen: DeckDetailView
  },
  NewCard: {
    screen: NewCard
  },
  QuizPage: {
    screen: QuizPage
  },
  QuizComplete: {
    screen: QuizComplete
  }
})



export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <Stack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
