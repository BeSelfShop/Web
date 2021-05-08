import config from "../../config.json"


const GetCell = (props) => {
    fetch(config.SERVER_URL + "api/PCells/" + props.id, {
        method: "GET",

        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            props.setCell(data)
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

export default GetCell;