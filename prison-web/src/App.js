import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Prison from "./components/Prison/Prison";
import Logout from "./components/Logout/Logout";
import AddCell from "./components/Cell/AddCell";
import CellList from "./components/Cell/CellList";

import RegisterUser from "./components/Register/RegisterUser/Register";
import RegisterAdmin from "./components/Register/RegisterAdmin/RegisterAdmin";
import Navbar from "./components/Navbar/Navbar";
import AddPrisoner from "./components/Prisoner/AddPrisoner";
import ShowPrisoner from "./components/Prisoner/DetailsPrisoner/ShowPrisoner";
import PrisonerList from "./components/Prisoner/PrisonerList";
import React, { Component } from "react";

class App extends Component {
  state = {
    token: null,
    sesionStatus: false,
    roles: "",
  };
  setUser = (token, roles) => {
    this.setState({
      token,
      roles,
      sesionStatus: true
    });
  };
  clearUser = () => {
    this.setState({
      token: null,
      roles: ""
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
    return (
      <div className="Main">
        <Router>
          <Navbar user={this.state.token} roles={this.state.roles} />
          <Switch>
            <Route path="/" exact component={() => <Prison user={this.state.token} />} />
            <Route path="/register" exact component={RegisterUser} />
            <Route path="/register/admin" component={RegisterAdmin} />
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
            {this.state.sesionStatus ? (<div><Route
              path="/addCell"
              component={() => <AddCell userKey={this.state.token} />}
            />
              <Route
                path="/prisoners"
                component={() => <PrisonerList userKey={this.state.token} />}
              />
              <Route
                path="/cell"
                component={() => <CellList userKey={this.state.token} role={this.state.roles} />}
              />
              <Route
                path="/addPrisoner"
                component={() => <AddPrisoner userKey={this.state.token} />}
              />
              <Route
                path="/prisonerInfo/:id"
                component={() => <ShowPrisoner userKey={this.state.token} />}
              />
            </div>) : null}

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
