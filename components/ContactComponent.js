import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    };

    render() {
        return (
            <ScrollView>
                <Card
                    wrapperStyle={{margin: 1}}
                    image={require('./images/location.jpg')}>
                </Card>
                <Card 
                    title="Directions"
                    featuredTitle={"Directions"}
                    wrapperStyle={{margin: 1}}
                >   
                    <Text> We are located in Houston, Texas off I-10 west Exit 77, turn right and 0.5mile on right</Text>

                </Card>
                <Card 
                    title="Contact Infomation"
                    featuredTitle={"Contact Infromation"}
                    wrapperStyle={{margin: 10}}
                >   
                    <Text> 1000 Burger Street</Text>
                    <Text> Houston, Texas 77449 </Text>
                    <Text> Phone: 1-555-555-5555 </Text>
                    <Text style={{marginBottom: 20}}>
                        Email: admin@burger.com 
                    </Text>
                </Card>
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
        textAlign: 'left',
        fontSize: 22
    },
    image: {
        height: 200,
        width: 200,
    }
});

export default Contact; 