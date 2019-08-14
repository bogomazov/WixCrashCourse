import React, { Component } from "react";
import { View, Text, TextField } from "react-native-ui-lib";
import PropTypes from "prop-types";
import { Navigation } from "react-native-navigation";
import * as postsActions from "../posts.actions";

class AddPost extends Component {
  static propTypes = {
    componentId: PropTypes.string
  };

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);

    this.state = {
      title: "",
      text: ""
    };
  }

  static options() {
    return {
      topBar: {
        title: {
          text: "Add Post"
        },
        rightButtons: [
          {
            id: "saveBtn",
            text: "Save",
            enabled: false
          }
        ],
        leftButtons: [
          {
            id: "cancelBtn",
            text: "Cancel"
            // icon: require("../../icons/x.icon.png")
          }
        ]
      }
    };
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "cancelBtn") {
      Navigation.dismissModal(this.props.componentId);
    } else if (buttonId === "saveBtn") {
      this.onSavePressed();
    }
  }

  onChangeTitle = title => {
    this.setState({ title });
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [
          {
            id: "saveBtn",
            text: "Save",
            enabled: !!title
          }
        ]
      }
    });
  };

  onChangeText = text => {
    this.setState({ text });
  };

  onSavePressed = () => {
    Navigation.dismissModal(this.props.componentId);
    const randomImageNumber = Math.floor(Math.random() * 500 + 1);
    postsActions.addPost({
      title: this.state.title,
      text: this.state.text,
      img: `https://picsum.photos/200/200/?image=${randomImageNumber}`
    });
  };

  render() {
    return (
      <View flex padding-24>
        <Text text40 green10 marginB-12>
          AddPost Screen
        </Text>
        <TextField
          text70
          containerStyle={{ marginBottom: 12 }}
          floatingPlaceholder
          placeholder="Add a Catchy Title"
          onChangeText={this.onChangeTitle}
          floatOnFocus
        />
        <TextField
          text70
          floatingPlaceholder
          placeholder="This is the beginning of a great post"
          onChangeText={this.onChangeText}
          expandable
        />
      </View>
    );
  }
}

export default AddPost;
