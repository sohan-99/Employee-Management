import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './../../hooks/useAxiosSecure';
import { FaTrashAlt} from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";
import Swal from 'sweetalert2'
const AllEmployee = () => {
   const axiosSecure = useAxiosSecure();

   const { data: users = [], refetch } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const res = await axiosSecure.get('/users' );
         return res.data;
      }
   })


   //mack Employee to HR
   const handleMakeHR = user => {
      axiosSecure.patch(`/users/hr/${user._id}`)
         .then(res => {
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
               refetch();
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is an Admin Now!`,
                  showConfirmButton: false,
                  timer: 1500
               });
            }
         })
   }

   // Employees deleted
   const handleFireUser = user => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {

            axiosSecure.delete(`/users/${user._id}`)
               .then(res => {
                  if (res.data.deletedCount > 0) {
                     refetch();
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                     });
                  }
               })
         }
      });
   }
   return (
      <div>
         <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
               {/* head */}
               <thead>
                  <tr>
                     <th></th>
                     <th>Name</th>
                     <th>Designation</th>
                     <th> Make HR</th>
                     <th>Fire</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     users.map((user, index) => <tr key={user._id}>
                        <th>{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.designation}</td>
                        <td>
                           {user.designation === 'HR' ? <div className="btn btn-ghost btn-lg bg-orange-500"><TiTickOutline /></div> : <button
                              onClick={() => handleMakeHR(user)}
                              className="btn btn-lg bg-orange-500">
                              {/* <FaUsers className="text-white text-2xl"></FaUsers> */}
                              <AiFillEdit />
                           </button>}
                        </td>
                        <td>
                           <button
                              onClick={() => handleFireUser(user)}
                              className="btn btn-ghost btn-lg">
                              <FaTrashAlt className="text-red-600"></FaTrashAlt>
                           </button>
                        </td>
                     </tr>)
                  }

               </tbody>
            </table>
         </div>
      </div>
   );
};

export default AllEmployee;