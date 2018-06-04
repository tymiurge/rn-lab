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
            {x: 0, y: (-1) * r},
            {x: apexX, y: (-1) * apexY},
            {x: apexX, y: apexY},
            {x: 0, y: r},
            {x: (-1) * apexX, y: apexY},
            {x: (-1) * apexX, y: (-1) * apexY}    
        ].map(dot => ({x: x + dot.x, y: y - dot.y}))
    }

    render() {
        /**
            properties: 
                viewWidth

         */
        const viewWidth = 360 //Dimensions.get('window').width; //
        // component contant
        const offset = 20


        const h = viewWidth / 2
        const w = viewWidth / 2
        
        //alert (`apexY = ${apexY}, apexX = ${apexX}`)

        //alert(`h = ${h}, w = ${w}, r = ${r}`)
        
        const hexagon = this.hexagonAxesis(w, h, (viewWidth - 2 * offset) / 2)
        const dPath = this.hexagonPath(hexagon, h, w)
        //alert(dPath)
        const textHexagonAxesis = this.hexagonAxesis(w, h, (viewWidth - offset) / 2)
        alert(this.hexagonPath(textHexagonAxesis))


        alert(viewWidth)
        return (
            <Svg width={viewWidth} height={viewWidth}>
                <G>
                <Path
                    d='M 20 20 L 340 20 L 340 340 L 20 340 L 20 20'
                    stroke='black' stroke-width={1}
                    fill='blue'
                    fillOpacity={0.1}
                />
                <Path
                    //d='M 100 110 L 108.66025 105 L 108.66025 95 L 100 90 L 91.31075 95 L 91.31075 105'
                    d={dPath}
                    stroke='#CCFFCC'
                    fill='#CCFFCC'
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
