import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'


export default class QuizPage extends Component {
    
    constructor(props) {
        super(props)
        
        this.handleToggle = this.handleToggle.bind(this)
        this.onCorrect = this.onCorrect.bind(this)
        this.onIncorrect = this.onIncorrect.bind(this)

        this.state = {
            question: '',
            answer: '',
            currentText: '',
            toggleButtonText: '',
            step: 0,
            
        }        
    }


    componentDidMount() {
        let question = this.props.navigation.state.params.deck.questions[this.props.navigation.state.params.step]
        let answer = this.props.navigation.state.params.deck.questions[this.props.navigation.state.params.step]

        this.setState({
            question,
            step: this.props.navigation.state.params.step,
            currentText: question.question,
            toggleButtonText: 'Answer'
            
        })
    }

    handleToggle() {
        
        if(this.state.toggleButtonText === 'Answer') {
            this.setState({
                toggleButtonText: 'Question',
                currentText: this.state.question.answer
            })
        } else {
            this.setState({
                toggleButtonText: 'Answer',
                currentText: this.state.question.question
            })
        }
    }

    onCorrect() {
        let nextStep = this.state.step + 1
        let newScore = this.props.navigation.state.params.currScore + 1

        // If we're not at the end, progress to the next question:
        if(this.state.step + 1 !== this.props.navigation.state.params.deck.questions.length) {
            this.props.navigation.navigate('QuizPage', {deck: this.props.navigation.state.params.deck, step: nextStep, currScore: newScore})
        } else {
            // This, I think is where we display any stats, but check

            let noOfQuestions = this.props.navigation.state.params.deck.questions.length
            let percentage = newScore / noOfQuestions * 100

            this.props.navigation.navigate('QuizComplete', {percent: percentage.toFixed(2), deck: this.props.navigation.state.params.deck})
        }
    }

    onIncorrect() {
        let nextStep = this.state.step + 1

        if(this.state.step + 1 !== this.props.navigation.state.params.deck.questions.length) {
            this.props.navigation.navigate('QuizPage', {deck: this.props.navigation.state.params.deck, step: nextStep, currScore: this.props.navigation.state.params.currScore})
        
            
        } else {
            let noOfQuestions = this.props.navigation.state.params.deck.questions.length
            let percentage =  this.props.navigation.state.params.currScore / noOfQuestions * 100

            this.props.navigation.navigate('QuizComplete', {percent: percentage.toFixed(2), deck: this.props.navigation.state.params.deck})
        }
    }
    
    
    render() {
        return (
            <View>
                <Text>{this.state.currentText}</Text>
                <TouchableNativeFeedback onPress={this.handleToggle} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text>{this.state.toggleButtonText}</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.onCorrect} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text>Correct</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.onIncorrect} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text>Incorrect</Text>
                    </View>
                </TouchableNativeFeedback>                
            </View>
        )
    }   
}

