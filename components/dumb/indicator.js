import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator
  } from 'react-native-indicators'

export default class Indicator extends Component {
    
    render() {
 
        if(this.props.type === "wave")
            return (
                    <BallIndicator color={this.props.color} size = {this.props.size}/>       
            )
        else if(this.props.type === "bar")
            return (
                    <BarIndicator color={this.props.color} size = {this.props.size}/>       
            )
        else if(this.props.type === "material")
            return (
                    <MaterialIndicator color={this.props.color} size = {this.props.size}/>       
            )
        else if(this.props.type === "pulse")
            return (
                    <PulseIndicator color={this.props.color} size = {this.props.size}/>       
            )
        else
            return (
                    <BarIndicator color={this.props.color} size = {this.props.size}/>       
            )
        

    }
}

