 

const BookingsRow = ({bookingCard, handleDeleteBtn, handleConfirm}) => {
  










        
    return (
        <tr>
        <th>
          <label>
            <input onClick={()=>handleDeleteBtn(bookingCard?._id)}  type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={bookingCard?.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{bookingCard?.services}</div>
              <div className="text-sm opacity-50">{bookingCard?.customerName}</div>
            </div>
          </div>
        </td>
        <td>
          {bookingCard?.price}$
        </td>
        <td>{bookingCard?.date}</td>
        <th>{
            bookingCard.status === 'confirm' ?  <span className="font-semibold "> Confirmed</span>  :             <button onClick={()=>handleConfirm(bookingCard?._id)} className="btn btn-ghost btn-xs">Please Confirm</button>
            }

        </th>
      </tr>
    );
};

export default BookingsRow;