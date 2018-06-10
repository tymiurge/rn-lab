import React from 'react'
import { Dimensions,View } from 'react-native'
import Svg, {Defs, Stop, G, Path, LinearGradient, Line, Rect} from 'react-native-svg'
import { arc } from 'd3-shape'
import PropTypes from 'prop-types'

export default class SeniorityLevel extends React.Component {
    render() {
        const { width, total, current} = this.props
        const noHitColor = '#dfe6e9'
        const hitColor = '#fd79a8'
        const padding = 2
        
        //const fullPath = `M 0 0 L ${width} 0`
        //const progressPath = `M 0 0 L ${width * progress} 0`

        return (
            <Svg 
                width={width} 
                height={width * total + (total - 1) * padding}
            >
                <G>
                    {
                        Array.from(Array(total).keys()).map(
                            idx => {
                                const x = 0
                                const y = idx * width + idx * padding
                                const fillColor = idx === current - 1 ? hitColor : noHitColor
                                return <Rect
                                    x={x}
                                    y={y}
                                    width={width}
                                    height={width}
                                    fill={fillColor}
                                />
                            }
                        )
                    }
                <Rect
                    x='0'
                    y='0'
                    width={width}
                    height={width}
                    //stroke="red"
                    //strokeWidth="2"
                    fill={noHitColor}
                    />
                </G>
            </Svg>
        );
    }
}
