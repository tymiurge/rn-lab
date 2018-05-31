'use strict';
import React, {Component} from 'react'
import { View, Dimensions } from 'react-native'
import GradientArc from './src/components/arc/GradientArc'
import GradientProcessArc from './src/components/arc/GradientProcessArc'
import MultiArc from './src/components/arc/MultiArc'


export default class Facade extends Component {
  render() {
    return (
        <View style={{borderTopColor: 'red', borderTopWidth: 1, marginTop: 50}}>
            {/*<GradientProcessArc progress={75} style={{lineColor: 'yellow'}}/>*/}
            <MultiArc 
                values={[
                    {progress: 50, color: 'red'},
                    {progress: 75, color: 'green'},
                ]}
                style={{}}
            />
        </View>
    )
  }
}