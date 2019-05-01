import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from './Card';

class DayColumn extends Component {
    render() {
        return (
            <View style={styles.DayColumnStyle}>
                {/* <Text>{this.props.name}</Text> */}
                {/* card component */}
                {this.props.allCards.map((val)=>{
                    return(
                        <Card card={val}/>
                    )
                })}
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    DayColumnStyle: {
        borderColor: '#8f8f8f',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        paddingTop: 5,
        // width: '33%'
        flex: 1


    }
})

export default DayColumn;