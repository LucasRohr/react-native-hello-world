import React from "react";
import { View, Text, Button, ImageBackground, TouchableOpacity } from "react-native";
import { COUNTER_STYLE } from "./counter.style";

interface State {
    count: number
}

export class CounterComponent extends React.Component<any, State> {

    state: State = {
        count: 0
    }

    render() {
        return(
            <ImageBackground source={require('../assets/math_wall.jpg')} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={COUNTER_STYLE.text}>Bem-vindo ao contador!</Text>
                <Text style={COUNTER_STYLE.text}>{this.state.count}</Text>
                <TouchableOpacity style={COUNTER_STYLE.sumButton} onPress={this.sumOne}>
                    <Text >+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={COUNTER_STYLE.subButton} onPress={this.subOne}>
                    <Text >-</Text>
                </TouchableOpacity>

            </ImageBackground>
        )
    }

    sumOne =() => {

        this.setState({
            count: this.state.count += 1
        })
        
    }

    subOne =() => {

        this.setState({
            count: this.state.count -= 1
        })
        
    }



}