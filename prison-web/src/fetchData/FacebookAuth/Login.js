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
                console.log("Success:", data);

                console.log(data.Success)

                props.setToken(data)

            })
            .catch((error) => {
                console.error("Error:", error);
            }))
}

export default Login;