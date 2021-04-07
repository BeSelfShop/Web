import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Prison from "./components/Prison/Prison";
import Logout from "./components/Logout/Logout";
import Cell from "./components/Cell/Cell";
import CellList from "./components/Cell/CellList";

import RegisterUser from "./components/Register/RegisterUser/Register";
import RegisterAdmin from "./components/Register/RegisterAdmin/RegisterAdmin";
import Navbar from "./components/Navbar/Navbar";
import AddPrisoner from "./components/Prisoner/AddPrisoner";
import React, { Component } from "react";

class App extends Component {
  state = {
    token: null,
    sesionStatus: false,
    roles: "",
  };
  setUser = (token, roles) => {
    console.log(localStorage.getItem("token"));

    this.setState({
      token,
      roles,
    });
  };
  clearUser = () => {
    this.setState({
      token: null,
    });
  };
  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      this.setState({
        token,
        sesionStatus: true,
        roles: localStorage.getItem("roles"),
      });
    }
  };

  render() {
    console.log(this.state.token);
    return (
      <div className="Main">
        <Router>
          <Navbar user={this.state.token} />
          <Switch>
            <Route path="/register" exact component={RegisterUser} />
            <Route path="/register/admin" component={RegisterAdmin} />
            <Route
              path="/cell"
              component={() => <Cell userKey={this.state.token} />}
            />
            <Route
              path="/cellList"
              component={() => <CellList userKey={this.state.token} />}
            />
            <Route
              path="/prisoner"
              component={() => <AddPrisoner userKey={this.state.token} />}
            />
            <Route path="/" exact component={Prison} />
            <Route
              path="/login"
              component={() => (
                <Login setUser={this.setUser} user={this.state.token} />
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
