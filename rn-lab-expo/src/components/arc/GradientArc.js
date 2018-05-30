'use strict';
import React, {Component} from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import Svg, {Defs, Stop, G, Path, LinearGradient, Line} from 'react-native-svg'
import {arc} from 'd3-shape'


export default class GradientArc extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rIn, rOut, rMiddle, startAngle, endAngle;
    rIn = 80;//inner circle radius
    rOut = 55;//outer circle radius
    rMiddle = 52.5;//middle circle radius
    startAngle = 0;//start angle 0
    endAngle = 270;//end angle 300

    var viewWidth = Dimensions.get('window').width;

    let circlePath = arc()
      .innerRadius(rIn)
      .outerRadius(rOut)
      .cornerRadius(rMiddle - rIn)
      .startAngle(startAngle)
      .endAngle(2 * Math.PI / 360 * endAngle);

    return (
      <View style={Styles.wrap}>
        <View style={{backgroundColor: 'white'}}>
          <Svg width={viewWidth} height={viewWidth}>
            <Defs>
              <LinearGradient
                id={'wholeArcLengthLine'}
                x1={0}
                y1={0}
                x2={(2 * Math.PI * rMiddle * endAngle / 360).toFixed(2)}
                y2={0}>
                <Stop offset="0" stopColor={"#ff0000"}/>
                <Stop offset="0.36" stopColor={"#ef52a3"}/>
                <Stop offset="0.7" stopColor={"#b445dd"}/>
                <Stop offset="1" stopColor={"#0000ff"}/>
              </LinearGradient>
            </Defs>

            <G>
              

              <Path
                x={viewWidth / 2}
                y={viewWidth / 2}
                d={circlePath()}
                fill={'url(#wholeArcLengthLine)'}/>
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