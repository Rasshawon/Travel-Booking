import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { makeBooking } from "../redux/action";

const Booking = () => {
  const data =useSelector((state) => state.data);
  const size =data.length;
  const dispatch = useDispatch();


  const [bookingData , setBookingData] =useState({});


  const handleChange = (e) => {
    const newBookingData = {...bookingData};
    newBookingData[e.target.name] = e.target.value;
    setBookingData(newBookingData);

  }



  const handleBook = (e) => {
    e.preventDefault();
    //console.log(e.target.value)
    if (size >= 4) {
      alert("Sorry, you can not book more than 4");
    } else 
    if(Object.keys(bookingData).length === 5){ 
      dispatch(makeBooking({...bookingData, id:size + 1}));


    } else{
      alert ("please select data properly")

    }  
    
  };
  return (
    <div className="md:mt-[300px] mt-[180px] mx-4 relative">
      <div className="bg-indigo-200 font-semibold rounded-md max-w-6xl w-full mx-auto">
        <form className="flex flex-col md:flex-row">
          {/* destination from*/}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Destination From</p>
            <div className="flex flex-row">
              <select required onChange={(e) => handleChange(e)}
                name="from"
                id="from"
                className="bg-indigo-100 outline-none p-2 w-full"
              >
                <option value="hidden">Please Select </option>
                <option>Cox Bazar</option>
                <option>St.Martin Island</option>
                <option>Sreemangal</option>
                <option>Sajek Velly</option>
                <option>Bandarban</option>
                <option>Sundarban Mangrove Forest</option>
              </select>
            </div>
          </div>
          {/* destination to*/}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Destination To</p>
            <div className="flex flex-row">
              <select required onChange={(e) => handleChange(e)}
                name="to"
                id="to"
                className="bg-indigo-100 outline-none p-2 w-full"
              >
                <option value="hidden">Please Select </option>
                <option>Cox Bazar</option>
                <option>St.Martin Island</option>
                <option>Sreemangal</option>
                <option>Sajek Velly</option>
                <option>Bandarban</option>
                <option>Sundarban Mangrove Forest</option>
              </select>
            </div>
          </div>
          {/* date*/}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Journey Date</p>
            <input  required onChange={(e) => handleChange(e)}
              type="date"
              name="date"
              className="bg-indigo-100 outline-none p-2 w-full"
            />
          </div>
          {/* Individuals*/}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Individuals</p>
            <div className="flex flex-row">
              <select  required onChange={(e) => handleChange(e)}
                name="individuals"
                id="individuals"
                className="bg-indigo-100 outline-none p-2 w-full"
              >
                <option value="hidden">Please Select </option>
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4 Persons</option>
              </select>
            </div>
          </div>
          {/* Class name*/}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Class Name</p>
            <div className="flex flex-row">
              <select required onChange={(e) => handleChange(e)}
                name="classType"
                id="classType"
                className="bg-indigo-100 outline-none p-2 w-full"
              >
                <option value="hidden">Please Select </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>
          <button onClick={(e) => handleBook(e)}
            type="submit"
            className="bg-blue-600 text-white px-8 py-1 space-x-2 flex items-center rounded-sm"
          >
            <FaPlus className="mr-2" />
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
