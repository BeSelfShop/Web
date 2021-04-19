import config from "../../config.json"

const GetAllReasons = (props) => {
    return (fetch(config.SERVER_URL + "api/Reason", {
        method: "GET", // or 'PUT'

        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            props(data)
        })
        .catch((error) => {
            console.error("Error:", error);
        }));
}

export default GetAllReasons;