import config from "../../config.json"


const DeleteCell = (props) => {
    fetch(config.SERVER_URL + "api/PCells/" + props.cellId, {
        method: 'DELETE',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then(res => {
            res.json()
            var cells = [...props.state];
            var deletedCells = cells.findIndex(item => item.id === props.cellId);
            cells.splice(deletedCells, 1);
            props.setCells(cells)
        })
        .then(res => console.log(res))
}

export default DeleteCell;