import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <Card
                    image={require('./images/burgerz.jpg')}>
                <Text style = {styles.textt}>
                    "Welcome to Burger Restaurant"
                    Home of Burgers and Fries
                </Text>
                </Card>
                <Card
                    image={require('./images/burgerz.jpg')}>
                <Text style = {styles.textt}>
                    "Welcome to Burger Restaurant"
                    Home of Burgers and Fries
                </Text>
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textt: {
        textAlign: 'center',
        fontSize: 22,
        margin: 10
    },
    image: {
        height: 200,
        width: 200,
    }
});

export default Home;