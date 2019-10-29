import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/userAction";
import "../css/main.css";

const users = {
  background: "white"
};

class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  render() {
    const userList = this.props.users.map(user => (
      <div className="userList" key={user.id}>
        <div>
          <span>Name: </span> <span>{user.name}</span>
        </div>
        <div>
          <span>User Name: </span> <span>{user.username}</span>
        </div>
        <div>
          <span>Email: </span> <span>{user.email}</span>
        </div>
        <div className="address">
          <span>Addredd: </span>
          <p>
            <span>Street: </span>
            <span>{user.address.street}</span>
          </p>
          <p>
            <span>Suite: </span>
            <span>{user.address.suite}</span>
          </p>
          <p>
            <span>City: </span>
            <span>{user.address.city}</span>
          </p>
          <p>
            <span>Zipcode: </span>
            <span>{user.address.zipcode}</span>
          </p>
        </div>
        <div>
          <span>Phone: </span>
          <span>{user.phone}</span>
        </div>
        <div>
          <span>Website: </span>
          <span>{user.website}</span>
        </div>
        <div>
          <span>Company: </span>
          <p>
            <span>Name: </span>
            <span>{user.company.name}</span>
          </p>
          <p>
            <span>CatchPhrase: </span>
            <span>{user.company.catchPhrase}</span>
          </p>
          <p>
            <span>Business: </span>
            <span>{user.company.bs}</span>
          </p>
        </div>
      </div>
    ));
    return (
      <div>
        <h1>Users</h1>
        {userList}
      </div>
    );
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.posts.users
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Users);
