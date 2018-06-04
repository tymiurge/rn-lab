'use strict';
import React, {Component} from 'react'
import { View, Dimensions } from 'react-native'
import GradientArc from './src/components/arc/GradientArc'
import GradientProcessArc from './src/components/arc/GradientProcessArc'
import MultiArc from './src/components/arc/MultiArc'
import ArcFilterDashboard from './src/components/dashboards/ArcFilterDashboard'
import HexagonChart from './src/components/charts/Hexagon'


export default class Facade extends Component {
  render() {
    return (
            //<GradientArc />
            //
            /*
            <View style={{borderTopColor: 'red', borderTopWidth: 1, marginTop: 50}}>
            <GradientProcessArc progress={75} style={{lineColor: 'yellow'}}/>
            </View>
            */
            /*
                <View style={{borderTopColor: 'red', borderTopWidth: 1, marginTop: 50}}>
                <MultiArc 
                    values={[
                        {progress: 50, color: 'red'},
                        {progress: 75, color: 'green'},
                        {progress: 10, color: 'blue'},
                        {progress: 30, color: 'brown'},
                        {progress: 100, color: 'yellow'},
                        {progress: 35, color: 'purple'},
                    ]}
                    style={{gap: 20}}
                />
                </View>
            */
            //<ArcFilterDashboard />
            <View style={{borderTopColor: 'red', borderTopWidth: 1, marginTop: 50}}>
                <HexagonChart />
            </View>
        
    )
  }
}