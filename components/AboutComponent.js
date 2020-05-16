import React, { Component } from 'react';
import { StyleSheet,FlatList, ScrollView, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Card, ListItem } from 'react-native-elements';

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    };

    render() {

        function Mission () {
            return (
                    <Text>
                    We started out just cooking burgers in the back of our yard. My grandpa the great Jim Brown started cooking in the old days and passed down our family recipe to my father James Brown. That burger torch has now been passed to me and I will continue to cook to satisfy our customers. I been flipping burger since my grandpa taught me cooking at the young age of 12. There isnt any burger that can defeat me.</Text>
            );
        }
       
        return(
            <ScrollView>
                <Card
                    wrapperStyle={{margin: 1}}
                    image={require('./images/ham-burger-with-vegetables-1639557.jpg')}>
                </Card>
                <Card title="Our Mission">
                    {Mission()}
                </Card>
                <Card 
                    title="Hours"
                    featuredTitle={"Hours"}
                    wrapperStyle={{margin: 1}}
                >   
                    <Text> Mon-Thur 11:00AM – 9:00PM</Text>
                    <Text> Fri-Sat 11:00AM – 10:00PM </Text>
                    <Text> Sunday 11:00AM –7:00PM </Text>
                </Card>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textt: {
        textAlign: 'left',
        fontSize: 22,
        margin: 10
    },
    image: {
        height: 200,
        width: 200,
    }
});

export default About; 