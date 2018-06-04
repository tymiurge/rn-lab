import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Svg, {Defs, Stop, G, Path, LinearGradient, Line} from 'react-native-svg'
import {arc} from 'd3-shape'


class HexagonChart extends Component {
    render() {
        const viewWidth = 200
        return (
            <Svg width={viewWidth} height={viewWidth}>
                <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" />
                <Path d='M 20 10 L 28.66025 15 L 28.66025 25 L 20 30' stroke='black' />
            </Svg>
        )
    }
}

export default HexagonChart;
