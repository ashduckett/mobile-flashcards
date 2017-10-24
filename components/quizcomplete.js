import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import Decks from './decks'
import { clearLocalNotifications, setLocalNotification } from '../utils/helper'


export default class QuizComplete extends Component {
    componentDidMount() {
        clearLocalNotifications().then(setLocalNotification)
    }
    
    render() {
        return (
            <View>
                <Text>{this.props.navigation.state.params.percent}%</Text>
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('QuizPage', {deck: this.props.navigation.state.params.deck, step: 0, currScore: 0})} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text>Restart Quiz</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Decks')} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text>Back to Deck</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}