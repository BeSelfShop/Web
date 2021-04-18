import config from "../../config.json"

const DeletePass = (props) => {

    return (
        fetch(config.SERVER_URL + "api/Pass/" + props.id, {
            method: 'DELETE',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then(res => {
                props.deletePass()

            })


    )
}

export default DeletePass;