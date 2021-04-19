import config from "../../config.json"

const PostPunishment = (props) => {
    console.log(props)
    return (
        fetch(config.SERVER_URL + "api/Punishment", {
            method: "POST", // or 'PUT'

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(props),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                if (data.statusCode === 200) {
                    alert("Dodano karę");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            }))
}

export default PostPunishment;