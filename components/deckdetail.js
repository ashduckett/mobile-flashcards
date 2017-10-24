import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback, Animated } from 'react-native'
import NewCard from './newcard'
import QuizPage from './quizpage'

export default class DeckDetail extends Component {
    state = {
        fadeAnim: new Animated.Value(0)
    }
    
    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 2000
            }
        ).start()
    }


    render() {
        let { fadeAnim } = this.state 

        return (
            <Animated.View style={{
                ...this.props.style,
                opacity: fadeAnim,
            }}
                >
                <Text>{this.props.navigation.state.params.deck.title}</Text>
                <Text>{this.props.navigation.state.params.deck.questions.length} cards</Text>
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('NewCard', {cardKey: this.props.navigation.state.params.deck.title})} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text>Add Card</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('QuizPage', {deck: this.props.navigation.state.params.deck, step: 0, currScore: 0})} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text>Start Quiz</Text>
                    </View>
                </TouchableNativeFeedback>
                

                
            </Animated.View>
        )
    }   
}

