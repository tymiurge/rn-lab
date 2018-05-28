'use strict';
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import Svg, {Defs, Stop, G, Path, LinearGradient, Line} from 'react-native-svg'
import {arc} from 'd3-shape'


export default class TestPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rIn, rOut, rMiddle, startAngle, endAngle;
    rIn = 50;//inner circle radius
    rOut = 55;//outer circle radius
    rMiddle = 52.5;//middle circle radius
    startAngle = 0;//start angle 0
    endAngle = 300;//end angle 300

    let circlePath = arc()
      .innerRadius(rIn)
      .outerRadius(rOut)
      .cornerRadius(rMiddle - rIn)
      .startAngle(startAngle)
      .endAngle(2 * Math.PI / 360 * endAngle);

    return (
      <View style={Styles.wrap}>
        <View style={{width: 300, height: 200, backgroundColor: '#000000', marginTop: 2}}>
          <Svg width={300} height={200}>
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
              <Line
                x={5}
                y={10}
                x1={0}
                y1={0}
                x2={(2 * Math.PI * rMiddle * endAngle / 360).toFixed(2)}
                y2={0}
                stroke={'url(#wholeArcLengthLine)'}
                strokeWidth="5"/>

              <Path
                x={100}
                y={100}
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