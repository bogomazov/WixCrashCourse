import React, { Component } from "react";
import { View, Text, Button } from "react-native-ui-lib";

import { Navigation } from "react-native-navigation";
import * as postsActions from "../posts.actions";

class ViewPost extends Component {

  onPostDeletePressed = async () => {
    //In here we will request from the server to delete the post
    Navigation.pop(this.props.componentId);
    await postsActions.deletePost(this.props.post.id);
  }

  render() {
    const { title, text } = this.props.post;

    return (
      <View flex spread padding-24>
        <View>
          <Text text30 purple10>
            {title}
          </Text>
          <Text text70 dark20 marginT-12>
            {text}
          </Text>
        </View>
        <Button
          label="Delete Post"
          text80
          red20
          bg-red70
          fullWidth
          onPress={this.onPostDeletePressed}
        />
      </View>
    );
  }
}

export default ViewPost;
