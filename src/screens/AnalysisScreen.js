import React, { Component } from "react";
import { Button, View, Text, Dimensions } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";
//import {PieChart} from 'react-native-chart-kit';
import BarChart from '../Components/BarChart';
import NavBar from '../Components/NavBar';
import { PieChart } from 'react-native-svg-charts';
import { Dvider, Divider } from 'react-native-elements';
 

class AnalysisScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            selectedSlice: {
                label: '',
                value: 0
            },
            labelWidth: 0
        }
    }
    render() {
        const { labelWidth, selectedSlice } = this.state;
        const { label, value } = selectedSlice;
        const keys = ['biology', 'math', 'physics', 'statistics', 'chemistry'];
        const values = [15, 25, 35, 45, 55];
        const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff', '#ecb3ff']
        const data = keys.map((key, index) => {
            return {
                key,
                value: values[index],
                svg: { fill: colors[index] },
                arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0 },
                onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } })
            }
        })
        const deviceWidth = Dimensions.get('window').width

        return (
            
            <View style={{  flex:1}}>
                <View style={{ justifyContent: 'center', margin:10}}>
                    <PieChart
                        style={{ height: 200 }}
                        outerRadius={'80%'}
                        innerRadius={'45%'}
                        data={data}
                    />
                    <Text
                        onLayout={({ nativeEvent: { layout: { width } } }) => {
                            this.setState({ labelWidth: width });
                        }}
                        style={{
                            position: 'absolute',
                            left: deviceWidth / 2 - labelWidth / 2 - 10,
                            textAlign: 'center'
                        }}>
                        {`${label} \n ${value}`}
                    </Text>
                </View>
                <Divider  style={{backgroundColor:'blue' , margin:10}} />
                <ScrollView style={{ flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <BarChart color='#c61aff' secondColor='#d966ff' percent={30} >biology</BarChart>
                        <BarChart color='#c61aff' secondColor='#d966ff' percent={30} >biology</BarChart>
                        <BarChart color='#c61aff' secondColor='#d966ff' percent={30} >biology</BarChart>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <BarChart color='#600080' secondColor='#d966ff' percent={30} >biology</BarChart>
                        <BarChart color='#600080' secondColor='#c61aff' percent={30} >biology</BarChart>
                        <BarChart color='#600080' secondColor='#c61aff' percent={30} >biology</BarChart>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <BarChart color='red' secondColor='skyblue' percent={30} >biology</BarChart>
                        <BarChart color='red' secondColor='skyblue' percent={30} >biology</BarChart>
                        <BarChart color='red' secondColor='skyblue' percent={30} >biology</BarChart>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default AnalysisScreen;

