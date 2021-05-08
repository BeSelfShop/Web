import config from "../../config.json"


const PutCell = (props) => {
    console.log(props)
    fetch(config.SERVER_URL + "api/PCells/" + props.id, {
        method: "PUT",

        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(props.data),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.statusCode === 200) {
                alert("Edytowano cele");
                props.refreshList()
                props.closePopup();
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

export default PutCell;