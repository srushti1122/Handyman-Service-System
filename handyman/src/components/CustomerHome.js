import { Link, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
export default function CustomerHome()
{

    const [customer, setCustomer] = useState(null);

    useEffect( () =>{
     const loginid = JSON.parse(localStorage.getItem("loggedUser")).login_id;
    // const loginid = JSON.parse(localStorage.getItem("loggedUser")).user_id;
    //alert("Customer home"+loginid)
        
        fetch("http://localhost:8080/getCustomer?login_id="+loginid)
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj)
            localStorage.setItem("loggedCustomer", JSON.stringify(obj))
           // localStorage.setItem("cust_id",JSON.stringify(obj.user_id))
            setCustomer(obj);
        })
    },[])

    return(
        <div>
             <nav className='navbar navbar-expand-sm bg-light mb-3'>

            <div className='container-fluid'>
            <ul className='navbar-nav'>
            <li className='nav-item'>
               <Link to="view_stdRate" className='nav-link px -3'>View Standard Rate</Link>
            </li>
            <li className='nav-item'>
                <Link to="search_vendors" className='nav-link px -3'>Search different vendors</Link>
            </li>
            {/* <li className='nav-item'>
                <Link to="view_feedback" className='nav-link px -3'>View Feedback and Ratings for vendors</Link>
            </li> */}
            <li className='nav-item'>
                <Link to="raise_request" className='nav-link px -3'>Raise Request</Link>
            </li>
            <li className='nav-item'>
                <Link to="cancel_request" className='nav-link px -3'>Cancel Request</Link>
            </li>
            <li className='nav-item'>
                <Link to="make_payment" className='nav-link px -3'>Make Payment</Link>
            </li>
            <li className='nav-item'>
                <Link to="give_feedback" className='nav-link px -3'>Give Feedback</Link>
            </li>
            <li className='nav-item'>
                <Link to="/logout" className='nav-link px -3'>Logout</Link>
            </li>
            </ul>
        </div>
    </nav>

            <h1 className='bg-primary text-white'>Customer Home</h1>
    
            <h1>Welcome</h1>

            <Outlet/>

        </div>
    )
}