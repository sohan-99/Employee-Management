/* eslint-disable no-unused-vars */

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";


const Signup = () => {
   const imgage_hosting_key = import.meta.env.VITE_IMAGE_HOSTIONG_KEY;
   const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgage_hosting_key}`
   const navigate = useNavigate()
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const { createUser, updateUserProfile, setLoading } = useContext(AuthContext)
   const handleGooglePopUp = () => {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
         .then(result => {
            // console.log(result.user);
            const user = result.user;
            socialsignin(user?.displayName, user?.email, user?.photoURL);
            // console.log(user);
            toast.success('Successfully Login!');
            // You can navigate the user here after successful login if needed.
            navigate(location?.state ? location.state : '/')
         })
         .catch(error => {
            console.log(error);
            toast.error(error.message);
         });
   };


   const handRegister = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const name = form.get('name');
      const photo = form.get('photo');
      const password = form.get('password');
      const salary = form.get('salary');
      const accno = form.get('accno');
      const designation = e.target.designation.value;
      // console.log(email, photo, name, password, designation, accno, salary);

      // Validate  password
      if (password.length < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+[\]{};':"\\|,.<>?]/.test(password)) {
         toast.error("Password does not meet requirements.");
         return;
      }

      // Image Upload
      const image = e.target.photo.files[0];
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=c104f728187c469b2499aec8f224a408`;

      fetch(url, {
         method: "POST",
         body: formData,
      })
         .then((res) => res.json())
         .then((imageInfo) => {
            // create user
            createUser(email, password)
               .then(result => {
                  saveUser(name, email, designation, imageInfo.data.display_url, salary, accno);
                  updateUserProfile(name, imageInfo.data.display_url)
                     .then(data => {
                        navigate("/")
                        setLoading(false)
                     })
                     .catch(error => {
                        console.log(error.message);
                     })
               })
               .catch(error => {
                  toast.error(error.message);
               })
         })


   }
   // data sent to database in  form 
   const saveUser = (name, email, designation, photo, salary, accno) => {
      const user = {
         name: name,
         email: email,
         designation: designation,
         image: photo,
         salary: salary,
         bank_account_no: accno,
      };
      fetch("http://localhost:5000/users", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(user),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.acknowledged) {
               toast.success("Created user succesfully...!");
            }
         })
         .catch((error) => console.error(error));
   };

   // data sent to database in popup sign up 
   const socialsignin = (name, email, image) => {
      const user = {
         name: name,
         email: email,
         image: image,
         designation: "Employee",
         salary: '10000',
         bank_account_no: "45967",
      };
      fetch("http://localhost:5000/users", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(user),
      })
         .then((res) => res.json())
         .then((data) => {
            // console.log(data);
         })
         .catch((error) => console.error(error));
   };

   return (
      <div className="my-6">
         <div className="mt-14 mb-9 flex flex-col items-center justify-center">
            <div className="bg-stone-300 lg:max-w-lg w-[80%] md:w-[75%] lg:w-[85%]  p-8 rounded-lg shadow-lg">
               <h1 className="lg:text-4xl md:text-2xl font-extrabold text-center text-gray-600 mb-6">
                  Signup
               </h1>
               <h4 className="text-center text-lg font-medium">Create a new account</h4>
               <form onSubmit={handRegister} className="space-y-4">
                  {/* .................name.....................  */}
                  <div>
                     <label className="block text-black lg:text-lg md:text-base font-medium">Name</label>
                     <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                        required
                     />
                  </div>
                  {/* .................image.....................  */}
                  <div>
                     <label className="block text-black lg:text-lg md:text-base   font-medium">Photo URL</label>

                     <input
                        type="file"
                        name="photo"
                        placeholder="Photo URL"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                     />
                  </div>
                  {/* <div>
                     <label htmlFor="image" className="block mb-2 text-sm">
                        Select Image:
                     </label>
                     <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        required
                     />
                  </div> */}
                  {/* .................email.....................  */}
                  <div>
                     <label className="block text-black lg:text-lg md:text-base font-medium">Email</label>
                     <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                        required
                     />
                  </div>
                  {/* .................designation.....................  */}
                  <div>
                     <label htmlFor="email" className="block mb-2 text-sm">
                        Select profile type
                     </label>
                     <select
                        name="designation"
                        className="select select-bordered  bg-gray-200 focus:outline-green-500 text-gray-900 w-full "
                     >
                        <option disabled >
                           Select profile type
                        </option>
                        <option value='Employee'>Employee</option>
                        <option value='HR'>HR</option>
                     </select>
                  </div>
                  {/* ===================account no==================== */}
                  <div>
                     <label className="block text-black lg:text-lg md:text-base  font-medium">Bank Account Number</label>

                     <input
                        type="text"
                        name="accno"
                        placeholder="bank_account_no"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                        required
                     />
                  </div>
                  {/* ==============salary================= */}
                  <div>
                     <label className="block text-black lg:text-lg md:text-base  font-medium">Salary</label>

                     <input
                        type="text"
                        name="salary"
                        placeholder="salary"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                        required
                     />
                  </div>
                  {/* .................password.....................  */}
                  <div>
                     <label className="block text-black lg:text-lg md:text-base  font-medium">Password</label>

                     <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                        required
                     />
                  </div>
                  <div >
                     <button className="bg-gray-600 hover:bg-gray-700 text-white lg:text-xl font-semibold py-3 px-6 rounded-full transition duration-300 ">
                        SignUp
                     </button>
                  </div>
               </form>
               <button
                  onClick={handleGooglePopUp}
                  className="bg-slate-500 hover:bg-slate-600 mt-6 lg:text-xl font-semibold text-white py-3 px-6 rounded-full transition duration-300 ">
                  Google SignUp
               </button>
               <p className="text-center mt-4 text-black text-base font-medium">
                  Already have an account?{" "}
                  <Link className="text-blue-600 font-semibold text-lg" to="/signin">
                     Signin here
                  </Link>
               </p>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default Signup;