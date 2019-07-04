import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectCard, editCard } from "../store/CardsActions";

class ChannelPost extends Component {
  render() {
    const post = {
      title: "This is the bast book",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "image require",
      date: new Date()
    };

    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: "#8f8f8f",
          marginTop: 3,
          marginLeft: 3,
          marginRight: 3,
          borderBottomStartRadius: 5,
          borderBottomEndRadius: 5,
          borderTopEndRadius: 5
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 100 }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("./../res/images/physics.png")}
            />
          </View>
          <View
            style={{
              flex: 1,
              margin: 4
            }}
          >
            <Text style={{ fontSize: 20 }}>{post.title}</Text>
            <View style={{}}>
              <Text>{post.text}</Text>
            </View>
            <View style={{ borderColor: "grey", borderWidth: 1, margin: 7 }} />
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  textAlign: "right",
                  fontSize: 12,
                  marginRight: 10,
                  marginBottom: 7
                }}
              >
                {post.date.toUTCString()}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ChannelPost;
