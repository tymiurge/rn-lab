import React from 'react'
import { Platform, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Header1 from './Header1'
import { Icon } from 'native-base'

const VIEW_BG = '#161724'
const BTN_BG = '#2f3542'
const BORDER_BG = '#242733'
const TEXT_CLR = '#FFF'

const H1 = props => 
    <View>
        <Text> First Screen</Text>
    </View>

const Headers = props => (
    <Router>
        <Scene key='root'>
            <Scene 
                key='h1'
                customProp='OK'
                component={H1}
                title='Scene1' 
                titleStyle={{color: TEXT_CLR}}
                navigationBarStyle={{backgroundColor: VIEW_BG, color: TEXT_CLR}} 
                renderLeftButton={(props)=>{
                    return (
                        <TouchableOpacity
                            style={{
                                width: 36,
                                height: 36,
                                marginLeft: 10,
                                borderWidth: 0.4,
                                borderColor: BORDER_BG,
                                backgroundColor: BTN_BG, 
                                borderRadius: 18,
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                            onPress={ ()=>{alert('left pressed' + props.customProp)} }
                        >
                            <Icon name="md-arrow-back" style={{fontSize: 32, color: TEXT_CLR}}/>
                        </TouchableOpacity>
                    )
                }}
                renderRightButton={()=>{
                    return (
                        <TouchableOpacity
                        onPress={ ()=>{alert('right pressed')} }
                        style={{
                            width: 36,
                            height: 36,
                            marginRight: 10,
                            borderWidth: 0.4,
                            borderColor: BORDER_BG,
                            backgroundColor: BTN_BG, 
                            borderRadius: 18,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}
                        >
                            <Icon name="ios-cog" style={{fontSize: 32, color: TEXT_CLR}}/>
                        </TouchableOpacity>
                    )
                }}
                
            />
        </Scene>
    </Router>
)

export default Headers