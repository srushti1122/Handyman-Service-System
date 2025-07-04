import { Link, Routes, Route, Outlet } from "react-router-dom"
import AddStandardRate from "./AddStandardRate"
import LogoutComp from "./Logout"
import EditRate from "./EditRate"
import ApproveVendor from "./ApproveVendor"
export default function AdminHome()
{
    return(
        <div>
             <nav className='navbar navbar-expand-sm bg-light mb-3'>

            <div className='container-fluid'>
            <ul className='navbar-nav'>
            <li className='nav-item'>
               <Link to="approve_vendor" className='nav-link px -3'>Approve vendor's Request</Link>
            </li>
            <li className='nav-item'>
                <Link to="addrate" className='nav-link px -3'>Update Standard rate</Link>
            </li>
            <li className='nav-item'>
                <Link to="add_category" className='nav-link px -3'>Add New Category</Link>
            </li>
            {/* <li className='nav-item'>
                <Link to="/" className='nav-link px -3'>Update Categories</Link>
            </li>
            <li className='nav-item'>
                <Link to="/" className='nav-link px -3'>Generate Reports</Link>
            </li>
            <li className='nav-item'>
                <Link to="/" className='nav-link px -3'>Generate Defaulter List</Link>
            </li>
            <li className='nav-item'>
                <Link to="/" className='nav-link px -3'>Remove service provider</Link>
            </li>
            <li className='nav-item'>
                <Link to="/" className='nav-link px -3'>View Feedback and Rating</Link>
            </li>
            <li className='nav-item'>
                <Link to="/" className='nav-link px -3'>Change Password</Link>
            </li> */}
            <li className='nav-item'>
                <Link to="/logout" className='nav-link px -3'>Logout</Link>
            </li>
            </ul>
        </div>
    </nav>

            
            <Outlet />

        </div>
    )
}