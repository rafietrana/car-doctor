import { useLoaderData } from "react-router-dom";
import checkOutImg from '../../assets/images/checkout/checkout.png'

 
const Checkout = () => {

    const services = useLoaderData();
          console.log('services is', services);

    return (
        <div>
              <div className="w-full relative mt-5  ">
                    <img src={checkOutImg} alt="" />
                    <p className="absolute top-[50%] left-48 text-2xl font-bold  text-white z-10">Checkout Page</p>
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#333131] "></div>
              </div>
              <div className="my-14 bg-gray-100 p-24">
                <form>
                    <div className="space-y-5">
                    <div className="flex gap-5 ">
                           <input className="w-1/2 px-3 py-2 rounded-lg outline-none" type="text" placeholder="First Name"/>
                           <input className="w-1/2 px-3 py-2 rounded-lg outline-none" type="text"  placeholder="Last Name"/>
                      </div>
                    <div className="flex gap-5 ">
                           <input className="w-1/2 px-3 py-2 rounded-lg outline-none" type="text" placeholder="Your Phone"/>
                           <input className="w-1/2 px-3 py-2 rounded-lg outline-none" type="email"  placeholder="Your Email"/>
                      </div>
                    <div className="flex gap-5 ">
                            <textarea className="w-full h-[200px] p-5 outline-node" placeholder="Message">

                            </textarea>
 
                      </div>
                      <div>
                        <button className="bg-red-500 text-white w-full rounded-lg px-3 py-2 "> Order Confarm</button>
                      </div>
                    </div>

                </form>
              </div>
        </div>
    );
};

export default Checkout;