import config from "../../config.json"


const PostPrisoner = (props) => {
    fetch(config.SERVER_URL + "api/Prisoner", {
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
                alert("Dodano więźnia");
                props.resetState()
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

export default PostPrisoner;