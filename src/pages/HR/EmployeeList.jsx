import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { TbListDetails } from "react-icons/tb";

const EmployeeList = () => {
   const axiosSecure = useAxiosSecure();

   const { data: allemployee = [] } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const res = await axiosSecure.get('/allemployee');
         return res.data;
      }
   })
   return (
      <div>
         <div>
            <h1 className=" md:text-5xl mt-7 text-3xl text-center font-semibold text-purple-800 capitalize">
               {allemployee.length
                  ? " All Employees"
                  : "There Are No Employees Available !!"}
            </h1>
            {allemployee && (
               <div className="overflow-x-auto mt-9 ">
                  <table className="table w-[90%] m-auto bg-white ">
                     <thead>
                        <tr>
                           <th>Si No</th>
                           <th>Employee Image</th>
                           <th>Employee Name</th>
                           <th>Email</th>
                           <th>Verified</th>
                           <th>Bank Account</th>
                           <th>Salary</th>
                           <th>Pay</th>
                           <th>
                              Details
                           </th>
                        </tr>
                     </thead>
                     {allemployee.map((allemployee, index) => (
                        <tbody key={index}>
                           <tr className="hover">
                              <th>{index + 1}</th>
                              <td>
                                 <img
                                    src={allemployee?.image}
                                    className="h-16 w-16 rounded-full"
                                    alt=""
                                 />
                              </td>
                              <td> {allemployee?.name}</td>
                              <td>{allemployee?.email}</td>
                              <td><div className="btn btn-ghost btn-lg bg-orange-500">Verified</div></td>
                              <td><div className="btn btn-ghost btn-lg bg-orange-500">{allemployee?.bank_account_no}</div></td>
                              <td><div className="btn btn-ghost btn-lg bg-orange-500">{allemployee?.salary}</div></td>
                              <td><div className="btn btn-ghost btn-lg bg-orange-500">0000$</div></td>
                              <td>
                                 <div className="btn btn-ghost btn-lg bg-orange-500"><TbListDetails /></div>

                              </td>
                           </tr>
                        </tbody>
                     ))}
                  </table>
               </div>
            )}
         </div>
      </div>
   );
};

export default EmployeeList;