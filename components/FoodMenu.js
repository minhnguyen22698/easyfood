
import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Text, Dimensions, TextInput } from 'react-native'
import login_bg from '../images/background_login.jpg'
//import Icons from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/Ionicons'
import accIcon from './icons/accounticon.png'

const { width: WIDTH } = Dimensions.get('window')

class FoodMenu extends Component {
    render() {  
        return (
            <View>
               <Text> Food Menu</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    backgroundcontainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 23,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
        borderTopColor: 'red'
    },
    inputContainer: {
        marginTop: 15,
    },
    inputIcon:
    {
        position: 'absolute',
        top: 6,
        left: 37,
        color : 'white'
    },
})
export default FoodMenu
