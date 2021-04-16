import config from "../../config.json"

const GetPunishment = (props) => {
    console.log(props)

    return (fetch(config.SERVER_URL + "api/Punishment/" + props.id, {
        method: "GET", // or 'PUT'

        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            props.setPunishment(data)
        })
    )
}

export default GetPunishment;