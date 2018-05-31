import React from 'react'
import { Dimensions } from 'react-native'
import Svg, {Defs, Stop, G, Path, LinearGradient, Line} from 'react-native-svg'
import { arc } from 'd3-shape'
import PropTypes from 'prop-types'

export default class MultiArc extends React.Component {

    static propTypes = {
        values: PropTypes.array.isRequired,
        style: PropTypes.shape({
            fullCircleColor: PropTypes.string,
            padding: PropTypes.number,
            lineWidth: PropTypes.number,
            viewWidth: PropTypes.number,
            gap: PropTypes.number
        })
    }

    static defaultProps = {
        style: {}
    }

    constructor(props) {
        super(props)
        const { padding, fullCircleColor, lineWidth, viewWidth, gap } = this.props.style
        this.style = {
            fullCircleColor: fullCircleColor || '#d3d3d3',
            padding: padding || 20,
            lineWidth: lineWidth || 5,
            viewWidth: viewWidth || Dimensions.get('window').width,
            gap: gap || 10
        }
    }

    renderArcs = () => {
        const { padding, lineWidth, fullCircleColor, viewWidth, gap } = this.style
        return this.props.values.map(({ progress, color }, idx) => {
            let rIn = viewWidth / 2 - padding - (idx * gap)
            let rOut = rIn - lineWidth;
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
                <G key={`_progress_of_${idx}_value`}> 
                    <Path
                        x={viewWidth / 2}
                        y={viewWidth / 2}
                        d={fullCirclePath()}
                        fill={fullCircleColor}
                    />
                    <Path
                        rotation={360 - progress * 1.8} //(360 - progress * 360 / 100) / 2 + 180
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
        const { viewWidth } = this.style
        return (
            <Svg width={viewWidth} height={viewWidth}>
                { this.renderArcs() }
            </Svg>
        )
    }
}
