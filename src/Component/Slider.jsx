import bannerOne from "../assets//images/banner/5.jpg";
import bannerTwo from "../assets//images/banner/2.jpg";
import bannerTree from "../assets//images/banner/3.jpg";
import bannerFour from "../assets//images/banner/4.jpg";

const Slider = () => {
  return (
    <div>
      <div className="carousel my-9 w-full  h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bannerOne} className="w-full object-cover" />
          <div className="absolute z-20 flex justify-end  gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn   bg-red-500">
              ❮
            </a>
            <a href="#slide2" className="btn   bg-red-500">
              ❯
            </a>
          </div>
          <div className=" w-9/12 z-10 absolute text-white font-popin top-[20%] left-10 space-y-3">
            <p className="lg:text-6xl md:text-4xl text-xl font-popin font-extrabold md:w-7/12 w-full">
              Affordable Price For Car Servicing
            </p>
            <p className="font-popin w-full md:w-6/12 ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn px-3 py-2 border bg-red-500 text-white border-white rounded-lg ">
                Discover More
              </button>
              <button className="btn px-3 py-2 border border-white rounded-lg ">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#000000]   z-0"></div>
        </div>
        {/* 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bannerTwo} className="w-full object-cover" />
          <div className="absolute z-20 flex justify-end  gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn   bg-red-500">
              ❮
            </a>
            <a href="#slide3" className="btn   bg-red-500">
              ❯
            </a>
          </div>
          <div className=" w-9/12 z-10 absolute text-white font-popin top-[20%] left-10 space-y-3">
            <p className="lg:text-6xl md:text-4xl text-xl font-popin font-extrabold md:w-7/12 w-full">
              Affordable Price For Car Servicing
            </p>
            <p className="font-popin w-full md:w-6/12 ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn px-3 py-2 border bg-red-500 text-white border-white rounded-lg ">
                Discover More
              </button>
              <button className="btn px-3 py-2 border border-white rounded-lg ">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#000000]   z-0"></div>
        </div>
        {/* 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bannerTree} className="w-full object-cover" />
          <div className="absolute z-20 flex justify-end  gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn   bg-red-500">
              ❮
            </a>
            <a href="#slide4" className="btn   bg-red-500">
              ❯
            </a>
          </div>
          <div className=" w-9/12 z-10 absolute text-white font-popin top-[20%] left-10 space-y-3">
            <p className="lg:text-6xl md:text-4xl text-xl font-popin font-extrabold md:w-7/12 w-full">
              Affordable Price For Car Servicing
            </p>
            <p className="font-popin w-full md:w-6/12 ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn px-3 py-2 border bg-red-500 text-white border-white rounded-lg ">
                Discover More
              </button>
              <button className="btn px-3 py-2 border border-white rounded-lg ">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#000000]   z-0"></div>
        </div>
        {/* 4 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bannerFour} className="w-full object-cover" />
          <div className="absolute z-20 flex justify-end  gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn   bg-red-500">
              ❮
            </a>
            <a href="#slide5" className="btn   bg-red-500">
              ❯
            </a>
          </div>
          <div className=" w-9/12 z-10 absolute text-white font-popin top-[20%] left-10 space-y-3">
            <p className="text-6xl font-popin font-extrabold w-7/12">
              Affordable Price For Car Servicing
            </p>
            <p className="font-popin w-6/12 ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn px-3 py-2 border bg-red-500 text-white border-white rounded-lg ">
                Discover More
              </button>
              <button className="btn px-3 py-2 border border-white rounded-lg ">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#000000]   z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
