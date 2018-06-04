import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions , TouchableOpacity} from 'react-native'
import { Header } from 'react-native-elements'
import MultiArc from './../arc/MultiArc'
import HexagonChart from './../charts/Hexagon'
import GradientProcessArc from './../arc/GradientProcessArc'

class ArcFilterDashboard extends Component {
    render() {
        const w = Dimensions.get('window').width
        return (
            <View style={{flex: 1}}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <HexagonChart viewWidth={w} rates={[0.75, 0.5, 1, 0.2, 0.5, 1]}/>
                
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row', alignContent: 'stretch'}}>
                        <TouchableOpacity style={{
                            flex: 1, 
                            margin: 2, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            backgroundColor: 'rgba(204,255,204,0.5)',
                            borderRadius: 10
                            }}
                            onPress={() => alert('ok')}
                        >
                            <GradientProcessArc progress={75} style={{lineColor: 'yellow', viewWidth: 100}}/>
                            <Text>Skills - 75%</Text>
                        </TouchableOpacity>
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
