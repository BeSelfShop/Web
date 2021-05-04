import config from "../../config.json"

const PutPrisoner = (props) => {
    console.log(props)
    return (
        fetch(config.SERVER_URL + "api/Prisoner/" + props.id, {
            method: "PUT", // or 'PUT'

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(props.state),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.statusCode === 200) {
                    alert("Edytowano Więźnia");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            }))
}

export default PutPrisoner;