import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchComments } from "../actions/commentAction";

class Comments extends Component {
  componentWillMount() {
    this.props.fetchComments();
  }
  render() {
    const commentList = this.props.comments.map(comment => (
      <div key={comment.id}>
        <h3>{comment.name}</h3>
        <h3>{comment.email}</h3>
        <p>{comment.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Comments</h1>
        {commentList}
      </div>
    );
  }
}

Comments.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  comments: state.posts.comments
});

export default connect(
  mapStateToProps,
  { fetchComments }
)(Comments);
