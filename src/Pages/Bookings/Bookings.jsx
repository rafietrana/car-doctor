import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "./BookingsRow";



import chackOutImg from '../../assets/images/checkout/checkout.png'
 

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
 
    console.log('bookings is', bookings);



 

    const url = `http://localhost:5000/booking?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data =>setBookings(data))
    },[url])





    const handleDeleteBtn =(id) =>{
 


        fetch(`http://localhost:5000/booking/${id}`,{
            method: 'DELETE',
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            



            const filterDeletedData =   bookings.filter(filt => filt._id !== id);
            setBookings(filterDeletedData)

        })


    }



    const handleConfirm = id =>{
        console.log('alhamdulillah your button is now working');
        console.log(id);


 
        
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount >0){
                const remainig = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);



                updated.status = 'confirm'

                const newBookings = [updated, ...remainig];
                   setBookings(newBookings);
            }
        })
    }

    return (
        <div className="mt-5">
            <div>
            <div className="w-full relative mt-5  ">
        <img src={chackOutImg} alt="" />
        <p className="absolute top-[50%] left-48 text-2xl font-bold  text-white z-10">
          My Bookings
        </p>
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#333131] "></div>
      </div>
            </div>





            <div className="mt-8   ">

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
 
        </th>
        <th>Image</th>
        <th>Price</th>
        <th>Data</th>
        <th>Status</th>
 
      </tr>
    </thead>
    <tbody>
 
         {
            bookings.map(bookingCard => <BookingsRow key={bookingCard?._id} handleDeleteBtn={handleDeleteBtn} handleConfirm={handleConfirm} bookingCard={bookingCard}></BookingsRow>)
         }
 
 
    </tbody>
    {/* foot */}
 
  </table>
</div>

 
            </div>
        
        </div>
    );
};

export default Bookings;