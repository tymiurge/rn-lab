import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { List, ListItem, Card, Icon, Button } from 'react-native-elements'

class SkillsList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    containerViewStyle={{width: '100%'}}
                    title='ADD COMPETENCY'
                    color={'white'} 
                    icon={{name: 'add-box'}}
                    backgroundColor={lightDark}
                />
                <View style={{height: 10}} />
                
                <View style={{width: '100%', backgroundColor: lightDark}}>
                    
                    <View style={{alignItems: 'center', width: '100%', marginBottom: 10}}>
                        <Text style
                            style={{
                                color: 'white',
                                fontSize: 30,
                                
                            }}
                        >
                            Competency Name
                        </Text>
                    </View>

                    
                <View 
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: lightDark
                    }}
                >


                <View style={{alignItems: 'center'}}>
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: '700'
                        }}
                    >
                        Added
                    </Text>
                    <TouchableOpacity style={{
                        backgroundColor: mainDark,
                        height: 50,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'white'
                            }}
                        >
                            50
                        </Text>
                        
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: 'white',
                        }}
                    >
                        Cick to edit
                    </Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: '700'
                        }}
                    >
                        Confirmed
                    </Text>
                    <TouchableOpacity style={{
                        backgroundColor: mainDark,
                        height: 50,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'white'
                            }}
                        >
                            20
                        </Text>
                        
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: 'white',
                        }}
                    >
                        Cick to see
                    </Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: '700'
                        }}
                    >
                        New tasks
                    </Text>
                    <TouchableOpacity style={{
                        backgroundColor: mainDark,
                        height: 50,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'white'
                            }}
                        >
                            +10
                        </Text>
                        
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: 'white',
                        }}
                    >
                        Cick to apply
                    </Text>
                </View>
                
                <View style={{alignItems: 'center'}}>
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: '700'
                        }}
                    >
                        Recommended
                    </Text>
                    <TouchableOpacity style={{
                        backgroundColor: mainDark,
                        height: 50,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'white'
                            }}
                        >
                            +10
                        </Text>
                        
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: 'white',
                        }}
                    >
                        Cick to add
                    </Text>
                </View>

                
            </View>
                </View>

                <View style={{width: '100%'}}>
                    <TextInput 
                        onChangeText={e => {}}
                        placeholder='Start typing competency name..'
                        placeholderTextColor='grey'
                        returnKeyType='next'
                        onSubmitEditing={() => {}}
                        // keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                    />

                    <List containerStyle={{marginBottom: 20 }}>
                        <ListItem
                            style={{width: '100%'}}
                            
                            title={'Git'}
                            leftIcon={{name: 'add'}}
                            hideChevron
                        />
                         <ListItem
                            style={{width: '100%'}}
                            
                            title={'Mongo DB'}
                            leftIcon={{name: 'add'}}
                            hideChevron
                        />
                        
                    </List>
                </View>

            </View>

            
        );
    }
}


const lightDark = '#2D3338'
const mainDark = '#1C2426'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainDark,
        paddingTop: 80 + (( Platform.OS === 'ios' ) ? 40 : 0),
    },
});


export default SkillsList;
