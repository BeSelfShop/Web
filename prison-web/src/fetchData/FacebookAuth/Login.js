import config from "../../config.json"

const Login = (props) => {
    console.log(props.accessToken)
    return (
        fetch("http://localhost:5000/api/externalauth/facebook", {
            method: "POST", // or 'PUT'

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(props.accessToken),
        })
            .then((response) => response.json())
            .then((data) => {
                let newdata = data.replace(/['"]+/g, '');
                localStorage.setItem("roles", "User");
                localStorage.setItem("token", newdata);
                props.setUser(newdata, "User")

            })
            .catch((error) => {
                console.error("Error:", error);
            }))
}

export default Login;