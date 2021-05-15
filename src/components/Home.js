import React, { Component } from 'react';
import { PostsList, FriendList } from './';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class Home extends Component {
  render() {
    const { posts } = this.props;
    const { error, inProgress, isLoggedIn } = this.props.auth;
    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="home d-flex justify-content-right">
        <div className="posts ">
          <PostsList />
        </div>
        <FriendList />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Home);
