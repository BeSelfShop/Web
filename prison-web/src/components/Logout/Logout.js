import React from "react";
import { Redirect } from "react-router";
const Logout = (props) => {
    
  return (
    props.clearUser(),
    localStorage.clear("user"),
    (<Redirect to="/login" />)
  );
};

export default Logout;
