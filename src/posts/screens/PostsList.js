import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import { Navigation } from "react-native-navigation";

import { connect } from "remx";
import { postsStore } from "../posts.store";
import * as postsActions from "../posts.actions";

class PostsList extends Component {
  static propTypes = {
    componentId: PropTypes.string,
    posts: PropTypes.array
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

  componentDidMount() {
    postsActions.fetchPosts();
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

  pushViewPostScreen = post => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "blog.ViewPost",
        passProps: {
          somePropToPass: "Some props that we are passing",
          post
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

  renderItem = ({ item }) => (
    <Text onPress={() => this.pushViewPostScreen(item)}>{item.title}</Text>
  );

  postKeyExtractor = item => `${item.id}-key`;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>PostsList Screen</Text>
        <FlatList
          data={this.props.posts}
          keyExtractor={this.postKeyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

function mapStateToProps() {
  return {
    posts: postsStore.getPosts()
  };
}

export default connect(mapStateToProps)(PostsList);

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
