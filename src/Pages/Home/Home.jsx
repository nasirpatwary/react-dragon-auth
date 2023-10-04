import Header from "../Shared/Header/Header"
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navber from "../Shared/Navber/Navber"
import RightSide from "../Shared/RightSide/RightSide";
import New from "./New";
const Home = () => {
    return (    
        <div>
            <Header></Header>
            <New></New>
            <Navber></Navber>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="">
              <LeftSide></LeftSide>
            </div>
            <div className="md:col-span-2 border">
                <h2 className="text-4xl">News coming soon...</h2>
            </div>
            <div className="border">
               <RightSide></RightSide>
            </div>
           </div>
        </div>
    );
};

export default Home;