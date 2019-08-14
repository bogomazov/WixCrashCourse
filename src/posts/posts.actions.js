import { Platform } from "react-native";

import { postsStore } from "./posts.store";

const localhost = Platform.OS == "android" ? "10.0.2.2" : "localhost";
export async function fetchPosts() {
  console.log("fetchPosts");

  const response = await fetch(`http://${localhost}:3000/posts`);
  const posts = await response.json();
  console.log(posts)
  postsStore.setPosts(posts);
}

export async function addPost(post) {
  const response = await fetch(`http://${localhost}:3000/posts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  });
  const postToAdd = await response.json();
  postsStore.addPost(postToAdd);
}

export async function deletePost(id) {
  await fetch(`http://${localhost}:3000/posts/${id}`, {
    method: "DELETE"
  });
  postsStore.deletePost(id);
}
