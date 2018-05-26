import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native'
import LoginForm from './LoginForm'
import PropTypes from 'prop-types'

class Login extends Component {

    static propTypes = {
        onLoginSuccess: PropTypes.func.isRequired
    }
    
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('./assets/octopus.png')}
                    />
                    <Text style={styles.title}>Match your talent</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm onSubmit={() => this.props.onLoginSuccess()}/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 128,
        height: 128
    },
    title: {
        color: 'black',
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.8,
        fontWeight: 'bold',
        fontSize: 18
    }  
})


export default Login;
