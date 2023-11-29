/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaUtensils } from "react-icons/fa";
import useRole from "../hooks/useRole";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navber/Navbar";
import Loader from "../hooks/Loader";
import Welcome from "../pages/Welcome";

const DashboardLayout = () => {
	const { user, loading } = useContext(AuthContext);
	const [isRole] = useRole(user?.email);
	if (loading) {
		return <Loader></Loader>}



	return (
		<div>
			<Navbar></Navbar>
			<div className="flex">
				{/* dashboard side bar */}
				<div className="w-64 min-h-screen bg-green-600">

					<ul className="menu p-4">
						{isRole === "Admin" && (
							<>
								<li>
									<NavLink to="/dashboard/allemployee">
										<FaHome></FaHome>
										All Employee</NavLink>
								</li>
							</>
						)}

						{isRole === "HR" && (
							<>
								<li>
									<NavLink to="/dashboard/employeeList">
										<FaHome></FaHome>
										Employee List</NavLink>
								</li>
								<li>
									<NavLink to="/dashboard/details">
										<FaCalendar></FaCalendar>
										Details</NavLink>
								</li>
							</>
						)}

						{isRole === "Employee" && (
							<>
								<li>
									<NavLink to="/dashboard/paymenthistory">
										<FaHome></FaHome>
										Payment History</NavLink>
								</li>
								<li>
									<NavLink to="/dashboard/worksheet">
										<FaCalendar></FaCalendar>
										Work Sheet</NavLink>
								</li>
							</>
						)}
						{/* shared navlink */}
						<div className="divider"></div>
						<li>
							<NavLink to="/">
								<FaHome></FaHome>
								Home</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>
								<FaEnvelope></FaEnvelope>
								Contact</NavLink>
						</li>
					</ul>
				</div>
				{/* dashboard content */}
				<div className="flex-1 p-8">
					<Welcome></Welcome>
					<Outlet>

					</Outlet>
				</div>
			</div >
			<Footer></Footer>
		</div>
	);
};

export default DashboardLayout;