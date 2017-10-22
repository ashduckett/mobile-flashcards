import React, { Component } from 'react'
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import { addDeck, getDecks } from '../utils/api'
import { AsyncStorage } from 'react-native'

export default class NewDeck extends Component {
    constructor(props) {
        super(props)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }
    
    state = {
        input: ''
    }

    handleTextChange = (input) => {
        this.setState({
            input
        })
    }

    handleSave = () => {
        
        const DECK_STORAGE_KEY = 'DECK_STORAGE'

        addDeck(this.state.input).then(() => {

            // We are adding the deck
            getDecks().then((data) => {
                this.props.navigation.navigate('DeckDetailView', { deck: JSON.parse(data)[this.state.input] })
            })

           
        })
    }
  

    render() {
        return (
            <View> 
                <Text>What is the title of your new deck?</Text>
                <TextInput value={this.state.input} onChangeText={this.handleTextChange} />
                <TouchableNativeFeedback onPress={this.handleSave} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text>Submit</Text>
                    </View>
                </TouchableNativeFeedback>

            </View>
        )
    }
}