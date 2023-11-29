import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './../../hooks/useAxiosSecure';

const AllEmployee = () => {
   const axiosSecure = useAxiosSecure();

   const { data: users = [] } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const res = await axiosSecure.get('/users');
         return res.data;

      }

   })
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
                        <td>hhhhh</td>
                        <td>jjj</td>
                     </tr>)
                  }

               </tbody>
            </table>
         </div>
      </div>
   );
};

export default AllEmployee;