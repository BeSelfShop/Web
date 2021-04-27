import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import LoginFetch from "./../../fetchData/FacebookAuth/Login"

class Facebook extends Component {
    state = {

        accessToken: "",

    }
    setAccessToken = (accessToken) => {
        this.setState({

            accessToken

        })
    }
    setToken = (token) => {
        this.setState({
            token
        })
    }
    componentClicked = (data) => {
        console.log("data" + data)
        this.setState({
            clicked: true
        })
    }
    responseFacebook = (response) => {
        console.log(response)
        this.setAccessToken(response.accessToken)
        let login = { accessToken: this.state, setUser: this.props.setUser }
        // console.log(login)
        LoginFetch(login)
        console.log(this.state.token)
    }
    render() {
        return (
            <FacebookLogin
                appId="181950557089746"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />
        );
    }
}

export default Facebook;