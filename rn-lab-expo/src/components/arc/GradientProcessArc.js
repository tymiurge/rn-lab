import React from 'react'
import { Dimensions,View } from 'react-native'
import Svg, {Defs, Stop, G, Path, LinearGradient, Line} from 'react-native-svg'
import { arc } from 'd3-shape'
import PropTypes from 'prop-types'

const resolveDefaultValue = (obj, propName, defValue) => {
    obj = obj || {}
    return obj.hasOwnProperty(propName) ? obj[propName] : defValue
}

export default class GradientProcessArc extends React.Component {

    static propTypes = {
        progress: PropTypes.number.isRequired,
        style: PropTypes.shape({
            fullCircleColor: PropTypes.string,
            padding: PropTypes.number,
            lineWidth: PropTypes.number,
            lineColor: PropTypes.string,
            viewWidth: PropTypes.number
        })
    }

    constructor(props) {
        super(props)
        const { fullCircleColor, padding, lineWidth, lineColor, viewWidth } = props.style
        this.style = {
            fullCircleColor: fullCircleColor || '#d3d3d3',
            padding: resolveDefaultValue(props.style, 'padding', 20),
            lineWidth: lineWidth || 5,
            lineColor: lineColor || 'red',
            viewWidth: viewWidth || Dimensions.get('window').width    
        }
    }
    
    render() {
        const { progress } = this.props
        const { fullCircleColor, padding, lineWidth, lineColor, viewWidth } = this.style
        let rIn = viewWidth / 2 - padding
        let rOut = viewWidth / 2 - lineWidth - padding;
        let endAngle = progress * 3.6

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
            //<View style={{borderColor: 'grey', borderWidth: 1}}>
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
            //</View>
        )
    }
}
