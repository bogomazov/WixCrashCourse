import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Navigation } from "react-native-navigation";

class PostsList extends Component {
  static propTypes = {
    componentId: PropTypes.string
  };

  static options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: "addPost",
            text: "Add"
          }
        ]
      }
    };
  }

  constructor(props) {
    super(props);

    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "addPost") {
      this.showAddPostModal();
    }
  }

  showAddPostModal() {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: "blog.AddPost"
            }
          }
        ]
      }
    });
  }

  pushViewPostScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "blog.ViewPost",
        passProps: {
          somePropToPass: "Some props that we are passing"
        },
        options: {
          topBar: {
            title: {
              text: "Post1"
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={this.pushViewPostScreen}>
          PostsList Screen
        </Text>
      </View>
    );
  }
}

export default PostsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3EDFF"
  },
  text: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
  }
});
