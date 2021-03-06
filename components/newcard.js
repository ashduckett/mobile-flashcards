import React, { Component } from 'react'
import { Text, View, TextInput, TouchableNativeFeedback } from 'react-native'
import { submitCard, getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { addCardToRedux } from '../actions'

class NewCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    handleQuestionChange = (input) => {
        this.setState({
            ...this.state,
            question: input
        })
    }
    
    handleAnswerChange = (input) => {
        this.setState({
            ...this.state,
            answer: input
        })
    }

    handleSubmitCard = (input) => {
        let cardKey = this.props.navigation.state.params.cardKey

        submitCard(cardKey, this.state.question, this.state.answer).then(() => {
            // Update redux
            this.props.dispatch(addCardToRedux(cardKey, this.state.question, this.state.answer))

            getDecks().then((data) => {
                this.props.navigation.navigate('DeckDetailView', { deck: JSON.parse(data)[cardKey] })
            })
        }) 
    }
    
    render() {
        return(
            <View>
                <Text>Please enter a question:</Text>
                <TextInput value={this.state.question} onChangeText={this.handleQuestionChange} />
                <Text>Please enter an answer:</Text>
                <TextInput  value={this.state.answer} onChangeText={this.handleAnswerChange} />
                <TouchableNativeFeedback onPress={this.handleSubmitCard} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text>Submit</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

        )
    }
}

// We need access to dispatch
export default connect()(NewCard)