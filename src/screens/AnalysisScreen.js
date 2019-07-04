import React, { Component } from "react";
import { Button, View, Text, Dimensions } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";
import {PieChart} from 'react-native-chart-kit';
import BarChart from '../Components/BarChart';
import NavBar from '../Components/NavBar';


const screenWidth = Dimensions.get('window').width

class AnalysisScreen extends Component {

    static navigationOptions = {
        // headerTitle: (
        //     <View
        //         style={{
        //             flex: 1,
        //             margin: 5,
        //             flexDirection: "row"
        //         }}
        //         >
        //         <View style={{ width: 100 }}>
        //             <Button style={{}} title="Prev" onPress={() => { }} />
        //         </View>
        //         <Text
        //             style={{
        //                 flex: 1,
        //                 fontSize: 16,
        //                 textAlignVertical: "center",
        //                 textAlign: "center"
        //             }}
        //         >
        //             Time Table
        //         </Text>
        //         <View style={{ width: 100 }}>
        //             <Button style={{}} title="Next" onPress={() => { }} />
        //         </View>
        //     </View>
        // )
    };
    render() {
        const data = [
            { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
        ];
        const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            //strokeWidth: 2 // optional, default 3
        }
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" , flexDirection:'column'}}>
                <NavBar title={'This Week'} prevFunc={() => {}} nextFunc={() => {}}/>
                <ScrollView style={{ flex: 2 , borderColor:"#000"}} >
                    <View style={{paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}}>
                        <PieChart
                            data={data}
                            width={screenWidth-10}
                            height={400}
                            chartConfig={chartConfig}
                            accessor="population"
                            backgroundColor="transparent"
                            //paddingLeft="15"
                            doughnut={true}
                            absolute
                        />
                       
                    </View>
                    
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                            <BarChart color='blue' secondColor='skyblue' percent={30} >biology</BarChart>
                            <BarChart color='red' secondColor='skyblue' percent={30} >biology</BarChart>
                            <BarChart color='red' secondColor='skyblue' percent={30} >biology</BarChart>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <BarChart color='red' secondColor='skyblue' percent={30} >biology</BarChart>
                            <BarChart color='red' secondColor='skyblue' percent={30} >biology</BarChart>
                            <BarChart color='red' secondColor='skyblue' percent={30} >biology</BarChart>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                            <BarChart color='red' secondColor='skyblue' percent={30} >biology</BarChart>
                            <BarChart color='red' secondColor='skyblue' percent={30} >biology</BarChart>
                            <BarChart color='red' secondColor='skyblue' percent={30} >biology</BarChart>
                        </View>

                        
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default AnalysisScreen;
