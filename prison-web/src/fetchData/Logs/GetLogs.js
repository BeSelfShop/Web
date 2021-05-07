import config from "../../config.json"

const GetLogs = (props) => {

    return (fetch(config.SERVER_URL + "api/Logger", {
        method: "GET", // or 'PUT'

        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            props(data);
        })
    )
}

export default GetLogs;