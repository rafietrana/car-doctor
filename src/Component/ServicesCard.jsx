import { Link } from "react-router-dom";

const ServicesCard = ({dataServices}) => {
 

  return (
    <div>
      <div className="card text-left  bg-base-100 border">
        <figure className="px-10 pt-10">
          <img
            src={dataServices?.img}

            alt="Shoes"
            className="rounded-xl h-[200px] object-cover"
          />
        </figure>
        <div className="card-body  ">
 
          <h2 className="card-title font-popin">{dataServices?.title}</h2>
          <div>
            <span className="text-red-500 font-semibold"> Price :</span>
            <span className="text-red-500">{dataServices?.price}</span>
          </div>
          <div>
            <Link to={`/chackout/${dataServices?._id}`}><button>Book Now</button></Link>
          </div>
 
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
