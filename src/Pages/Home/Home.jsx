import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header"
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navber from "../Shared/Navber/Navber"
import RightSide from "../Shared/RightSide/RightSide";
import New from "./New";
import NewsCard from "./NewsCard";
const Home = () => {
    const news = useLoaderData()
    // console.log(news);
    return (    
        <div>
            <Header></Header>
            <New></New>
            <Navber></Navber>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="">
              <LeftSide></LeftSide>
            </div>
            {/* news container */}
            <div className="md:col-span-2 border">
            {
                news.map(news1 =><NewsCard key={news1._id} news1 ={news1} ></NewsCard>)
            }
            </div>
            <div className="border">
               <RightSide></RightSide>
            </div>
           </div>
        </div>
    );
};

export default Home;