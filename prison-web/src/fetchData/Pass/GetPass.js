import config from "../../config.json"

const GetPass = (props) => {
    console.log(props)

    return (fetch(config.SERVER_URL + "api/Pass/" + props.id, {
        method: "GET", // or 'PUT'

        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            props.setPass(data)
        })
    )
}

export default GetPass;