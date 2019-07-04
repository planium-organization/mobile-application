import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Button } from 'react-native';

class NavBar extends Component {

    render() {
        return (
            <View style={{ width: '100%', height: 60, flexDirection:'row' , justifyContent:'space-around', backgroundColor:'#8f8f8f' , elevation:1 }}>
                <View style={{height:60 , width:60 , flexDirection:'column', justifyContent:'center', elevation:1}}>
                    
                    <Button
                        onPress={() => { this.props.prevFunc() }}
                        title="Prev"
                        color="#841584"
                    ></Button>
                    
                    
                </View>
                <Text style={{textAlign:'center', textAlignVertical: 'center' , fontSize:17}}>{this.props.title}</Text>
                <View style={{ height: 60, width: 60, flexDirection: 'column', justifyContent: 'center' , elevation:1}}>

                    <Button
                        onPress={() => { this.props.nextFunc() }}
                        title="Next"
                        color="#841584"
                    ></Button>


                </View>
            </View>

        );
    }
}

export default NavBar;
