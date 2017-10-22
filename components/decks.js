import React, { Component } from 'react'
import { Text, View, FlatList, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { getDecks } from '../utils/api'
import { StackNavigator } from 'react-navigation'
import DeckDetailView from './deckdetail'

class DeckListItem extends Component {
    
    render() {
        return (
            <View>
                <Text>{this.props.deck.title}</Text>
                <Text>{this.props.deck.questions.length} cards</Text>
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('DeckDetailView', { deck:this.props.deck })} key={this.props.deck.title} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{backgroundColor: '#841584', width: 100}}>
                        <Text style={{color: 'white', justifyContent: 'center', alignItems: 'center'}}>View</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )   
    }
}

export default class Decks extends Component {
    
    state = {
        decks: []
    }
    
    componentDidMount() {
        let decks = []
        let self = this

        getDecks().then(function(data) {
            let actualObjects = JSON.parse(data)

            Object.keys(actualObjects).forEach(function(key) {
                decks.push(actualObjects[key])
            })

            self.setState({
                decks: decks
            })
        })
    }   
    
    renderItem = (item) => {
        let actualItem = item.item
        return <DeckListItem navigation={this.props.navigation} deck={actualItem} key={actualItem.title}  />
    }
   
    render() {
        return (
            <View>
                <FlatList data={this.state.decks} renderItem={this.renderItem} />
            </View>
        )
    }
}