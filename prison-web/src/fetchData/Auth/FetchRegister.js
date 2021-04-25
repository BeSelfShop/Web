import config from "../../config.json"


const FetchRegister = (props) => {
    fetch(config.SERVER_URL + "api/Authentication/register", {
        method: "POST", // or 'PUT'
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(props),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            if (data.status !== 400) {
                alert("Zarejestrowano");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

export default FetchRegister;