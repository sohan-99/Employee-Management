import { useEffect, useState } from "react";
const useRole = (email) => {
   const [isRole, setIsRole] = useState("");
   const [isLoadingRole, setisLoadingRole] = useState(true);
console.log(email);
   useEffect(() => {
      if (email) {
         fetch(`http://localhost:5000/users/${email}`)
            .then((res) => res.json())
            .then((data) => {
               console.log(data.designation);
               setIsRole(data?.designation);
               setisLoadingRole(false);
            });
      }
   }, [email]);
   return [isRole, isLoadingRole];
};
export default useRole;