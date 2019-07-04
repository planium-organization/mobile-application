import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

class BarChart extends Component {
   
    render() {
        return (
            <View style={{ width: 77, height: 106, margin: 5 , padding:1, zIndex:0}}>

                
                <View style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    bottom: 0, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    zIndex:1 
                    }}>
                    <Text style={{textAlign:'center'}}>{this.props.children}</Text>
                </View>
                <View style={{
                    flexDirection:'column',
                    //borderColor: '#000',
                    width: '100%',
                    height: '100%',
                    //borderWidth: 2
                    

                }}>
                    
                    <View style={{
                        backgroundColor: this.props.color,
                        width: '100%',
                        height: this.props.percent,
                        borderTopLeftRadius:4,
                        borderTopRightRadius:4
                    }}>

                    </View>
                    <View style={{
                        backgroundColor: this.props.secondColor,
                        width: '100%',
                        height: 100-this.props.percent,
                        borderBottomLeftRadius:4,
                        borderBottomRightRadius:4
                    }}>

                    </View>

                </View>
            </View>
                
        );
    }
}

export default BarChart;
