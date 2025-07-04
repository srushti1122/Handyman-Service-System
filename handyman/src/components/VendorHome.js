import { Link, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import expertlogo from './expertlogo.jpg'
export default function VendorHome()
{

    const [vendor, setVendor] = useState(null);
//MOnika
    useEffect( () =>{
    const loginid = JSON.parse(localStorage.getItem("loggedUser")).login_id;
      //  alert("http://localhost:8080/getVendor?login_id="+loginid)
        fetch("http://localhost:8080/getVendor?login_id="+loginid)   ////
        .then(resp =>console.log(resp) )
                    //resp.json())
        .then(obj => {
            localStorage.setItem("loggedVendor", JSON.stringify(obj))
            setVendor(obj);
        })
    },[])

    return(
        <div>
             <nav className='navbar navbar-expand-sm bg-light mb-3'>

            <div className='container-fluid'>
            <ul className='navbar-nav'>
            <li className='nav-item'>
               <Link to="viewRequests" className='nav-link px -3'>View Service Requests</Link>
            </li>
            {/* <li className='nav-item'>
                <Link to="update_status" className='nav-link px -3'>Accept/Reject Request and update request status</Link>
            </li> */}
            
            
            {/* <li className='nav-item'>
                <Link to="generate_bill" className='nav-link px -3'>Generate Bill</Link>
            </li>
            <li className='nav-item'>
                <Link to="pay_per_transaction" className='nav-link px -3'>Pay to system per trasaction</Link>
            </li> */}
            <li className='nav-item'>
                <Link to="/logout" className='nav-link px -3'>Logout</Link>
            </li>
            </ul>
        </div>
    </nav>

            <h1 className='bg-primary text-white'>Vendor Home</h1>
            <div>
            <img src={expertlogo} class="img-circle circle-border m-b-md" alt="profile" height={150} width="150"/>
            </div>
            <h1>Welcome {vendor && vendor.fname} {vendor && vendor.lname}</h1>

            <Outlet/>

        </div>
    )
}