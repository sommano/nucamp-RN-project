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

                <Card image={require('./images/table-in-vintage-restaurant-6267.jpg')} style = {styles.image}></Card>
                <Card image={require('./images/hamburger-and-fries-photo-2983101.jpg')} style = {styles.image}></Card>
                <Card image={require('./images/burger-951896_640.jpg')} style = {styles.image}></Card>

                
                <Card 
                    title="Hours"
                    featuredTitle={"Hours"}
                    wrapperStyle={{margin: 1}}
                >   
                    <Text style = {styles.textt}> Mon-Thur 11:00AM – 9:00PM</Text>
                    <Text style = {styles.textt}> Fri-Sat 11:00AM – 10:00PM </Text>
                    <Text style = {styles.textt}> Sunday 11:00AM –7:00PM </Text>
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textt: {
        textAlign: 'center',
        fontSize: 18,
        margin: 10
    },
    image: {
        height: 400,
        width: 400,
    }
});

export default Home;