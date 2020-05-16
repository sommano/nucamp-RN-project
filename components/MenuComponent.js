import React, { Component } from 'react';
import { FlatList, ScrollView, View, Text, StyleSheet, Image, Button, Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Card, ListItem } from 'react-native-elements';

class Menu extends Component {


    static navigationOptions = {
        title: 'Menu'
    };

    render() {

        return (
            <ScrollView>
                <Card style = {styles.textt}>
                    <View>
                        <Image source={require('./images/ham-burger-with-vegetables-1639557.jpg')} style = {styles.image}/>
                        <Text style = {styles.textt}> Regular Burger</Text>
                        <Text style = {styles.textt}> Our classic beef patty on a bun .</Text>
                        <Text style = {styles.textt}> $6.00</Text>
                    </View>
                </Card>
                <Card style = {styles.textt}>
                    <View>
                        <Image source={require('./images/burger-951896_640.jpg')} style = {styles.image}/>
                        <Text style = {styles.textt}> Regular Burger</Text>
                        <Text style = {styles.textt}> Our classic beef patty on a bun .</Text>
                        <Text style = {styles.textt}> $6.00</Text>
                    </View>
                    </Card>
                    <Card style = {styles.textt}>
                    <View>
                        <Image source={require('./images/burger-731298_640.jpg')} style = {styles.image}/>
                        <Text style = {styles.textt}> Bacon Burger</Text>
                        <Text style = {styles.textt}> Our classic Beef and bacon Burger.</Text>
                        <Text style = {styles.textt}> $8.00</Text>
                    </View>
                    </Card>
                    <Card style = {styles.textt}>
                    <View>
                        <Image source={require('./images/snack-2635035_640.jpg')} style = {styles.image}/>
                        <Text style = {styles.textt}> Cheese Burger</Text>
                        <Text style = {styles.textt}> Cheese and beef patyy on a bun.</Text>
                        <Text style = {styles.textt}> $7.00</Text>
                    </View>
                    </Card>
                    <Card style = {styles.textt}>
                    <View>
                        <Image source={require('./images/hamburger-and-fries-photo-2983101.jpg')} style = {styles.image}/>
                        <Text style = {styles.textt}> DoubleStack Burger</Text>
                        <Text style = {styles.textt}> 2 beef patty on a bun.</Text>
                        <Text style = {styles.textt}> $9.00</Text>
                    </View>
                    </Card>
                    <Card style = {styles.textt}>
                    <View>
                        <Image source={require('./images/burger-827309_640.jpg')} style = {styles.image}/>
                        <Text style = {styles.textt}> Chicken Burger</Text>
                        <Text style = {styles.textt}> Chicken patty on a bun.</Text>
                        <Text style = {styles.textt}> $7.00</Text>
                    </View>
                    </Card>
                    <Card style = {styles.textt}>
                    <View>
                        <Image source={require('./images/bowl-1842294_640.jpg')} style = {styles.image}/>
                        <Text style = {styles.textt}> Fries</Text>
                        <Text style = {styles.textt}> Savory Fried Fresh Cut Potatoes.</Text>
                        <Text style = {styles.textt}> $3.00</Text>
                    </View>
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

export default Menu;