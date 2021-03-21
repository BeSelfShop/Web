import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Prison from "./components/Prison/Prison";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import React, { Component } from "react";

class App extends Component {
  state = {
    user: "",
    sesionStatus: false,
    roles: "",
  };
  setUser = (user, roles) => {
    console.log(localStorage.getItem("user"));

    this.setState({
      user,
      roles,
    });
  };
  clearUser = () => {
    this.setState({
      user: "",
    });
  };
  componentDidMount = () => {
    const user = localStorage.getItem("user");
    if (localStorage.getItem("user")) {
      const user = localStorage.getItem("user");
      const sesionStatus = true;
      console.log(user, sesionStatus);
      this.setState({
        user,
        sesionStatus: true,
        roles: localStorage.getItem("roles"),
      });
    }
  };

  render() {
    return (
      <div className="Main">
        <Router>
          <Navbar user={this.state.user} />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/" exact component={Prison} />
            <Route
              path="/login"
              component={() => (
                <Login setUser={this.setUser} user={this.state.user} />
              )}
            />
            <Route
              path="/logout"
              component={() => <Logout clearUser={this.clearUser} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
