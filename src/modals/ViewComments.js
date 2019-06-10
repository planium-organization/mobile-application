import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Modal,
  TouchableNativeFeedback
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { showComments, hideComments } from "../store/CardsActions";

class ViewCommentsModal extends Component {
  render() {
    const comments = [];
    if (this.props.visibleComments != null) {
      this.props.visibleComments.forEach(element => {
        comments.push(<Text key={0}>{element}</Text>);
      });
    }

    return (
      <Modal visible={this.props.visibleComments != null}>
        {comments}
        <Button title="Close" onPress={() => this.props.hideComments()} />
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    visibleComments: state.cards.visibleComments
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showComments,
      hideComments
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCommentsModal);
