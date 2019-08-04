import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Users from "./users/Users";
import User from "./users/User";
import Search from "./users/Search";
import Alert from "./navbar/Alert";
import About from "./pages/About";

const REACT_APP_GITHUB_CLIENT_ID = "2829f7c04d2529421d49";
const REACT_APP_GITHUB_CLIENT_SECRET =
  "250c8fceb293e155cb78fb78f7a3196de9f205cc";

class App extends React.Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ ...this.state, alert: { msg, type } });
  };

  searchUsers = async text => {
    this.setState({ ...this.state, loading: true, alert: null });
    const res = await axios(
      `https://api.github.com/search/users?q=${text}&client_id=${REACT_APP_GITHUB_CLIENT_ID}$client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ ...this.state, users: res.data.items, loading: false });
  };

  getUser = async username => {
    this.setState({ ...this.state, loading: true, alert: null });
    const res = await axios(
      `https://api.github.com/users/${username}?client_id=${REACT_APP_GITHUB_CLIENT_ID}$client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ ...this.state, loading: false, user: res.data });
  };

  getUserRepos = async username => {
    this.setState({ ...this.state, loading: true });
    const res = await axios(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${REACT_APP_GITHUB_CLIENT_ID}$client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ ...this.state, repos: res.data });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      isShownClearBtn={
                        this.state.users.length > 0 ? true : false
                      }
                      setAlert={this.setAlert}
                    />
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
                  </>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={this.state.user}
                    loading={this.state.loading}
                    repos={this.state.repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
