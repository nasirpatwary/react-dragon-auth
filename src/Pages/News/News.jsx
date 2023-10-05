import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSide from "../Shared/RightSide/RightSide";
import Navber from "../Shared/Navber/Navber";

const News = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                  <h2 className="text-5xl">News Details</h2>
                  <p>{id} </p>
                </div>
                <div>
                  <RightSide></RightSide>
                </div>
            </div>
           
        </div>
    );
};

export default News;