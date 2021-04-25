import config from "../../config.json"

const PostIsolation = (props) => {
    return (
        fetch(config.SERVER_URL + "api/isolation", {
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
                    alert("Dodano do izolatki");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            }))
}

export default PostIsolation;