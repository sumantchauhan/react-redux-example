import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import Comments from "./components/Comments";
import Albums from "./components/Albums";
import Users from "./components/Users";

import store from "./store";

class App extends Component {
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange(path) {
    window.location.href = path;
  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          {/* <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <PostForm />
            <hr />
            <Posts />
            <hr />
            <Comments />
          </div> */}
          <div className="App">
            <ul className="header">
              <li onClick={() => this.routeChange("/")}>
                <a className="a" href="/">
                  Posts
                </a>
              </li>
              <li onClick={() => this.routeChange("/comments")}>
                <a className="a" href="/comments">
                  Comments
                </a>
              </li>
              <li onClick={() => this.routeChange("/albums")}>
                <a className="a" href="/albums">
                  Albums
                </a>
              </li>
              <li onClick={() => this.routeChange("/users")}>
                <a className="a" href="/users">
                  Users
                </a>
              </li>
            </ul>
            <hr />
            <div className="switch_components">
              <Switch>
                <Route exact path="/">
                  <Posts />
                </Route>
                <Route path="/comments">
                  <Comments />
                </Route>
                <Route path="/albums">
                  <Albums />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
              </Switch>
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
