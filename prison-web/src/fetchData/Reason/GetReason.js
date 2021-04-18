import config from "../../config.json"

const GetReason = (props) => {
    console.log(props.id)
    return (fetch(config.SERVER_URL + "api/Reason/" + props.id, {
        method: "GET", // or 'PUT'

        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            props.setReason(data)
        })
        .catch((error) => {
            console.error("Error:", error);
        })
    )
}

export default GetReason;