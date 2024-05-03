import About from "../../Component/About";
import Services from "../../Component/Services";
import Slider from "../../Component/Slider";
import Time from "../../Component/Time";

 

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <About></About>
           <Services></Services>
           <Time></Time>
        </div>
    );
};

export default Home;