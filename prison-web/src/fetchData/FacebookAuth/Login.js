import config from "../../config.json"

const Login = (props) => {
    console.log(props)
    fetch(config.SERVER_URL + "api/Authentication/login-facebook", {
        method: "POST", // or 'PUT'
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(props.accessToken),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.token != null) {

                const user = JSON.stringify(data);
                localStorage.setItem("roles", data.roles);
                localStorage.setItem("token", data.token);
                props.setUser(user, data.roles);
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

export default Login;