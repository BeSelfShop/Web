import config from "../../config.json"

const GetIsolation = (props) => {
    console.log(props)

    return (fetch(config.SERVER_URL + "api/Isolation/" + props.id, {
        method: "GET", // or 'PUT'

        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            props.setIsolation(data)
        })
    )
}

export default GetIsolation;