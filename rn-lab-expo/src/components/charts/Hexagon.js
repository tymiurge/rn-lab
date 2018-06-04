import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import Svg, {Defs, Stop, G, Path, LinearGradient, Line, Text} from 'react-native-svg'
import {arc} from 'd3-shape'


class HexagonChart extends Component {

    hexagonPath = dots => dots.reduce(
        (accumulator, dot, idx) => `${accumulator}${idx === 0 ? 'M' : ' L'} ${dot.x} ${dot.y}`,
        ""
    )

    hexagonAxesis = (x, y, r) => {
        const apexX = Math.sqrt( r * r - (r/ 2) * (r / 2))
        const apexY = r/2
        return [
            {y: 0, x: (-1) * r},
            {y: apexX, x: (-1) * apexY},
            {y: apexX, x: apexY},
            {y: 0, x: r},
            {y: (-1) * apexX, x: apexY},
            {y: (-1) * apexX, x: (-1) * apexY}    
        ].map(dot => ({x: x + dot.x, y: y - dot.y}))
    }

    
    innerHexagonAxesis = (x, y, r, rates) => ([
        {x: -1 * r * rates[0], y: 0},
        {
            x: -1 * r * rates[1] / 2, 
            y: Math.sqrt(Math.pow(r * rates[1], 2) - Math.pow(r * rates[1] / 2, 2))
        },
        {
            x: r * rates[2] / 2, 
            y: Math.sqrt(Math.pow(r * rates[2], 2) - Math.pow(r * rates[2] / 2, 2))
        },
        {x: r * rates[3], y: 0},
        {
            x: r * rates[4] / 2, 
            y: -1 * Math.sqrt(Math.pow(r * rates[4], 2) - Math.pow(r * rates[4] / 2, 2))
        },
        {
            x: -1 * r * rates[4] / 2, 
            y: -1 * Math.sqrt(Math.pow(r * rates[5], 2) - Math.pow(r * rates[5] / 2, 2))
        }

    ]).map(dot => ({x: x + dot.x, y: y - dot.y}))
    
    render() {
        /**
            properties: 
                viewWidth
                rates
         */
        const {viewWidth, rates } = this.props
        //const viewWidth = 360 //Dimensions.get('window').width; //
        //const rates = [0.75, 0.5, 1, 0.2, 0.5, 1]
        // component contant
        const offset = 20


        const h = viewWidth / 2
        const w = viewWidth / 2
        
        const hexagon = this.hexagonAxesis(w, h, (viewWidth - 2 * offset) / 2)
        const dPath = this.hexagonPath(hexagon, h, w)
        //alert(dPath)
        const textHexagonAxesis = this.hexagonAxesis(w, h, (viewWidth - offset) / 2)
        //alert(this.hexagonPath(textHexagonAxesis))
        const innterHexagonPath = this.hexagonPath(this.innerHexagonAxesis(w, h, (viewWidth - 2 * offset) / 2, rates))
        //alert(innterHexagonPath)

        return (
            <Svg width={viewWidth} height={viewWidth}>
                <G>
                
                <Path
                    //d='M 100 110 L 108.66025 105 L 108.66025 95 L 100 90 L 91.31075 95 L 91.31075 105'
                    d={dPath}
                    stroke='#CCFFCC'
                    fill='#CCFFCC'
                    fillOpacity={0.5}
                />
                <Path
                    //d='M 100 110 L 108.66025 105 L 108.66025 95 L 100 90 L 91.31075 95 L 91.31075 105'
                    d={innterHexagonPath}
                    fill='green'
                    fillOpacity={0.5}
                />
                

                {
                    textHexagonAxesis.map((axes, idx) => 
                        <Text
                            key={idx}
                            x={axes.x}
                            y={axes.y}
                            stroke="#600"
                            fill="#600"
                            textAnchor="middle"
                        >
                        {idx + 1}
                        </Text>
                    )
                }
                </G>
                

            </Svg>
        )
    }
}

export default HexagonChart;
