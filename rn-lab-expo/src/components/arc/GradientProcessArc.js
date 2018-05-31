'use strict';
import React from 'react'
import { View, Dimensions } from 'react-native'
import Svg, {Defs, Stop, G, Path, LinearGradient, Line} from 'react-native-svg'
import { arc } from 'd3-shape'
import PropTypes from 'prop-types'


export default class GradientProcessArc extends React.Component {
  
    static propTypes = {
        progress: PropTypes.number.isRequired,
        style: PropTypes.object
    }

    static defaultProps = {
        style: {
            fullCircleColor: '#d3d3d3',
            padding: 20,
            lineWidth: 5,
            lineColor: 'red',
            viewWidth: Dimensions.get('window').width
        }
    }

    render() {
        const { progress, style } = this.props
        const { fullCircleColor, padding, lineWidth, lineColor, viewWidth } = style
        let rIn = viewWidth / 2 - padding
        let rOut = viewWidth / 2 - lineWidth - padding;
        let endAngle = progress * 3.6

        let circlePath = arc()
            .innerRadius(rIn)
            .outerRadius(rOut)
            .startAngle(0)
            .endAngle(2 * Math.PI / 360 * endAngle)
        
        let fullCirclePath = arc()
            .innerRadius(rIn)
            .outerRadius(rOut)
            .startAngle(0)
            .endAngle(360)
        
        return (
            <View style={{borderTopColor: 'red', borderTopWidth: 1, marginTop: 50}}>
            <Svg width={viewWidth} height={viewWidth}>
                <G>
                    <Path
                    
                        x={viewWidth / 2}
                        y={viewWidth / 2}
                        d={fullCirclePath()}
                        fill={fullCircleColor}
                    />

                    <Path
                        x={viewWidth / 2}
                        y={viewWidth / 2}
                        d={circlePath()}
                        fill={lineColor}
                    />
                </G>
            </Svg>
            </View>
    )
    }
}
