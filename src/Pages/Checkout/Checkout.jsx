import { useLoaderData } from "react-router-dom";
import checkOutImg from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const services = useLoaderData();
  console.log("services is", services);


  const {price, service_id, title, img} = services;


  const {user} = useContext(AuthContext)


 
  

 const handleBookNowBtn = e=>{
       e.preventDefault();
      const form = e.target;
      const name =   form.name.value;
      const date = form.date.value;
      const email = form.email.value;
 

      


       const order ={
            customerName : name,
            email,
            date,
            price: price,
            services: title,
            services_id: service_id,
            img

       }
      


       console.log('order is', order);
 


       fetch('http://localhost:5000/booking', {
           method: 'POST',
           headers:{
            'content-type': 'application/json'
           },
           body: JSON.stringify(order)
       })
       .then(res =>res.json())
       .then(data =>{
        console.log(data);
        if(data.insertedId){
          alert('sucessfully created data')
        }
       })


 }

  return (
    <div>
      <div className="w-full relative mt-5  ">
        <img src={checkOutImg} alt="" />
        <p className="absolute top-[50%] left-48 text-2xl font-bold  text-white z-10">
          Checkout Page
        </p>
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#333131] "></div>
      </div>
      <div className="my-14 bg-gray-100 p-24">
        <form onSubmit={handleBookNowBtn}>
          <div className="space-y-5">
            <div className="flex gap-5 ">
              <input
                className="w-1/2 px-3 py-2 rounded-lg outline-none"
                name="name"
                type="text"
                placeholder="First Name"
              />
              <input
                className="w-1/2 px-3 py-2 rounded-lg outline-none"
                name="date"
                type="date"
                placeholder="Book Date"
              />
            </div>
            <div className="flex gap-5 ">
              <input
                className="w-1/2 px-3 py-2 rounded-lg outline-none"
                name="amount"
                type="text"
                placeholder="Amount"
                defaultValue={services?.price + 'taka'}
              />
              <input
              defaultValue={user?.email}
                className="w-1/2 px-3 py-2 rounded-lg outline-none"
                name="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
 
            <div>
              <button className="bg-red-500 text-white w-full rounded-lg px-3 py-2 ">
                {" "}
                Order Confarm
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
