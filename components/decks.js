import React, { Component } from 'react'
import { Text, View, FlatList, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { getDecks } from '../utils/api'
import { StackNavigator } from 'react-navigation'
import DeckDetailView from './DeckDetail'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'

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

class Decks extends Component {
    
    
    componentDidMount() {
        this.props.dispatch(fetchDecks())
    }   
    
    renderItem = (item) => {
        let actualItem = item.item
        return <DeckListItem navigation={this.props.navigation} deck={actualItem} key={actualItem.title}  />
    }
   
    render() {
        return (
            <View>
                <FlatList data={this.props.decks} renderItem={this.renderItem} />
            </View>
        )
    }
}

function mapStateToProps(state) {
    let decks = []

    // Convert global state into a managable array rather than object
    if(state.length > 0) {
        let actualObjects = JSON.parse(state)
        
        Object.keys(actualObjects).forEach(function(key) {
            decks.push(actualObjects[key])
        })
    }
    
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)

