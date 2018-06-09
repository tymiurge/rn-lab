import React from 'react'
import { Dimensions,View } from 'react-native'
import Svg, {Defs, Stop, G, Path, LinearGradient, Line} from 'react-native-svg'
import { arc } from 'd3-shape'
import PropTypes from 'prop-types'

export default class ProgressChart extends Component {
    render() {
        const { width, height, progress} = this.props
        const backgroundColor = 'grey'
        const progressColor = 'green'
        const fullPath = `M 0 0 L ${width} 0`
        const progressPath = `M 0 0 L ${width * progress} 0`

        return (
            <Svg width={width} height={height}>
                <G>
                    <Path
                        d={fullPath}
                        fill={progressPath}
                    />
                    <Path
                        d={dPath}
                        fill={progressColor}
                    />
                </G>
            </Svg>
        );
    }
}
