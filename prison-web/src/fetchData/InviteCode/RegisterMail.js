import config from "../../config.json"


const RegisterMail = (props) => {
    fetch(config.SERVER_URL + "api/RegisterMail/send", {
        method: "POST", // or 'PUT'

        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(props),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.statusCode === 200) {
                alert("Dodano cele");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

export default RegisterMail;