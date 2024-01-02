import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteBooking } from "../redux/action";


const Table = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleDelete = (e) =>{
    const id = parseInt(e.currentTarget.id)
    dispatch(deleteBooking(id));
  }
  return (
    <>
      {data.length && (
        <div className="max-w-6xl mx-auto mt-5">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-indigo-400 font-semibold text-sm w-full  text-black rounded-sm"> 
                <tr>
                  <th>Destination From</th>
                  <th>Destination To</th>
                  <th>Journey Date</th>
                  <th>Individuals</th>
                  <th>Class Name</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                    data.map((data,index)=>(
                  <tr key={index} className="bg-indigo-200 text-md font-semibold">
                  <td>{data.from}</td>
                  <td>{data.to}</td>
                  <td>{data.date}</td>
                  <td>{data.individuals}</td>
                  <td>{data.classType}</td>
                  <td><button id={`${data.id}`} onClick={(e) => handleDelete(e)} className="btn-md bg-red-500 text-white"><MdDelete /></button></td>
                </tr>

                    ))
                }
                
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
