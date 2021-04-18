import Prisoner from "./Prisoner"
import { useLocation } from "react-router-dom";


const ShowPrisoner = (props) => {
    let data = useLocation();
    console.log(props)

    return (<Prisoner id={data.state.id} />);
}

export default ShowPrisoner;