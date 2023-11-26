/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme]);

    const handleTogol = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light")
        }
    };

    const links =
        <>
            <li className="text-xl font-semibold "><NavLink to='/'>Home</NavLink></li>
            <li className="text-xl font-semibold "><NavLink to='/about'>About Us</NavLink></li>
            <li className="text-xl font-semibold "><NavLink to='/contact'>Contact us </NavLink></li>
            <li className="text-xl font-semibold "><NavLink to='/dashboard'>Dashboard</NavLink></li>

        </>
    return (
        <div className="navbar bg-slate-300 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52">
                        {links}
                    </ul>
                </div>

                <Link to='/'>
                    <div className="flex lg:space-x-1">

                        <img className="rounded-full" src="https://i.ibb.co/74dGgmy/rsz-11rsz-original-ccdca44038291000ff01aaf434d99fb5.jpg" alt="" />
                        <h2 className="lg:text-2xl text-black md:text-2xl text-lg default:hidden mt-3 lg:font-bold md:font-bold font-medium">
                            Innovations</h2>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 rounded-full">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="swap swap-rotate">
                    <input
                        type="checkbox"
                        onChange={handleTogol}
                        checked={theme === "light" ? false : true}
                    />
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                </label>
                {/* <div className=" mr-2">
                <div >
                    {user && user.uid ? (
                        <div className="flex   items-center">
                            <p className="text-lg mr-3 font-extrabold">{user.displayName}</p>
                            <img className="w-12 h-12 rounded-full border-4 border-green-400" src={user.photoURL} alt="User Profile" />
                        </div>
                    ) : (
                        <div className="avatar offline">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/4FDQMgt/user.png" />
                            </div>
                        </div>

                    )
                    }
                </div>
            </div> */}
                {/* {
                user ?
                    <div className="lg:text-xl lg:font-semibold lg:mr-9">
                        <button onClick={handleSignOut} className="btn btn-info text-white rounded-full">Sign Out</button>
                    </div>
                    :
                    <Link to='/login'>
                        <button className="btn rounded-full btn-info text-white lg:text-xl lg:font-semibold">SignIn</button>
                    </Link>
            } */}
                <Link to='/signin'>
                    <button className="btn rounded-full bg-slate-400 text-white lg:text-xl lg:font-semibold">SignIn</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;