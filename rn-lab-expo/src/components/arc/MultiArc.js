'use strict';
import React from 'react'
import { Dimensions } from 'react-native'
import Svg, {Defs, Stop, G, Path, LinearGradient, Line} from 'react-native-svg'
import { arc } from 'd3-shape'
import PropTypes from 'prop-types'


export default class MultiArc extends React.Component {

    static propTypes = {
        values: PropTypes.array,
        
        /*Of(PropTypes.shape({
            progress: PropTypes.number.isRequired,
            color: PropTypes.string.isRequired
        })).isRequired,*/
        style: PropTypes.shape({
            fullCircleColor: PropTypes.string,
            padding: PropTypes.number,
            lineWidth: PropTypes.number,
            viewWidth: PropTypes.number
        })
    }

    constructor(props) {
        super(props)
        const { padding, fullCircleColor, lineWidth, viewWidth } = this.props.style
        this.style = {
            fullCircleColor: fullCircleColor || '#d3d3d3',
            padding: padding || 20,
            lineWidth: lineWidth || 5,
            viewWidth: viewWidth || Dimensions.get('window').width    
        }
    }

    renderArcs = () => {
        const { padding, lineWidth, fullCircleColor, viewWidth } = this.style
        return this.props.values.map(({ progress, color }, idx) => {
            let rIn = viewWidth / 2 - padding - (idx * 10)
            let rOut = rIn - lineWidth;
            //let endAngle = progress * 3.6
            let circlePath = arc()
                .innerRadius(rIn)
                .outerRadius(rOut)
                .startAngle(0)
                .endAngle( (2 * Math.PI / 360) * progress * 3.6 )
            let fullCirclePath = arc()
                .innerRadius(rIn)
                .outerRadius(rOut)
                .startAngle(0)
                .endAngle(360)
    
            return (
                <G>
                    <Path
                        x={viewWidth / 2}
                        y={viewWidth / 2}
                        d={fullCirclePath()}
                        fill={fullCircleColor}
                    />
    
                    <Path
                        rotation={270}
                        x={viewWidth / 2}
                        y={viewWidth / 2}
                        d={circlePath()}
                        fill={color}
                    />
                </G>    
            )
        })
    }
    
    
    render() {
        /*
        let circlePath = arc()
            .innerRadius(rIn)
            .outerRadius(rOut)
            .startAngle(0)
            .endAngle( (2 * Math.PI / 360) * progress * 3.6 )
        
        let fullCirclePath = arc()
            .innerRadius(rIn)
            .outerRadius(rOut)
            .startAngle(0)
            .endAngle(360)
        */
        const { viewWidth } = this.style
        return (
            <Svg width={viewWidth} height={viewWidth}>
                { this.renderArcs() }
                {/*
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
                */}
            </Svg>
        )
    }
}
