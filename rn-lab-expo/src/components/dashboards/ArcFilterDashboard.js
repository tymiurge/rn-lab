import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions , TouchableOpacity} from 'react-native'
import { Header } from 'react-native-elements'
import MultiArc from './../arc/MultiArc'
import HexagonChart from './../charts/Hexagon'
import GradientProcessArc from './../arc/GradientProcessArc'
import PropTypes from 'prop-types'

class Card extends Component {
    static propTypes = {
        progress: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }

    render() {
        return (
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
                <GradientProcessArc 
                    progress={this.props.progress} 
                    style={{lineColor: this.props.color, viewWidth: 100}}/>
                <Text>{`${this.props.text} - ${this.props.progress}%`}</Text>
            </TouchableOpacity>
        )
    }
}

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
                        <Card color='green' progress={75} text='Skills' />
                        <Card color='blue' progress={50} text='Benefits'/>
                        <Card color='yellow' progress={25} text='Location'/>
                    </View>    
                    <View style={{flexDirection: 'row', alignContent: 'stretch'}}>
                        <Card color='green' progress={35} text='Skills' />
                        <Card color='blue' progress={40} text='Benefits'/>
                        <Card color='yellow' progress={25} text='Location'/>
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
