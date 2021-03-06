'use strict';
import React, {Component} from 'react'
import { View, Dimensions } from 'react-native'
import GradientArc from './src/components/arc/GradientArc'
import GradientProcessArc from './src/components/arc/GradientProcessArc'
import MultiArc from './src/components/arc/MultiArc'
import ArcFilterDashboard from './src/components/dashboards/ArcFilterDashboard'
import HexagonChart from './src/components/charts/Hexagon'
import TreeCrud from './src/components/widgets/tree-crud'
import TreeCrudStyles from './src/components/widgets/tree-crud/styles'
import List from './src/components/lists'
import CompetencyWizard from './src/components/widgets/tree-crud/competency-wizard'
import SeniorityLevel from './src/components/charts/SeniorityLevel'
import Headers from './src/components/headers'


export default class Facade extends Component {
  render() {
    const w = Dimensions.get('window').width
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
            /*
            <View style={{borderTopColor: 'red', borderBottomColor: 'red', borderBottomWidth: 1, borderTopWidth: 1, marginTop: 50}}>
                <HexagonChart viewWidth={w} rates={[0.75, 0.5, 1, 0.2, 0.5, 1]}/>
            </View>
            */
            //<TreeCrud styles={TreeCrudStyles}/>
            //<CompetencyWizard />
            //<List />
            /*
            <View style={{borderTopColor: 'red', borderBottomColor: 'red', borderBottomWidth: 1, borderTopWidth: 1, marginTop: 50}}>
            <SeniorityLevel width={30} total={5} current={3}/>
            </View>
            */
           <Headers />

    )
  }
}