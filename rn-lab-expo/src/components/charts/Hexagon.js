import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Svg, {Defs, Stop, G, Path, LinearGradient, Line} from 'react-native-svg'
import {arc} from 'd3-shape'


class HexagonChart extends Component {

    hexagonPath = (dots, h, w) => dots.reduce(
        (accumulator, dot, idx) => `${accumulator}${idx === 0 ? 'M' : ' L'} ${w + dot.x} ${h - dot.y}`,
        ""
    )

    render() {
        /**
            properties: 
                viewWidth

         */
        const viewWidth = 360 //Dimensions.get('window').width; //
        const offset = 20
        const h = viewWidth / 2
        const w = viewWidth / 2

        const r = (viewWidth - 2 * offset) / 2

        const apexY = r / 2
        const apexX = Math.sqrt( r * r - (r/ 2) * (r / 2))
        alert (`apexY = ${apexY}, apexX = ${apexX}`)

        alert(`h = ${h}, w = ${w}, r = ${r}`)
        
        const hexagon = [
            {x: 0, y: (-1) * r},
            {x: apexX, y: (-1) * apexY},
            {x: apexX, y: apexY},
            {x: 0, y: r},
            {x: (-1) * apexX, y: apexY},
            {x: (-1) * apexX, y: (-1) * apexY}
        ].map(dot => ({x: dot.x, y: dot.y}))

        

        const dPath = this.hexagonPath(hexagon, h, w)
        //alert(dPath)


        alert(viewWidth)
        return (
            <Svg width={viewWidth} height={viewWidth}>
                <Path
                    d='M 20 20 L 340 20 L 340 340 L 20 340 L 20 20'
                    stroke='black' stroke-width={1}
                    fill='blue'
                />
                <Path
                    //d='M 100 110 L 108.66025 105 L 108.66025 95 L 100 90 L 91.31075 95 L 91.31075 105'
                    d={dPath}
                    stroke='#CCFFCC'
                    fill='#CCFFCC'
                />
                <Text
                    x="100"
                    y="75"
                    stroke="#600"
                    fill="#600"
                    textAnchor="middle"
                >
                apex
                </Text>

            </Svg>
        )
    }
}

export default HexagonChart;
