import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Navigation } from "react-native-navigation";
import * as postsActions from "../posts.actions";

class ViewPost extends Component {

  onPostDeletePressed = async () => {
    //In here we will request from the server to delete the post
    Navigation.pop(this.props.componentId);
    await postsActions.deletePost(this.props.post.id);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>ViewPost Screen</Text>
        <Text>{this.props.somePropToPass}</Text>
        <Button
          title="Delete Post"
          onPress={this.onPostDeletePressed}
          color={"red"}
        />
      </View>
    );
  }
}

export default ViewPost;

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
