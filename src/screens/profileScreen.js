import React, { Component } from "react";
import { View, Button } from "react-native";
import { Text } from "react-native-elements";
import { Avatar , Input } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

class ProfileScreen extends Component {
  static navigationOptions = {
    header: null
  };

  onPressSave() {
    let profieInfo = {
      school: this.state.school,
      email: this.state.email,
      majir: this.state.major,
      supervisor: this.state.supervisor
    }
    fetch("url" ,{
      method : "PUT",
      body: JSON.stringify(profieInfo),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }

    });
    console.log(profieInfo);
  };


  render() {
    return (
      
      <View style={{ flex:1 , justifyContent: "center", flexDirection:"column" }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 ,justifyContent:"space-between" }} style={{flex: 1, backgroundColor: "#4A148C", flexDirection: "column" }}>
            <View style={{margin:10 , justifyContent:"center" , alignItems:"center" }}>
              <Avatar
                size="xlarge"
                rounded
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
                
              />
            </View>
            <View style={{ alignItems:"center" , marginBottom:50}} >
              <Input
                leftIcon={
                  <Icon
                    name='user'
                    size={24}
                    color='white'
                    onChangeText={(text) => this.setState( { text })}
                  />
                }
                placeholder='Name'
                inputStyle={{color:"#FFF" , }}

            
          />
            </View>
        </ScrollView>
        <ScrollView style={{flex:1}} >
          <Text style={{ marginLeft: 10  , marginTop:10}}>School</Text>
          <View style={{ alignItems: "center", marginTop: 2 }} >
            <Input
              leftIcon={
                <Icon
                  name='school'
                  size={24}
                  color='black'
                />
              }
              placeholder='School'
              onChangeText={(text) => this.setState({school: text })}

            />
          </View>
          <Text style={{ marginLeft: 10, marginTop: 10}}>Email</Text>

          <View style={{ alignItems: "center", marginTop: 2 }} >
            <Input
              leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='black'
                />
              }
              placeholder='Email'
              onChangeText={(text) => this.setState({ email: text })}

            />
          </View>
          <Text style={{ marginLeft: 10 ,marginTop: 10}}>Major</Text>
          <View style={{ alignItems: "center", marginTop: 2 }} >
            <Input
              leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='black'
                />
              }
              placeholder='Major'
              onChangeText={(text) => this.setState({ major: text })}

            />
          </View>
          <Text style={{ marginLeft: 10, marginTop: 10 }}>Supervisor</Text>
          <View style={{ alignItems: "center", marginBottom: 50, marginTop: 2}} >
            <Input
              leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='black'
                />
              }
              placeholder='Supervisor'
              onChangeText={(text) => this.setState({ supervisor: text })}

            />
          </View>
          <Button

            title="Edit Courses"
            onPress={() => this.props.navigation.navigate("CourseView")}
          />
          <Button

            title="save prof"
            onPress={() => this.onPressSave()}
          />
        </ScrollView>
        
      </View>
    );
  }
}

export default ProfileScreen;
