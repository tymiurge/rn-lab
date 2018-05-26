import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native'
import PropTypes from 'prop-types'

class LoginForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    state = {
        loginValue: '',
        passwordValue: ''
    }

    onLoginValueChange = text => {
        this.setState({...this.state, loginValue: text})
    }

    onPasswordChange = text => {
        this.setState({...this.state, passwordValue: text})
    }

    onLoginRequest = () => {
        this.props.onSubmit()    
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                />
                <TextInput 
                    onChangeText={e => this.onLoginValueChange(e)}
                    value={this.state.loginValue}
                    placeholder='user name or email'
                    placeholderTextColor='grey'
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    // keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput 
                    onChangeText={text => this.onPasswordChange(text)}
                    value={this.state.passwordValue}
                    placeholder='password'
                    placeholderTextColor='grey'
                    returnKeyType='go'
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onLoginRequest()}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 15,
        color: 'black',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: '700'
    }
})


export default LoginForm
