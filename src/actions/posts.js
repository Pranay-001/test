import { APIURLs } from '../helpers/urls';
import { UPDATE_POSTS } from './actionType';
export function fetchPosts() {
  return (dispatch) => {
    const url = APIURLs.fetchPosts();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(updatePost(data.data.posts));
      });
  };
}
export function searchUserPosts(key) {
  key = key.trim().toLowerCase();
  return (dispatch) => {
    const url = APIURLs.fetchPosts();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const posts = Object.values(data.data.posts).map((post) => post);
        const filteredPosts = posts.filter((post) => {
          const name = post.user.name.toLowerCase();
          return name.includes(key);
        });
        // console.log(filteredPosts);
        dispatch(updatePost(filteredPosts));
      });
  };
}
export function updatePost(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
