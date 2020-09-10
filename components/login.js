import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Text, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native'
import login_bg from '../images/background_login.jpg'
//import Icons from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/Ionicons'
import fireb from './config/firebaseconfig'
import logoapp from '../images/logoapp.png'
const { width: WIDTH } = Dimensions.get('window')

class login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            showPass: true,
            press: false,
        }
    }

    handleChangeInput = (text) => {
        this.setState({ email: text })
    }
    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    showPass = () => {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true })
        }
        else {
            this.setState({ showPass: true, press: false })
        }
    }
    btnlogin_click = () => {
        console.log(this.state.email)
        console.log(this.state.password)
        if (this.state.email === '' || this.state.password === '') {
            Alert.alert('Enter details to signin!')
          } else {
            this.setState({
              isLoading: true,
            })
            fireb
              .auth()
              .signInWithEmailAndPassword(this.state.email, this.state.password)
              .then((res) => {
                console.log(res)
                console.log('User logged-in successfully!')
                this.setState({
                  isLoading: false,
                  email: '',
                  password: ''
                })
                this.props.navigation.navigate('food')
              })
              .catch(error => this.setState({ errorMessage: error.message }))
          }
    }

    render() {
        return (
            <ImageBackground source={login_bg} style={styles.backgroundcontainer}>
                <Image source={logoapp} style={styles.logo}></Image>
                <View style={styles.inputContainer} >
                    <TextInput
                        value={this.state.email}
                        style={styles.input}
                        placeholder='Username'
                        placeholderTextColor={'#534F4F'}
                        underlineColorAndroid='transparent'
                        onChangeText={(val) => this.updateInputVal(val, 'email')} />
                    <Icons name={'person-circle-outline'} size={28} color={'#DE9F10'} style={styles.inputIcon} />
                </View>
                <View style={styles.inputContainer}>

                    <TextInput
                        value={this.state.password}
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'#534F4F'}
                        underlineColorAndroid='transparent'
                        onChangeText={(val) => this.updateInputVal(val, 'password')} />
                    <Icons name={'lock-closed-outline'} size={28} color={'#DE9F10'} style={styles.inputIcon} />
                    <TouchableOpacity style={styles.btneye} onPress={this.showPass.bind(this)}>
                        <Icons name={this.state.press == false ? 'eye-off-outline' : 'eye-outline'} size={28} color={'#DE9F10'} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.btnlogin}
                    onPress={() => this.btnlogin_click()}
                >
                    <Text style={styles.text}>
                        Login
                            </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    backgroundcontainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: WIDTH - 55,
        // height: 45,
        borderRadius: 45,
        fontSize: 20,
        paddingLeft: 45,
        backgroundColor: '#EFEFE8',
        color: '#534F4F',
        marginHorizontal: 25,
        borderLeftWidth: 1.0,
        borderBottomWidth: 1.0,
        borderRightWidth: 1.0,
        borderStartWidth: 1.0,
        borderTopWidth: 1.0,
    },
    inputContainer: {
        marginTop: 15,
    },
    inputIcon:
    {
        position: 'absolute',
        top: 10,
        left: 37,
    },
    btneye:
    {
        position: 'absolute',
        top: 10,
        right: 37,
    },
    btnlogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#ff1a1a',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center',
    },
    logo:{
        width: 300,
        height: 200,
        
    }
})
export default login
