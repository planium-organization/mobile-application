import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Card extends Component {
    render() {
        const cardOnLoadProps = StyleSheet.create({ 
            HeightOnLoad: { 
                height: this.props.card.height,
            },
            ColorOnLoad: {
                backgroundColor: this.props.card.color, 
            }
        });
        return (
            <View style={[styles.Main, cardOnLoadProps.HeightOnLoad]}>
                {/* <View style={[cardHeight.CardTextHeight , styles.CardStyle]}> */}
                    {/* card component */}
                    <View style={{flex:1,padding:4}}>
                        <View style={[{ flex:1, borderRadius:8,  }, cardOnLoadProps.ColorOnLoad]}/>
                    </View>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center', flex:11 }}>{this.props.card.name}</Text>
                {/* </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Main: { 
        height: 100, 
        alignSelf: "stretch", 
        borderWidth: 1, 
        borderColor: "#8f8f8f", 
        margin: 3, 
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5,
        borderTopEndRadius: 5,
        flexDirection: 'row',

    },
    CardStyle: {
        //paddingBottom: 5,
        //paddingLeft: 2,
        //paddingRight: 2,
         
        //paddingTop: 5,
        //marginBottom: 5,
        //marginLeft: 2,
        //marginRight: 2,
        //width: '100%',
        //padding:2,
        flex:1        
    },
    // MainStyle: {
    //     paddingLeft: 2,
    //     paddingRight: 2,
    //     paddingTop: 5,
    //     paddingBottom: 5,
    //     height: 80,
    //     //borderWidth: 1,
    //     //borderColor: 'red'

//    },
})

export default Card;