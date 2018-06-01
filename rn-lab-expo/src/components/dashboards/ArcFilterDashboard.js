import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Header } from 'react-native-elements'
import MultiArc from './../arc/MultiArc'

class ArcFilterDashboard extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <MultiArc 
                    values={[
                        {progress: 50, color: '#446CB3'},
                        {progress: 75, color: '#4183D7'},
                        {progress: 10, color: '#2574A9'},
                        {progress: 30, color: '#3498DB'},
                        {progress: 100, color: '#1E8BC3'},
                        {progress: 35, color: '#21A7F0'},
                    ]}
                    style={{gap: 25}}
                />
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row', alignContent: 'stretch'}}>
                        <View style={{flex: 1, borderWidth: 1, borderColor: 'blue', margin: 2}}>
                            <Text>A1</Text>
                        </View>
                        <View style={{flex: 1, borderWidth: 1, borderColor: 'blue', margin: 2}}>
                            <Text>A2</Text>
                        </View>
                    </View>    
                    <View>
                        <Text>A3</Text>
                    </View>    
                    <View>
                        <Text>A4</Text>
                    </View>    
                    <View>
                        <Text>A5</Text>
                    </View>    
                    <View>
                        <Text>A6</Text>
                    </View>    
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
});


export default ArcFilterDashboard;
