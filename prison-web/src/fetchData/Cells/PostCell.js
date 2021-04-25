import config from "../../config.json"


const PostCell = (props) => {
    fetch(config.SERVER_URL + "api/PCells", {
        method: "POST", // or 'PUT'

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
                alert("Dodano cele");
                props.resetState()
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

export default PostCell;