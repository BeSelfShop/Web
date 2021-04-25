import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import LoginFetch from "./../../fetchData/FacebookAuth/Login"

class Facebook extends Component {
    state = {
        test: {
            accessToken: "",
        },

        token: "",
    }
    setAccessToken = (accessToken) => {
        this.setState({
            test: {
                accessToken
            }
        })
        console.log(this.state.test)
    }
    setToken = (token) => {
        this.setState({
            token
        })
    }
    componentClicked = (data) => {
        console.log("data" + data)
    }
    responseFacebook = (response) => {
        this.setAccessToken(response.accessToken)
        let login = { accessToken: this.state.test, setUser: this.props.setUser }
        console.log(login)
        LoginFetch(login)
        console.log(this.state.token)

    }
    render() {
        return (
            <FacebookLogin
                appId="181950557089746"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);
    }
}

export default Facebook;