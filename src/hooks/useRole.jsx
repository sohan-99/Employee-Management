import { useEffect, useState } from "react";
const useRole = (email) => {
   const [isRole, setIsRole] = useState("");
   const [isLoadingRole, setisLoadingRole] = useState(true);
   useEffect(() => {
      if (email) {
         fetch(`https://employee-management-server-two.vercel.app/users/${email}`)
            .then((res) => res.json())
            .then((data) => {
               setIsRole(data?.designation);
               setisLoadingRole(false);
            });
      }
   }, [email]);
   return [isRole, isLoadingRole];
};
export default useRole;