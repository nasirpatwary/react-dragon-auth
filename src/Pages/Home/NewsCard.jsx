import { Link } from "react-router-dom";

const NewsCard = ({news1}) => {
    const {title,image_url,details,_id } = news1
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-4">
        <figure><img src={image_url } alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
            {
              details .length > 200 ?
            <p>{details.slice(0,200)} <Link to={`/news/${_id}`} 
            className="text-sky-500 text-sky-500">Read more...</Link> </p>:
            <p>{details}</p>
            } 
        </div>
      </div>
    );
};

export default NewsCard;
