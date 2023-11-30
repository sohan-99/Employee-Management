import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Details = () => {
   const axiosSecure = useAxiosSecure();
   const { data: allemployee = [] } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const res = await axiosSecure.get('/allemployee');
         return res.data;
      }
   });

   return (
      <div>
         <div>
            <h1 className="md:text-5xl mt-7 text-3xl text-center font-semibold text-purple-800 capitalize">
               {allemployee.length
                  ? "All Employees Details"
                  : "There Are No Employees Details Available !!"}
            </h1>
            {allemployee && (
               <div className="overflow-x-auto mt-9">
                  {allemployee.map((employee, index) => (
                     <div key={index}>
                        <p>Employee Name: {employee?.name}</p>
                        <p>Employee email: {employee?.email}</p>
                        <p>Bank Account: {employee?.bank_account_no}</p>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default Details;
