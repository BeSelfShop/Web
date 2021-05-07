import config from "../../config.json"


const GetAllCells = (props) => {
    fetch(config.SERVER_URL + "api/PCells", {
        method: "GET",

        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {

            props(data)//setState for cells


        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

export default GetAllCells;