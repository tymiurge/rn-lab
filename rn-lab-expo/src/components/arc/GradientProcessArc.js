'use strict';
import React, {Component} from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import Svg, {Defs, Stop, G, Path, LinearGradient, Line} from 'react-native-svg'
import {arc} from 'd3-shape'


export default class GradientArc extends Component {
  

  render() {
    let progress = 50


    let viewWidth = Dimensions.get('window').width;
    let rIn, rOut, rMiddle, startAngle, endAngle;
    
    rIn = 135;//inner circle radius
    rOut = 130;//outer circle radius
    startAngle = 0;//start angle 0
    endAngle = 180;//end angle 300

    /*
    rIn = 60;//inner circle radius
    rOut = 55;//outer circle radius
    rMiddle = 52.5;//middle circle radius
    startAngle = 0;//start angle 0
    endAngle = 270;//end angle 300
     */

    //var viewWidth = Dimensions.get('window').width;

    let circlePath = arc()
      .innerRadius(rIn)
      .outerRadius(rOut)
      .startAngle(startAngle)
      .endAngle(2 * Math.PI / 360 * endAngle)
      

    return (
      <View style={Styles.wrap}>
        <View style={{backgroundColor: 'white'}}>
          <Svg width={viewWidth} height={viewWidth}>
            

            <G>
              

              <Path
                rotation={-90}
                x={viewWidth / 2}
                y={viewWidth / 2}
                d={circlePath()}
                fill={'black'}/>
            </G>
          </Svg>
        </View>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});