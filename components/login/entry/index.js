import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class EntryScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                
               <View style={styles.logoContainer}>
                    {
                    //<Text style={styles.title}>Chtulhu is hungry!</Text>
                    }
                    <View style={styles.circle}>
                        <Image
                            style={styles.logo}
                            source={require('./assets/octopus.png')}
                        />
                    </View>
                    
                </View>

                <View style={styles.bottomView}>

                    <TouchableOpacity style={[styles.button, styles.leftButton]} onPress={() => {}}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.rightButton]} onPress={() => {}}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>
        );
    }
}

const firstColor = '#00B6DE'
const secondColor = '#00A1D5'
const thirdColor = '#007EA6'
const groundColor = '#3C464E'

const styles = StyleSheet.create({
    circle: {
       borderWidth:10,
       borderColor: thirdColor ,
       alignItems:'center',
       justifyContent:'center', 
       width:200,
       height:200,
       backgroundColor: thirdColor,
       borderRadius:100,
    },
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: firstColor,
        paddingTop: 80 + (( Platform.OS === 'ios' ) ? 40 : 0)
    },
    logoContainer: {
        //marginTop: '20%'
        alignItems: 'center',
    },  
    title: {
        marginTop: '5%',
        marginBottom: '5%',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 20
    },
    bottomView: {
        flexDirection: 'row',
        width: '100%', 
        //height: 100 + (Platform.OS === 'ios' ? 20 : 0), 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 20
    },
    button: {
        backgroundColor: thirdColor,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: 100
    },
    leftButton: {
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderRightWidth: 1,
        borderColor: firstColor
    },
    rightButton: {
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});


export default EntryScreen;
