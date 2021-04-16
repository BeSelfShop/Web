import config from "../../config.json"

const GetPrisoner = (props) => {
    console.log(props)

    return (fetch(config.SERVER_URL + "api/Prisoner/" + props.id, {
        method: "GET", // or 'PUT'

        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            props.setPrisoner(data)
        })
        .catch((error) => {
            console.error("Error:", error);
        }))
}

export default GetPrisoner;