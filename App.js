import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import DeckDetailView from './components/DeckDetail'
import QuizPage from './components/QuizPage'
import QuizComplete from './components/QuizComplete'
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
