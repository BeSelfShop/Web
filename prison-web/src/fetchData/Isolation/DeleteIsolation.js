import config from "../../config.json"

const DeleteIsolation = (props) => {

    return (
        fetch(config.SERVER_URL + "api/isolation/" + props.id, {
            method: 'DELETE',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then(res => {
                props.deleteIsolation()

            })


    )
}

export default DeleteIsolation;