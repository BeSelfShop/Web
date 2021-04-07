const LoadCellComponent = () => {
    const API = "https://wiezienie2021.azurewebsites.net/api/PCells"
    console.log("Success:");
    let dataCell;
    fetch(API, {
        method: "GET",

        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {

            data = dataCell;

        })
        .catch((error) => {
            console.error("Error:", error);
        });
    return (dataCell);
}

export default LoadCellComponent;