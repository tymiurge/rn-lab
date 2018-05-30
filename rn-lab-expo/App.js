'use strict';
import React, {Component} from 'react'
import GradientArc from './src/components/arc/GradientArc'
import GradientProcessArc from './src/components/arc/GradientProcessArc'


export default class Facade extends Component {
  render() {
    return (
        <GradientProcessArc />
    )
  }
}