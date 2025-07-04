import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LoginComp from './components/LoginComp';
import AdminHome from './components/AdminHome';
import {useSelector} from 'react-redux';
import CustomerReg from './components/CustomerReg';
import VendorReg from './components/VendorReg';
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerHome from './components/CustomerHome';
import LogoutComp from './components/Logout';
import EditRate from './components/EditRate';
import VendorHome from './components/VendorHome';
import ApproveVendor from './components/ApproveVendor';
import AddStandardRate from './components/AddStandardRate';
import ViewStandardRate from './components/ViewStandardRate';
import SearchVendors from './components/SearchVendors';
import ViewServiceRequest from './components/ViewServiceRequest';
import AddCategory from './components/AddCategory';
import Home from './components/Home';

function App() {

  //initial state
  const mystate=useSelector(state=>state.logged);



  return (
    <div className="App">
      <div style={{display:mystate.loggedIn?"none":"block"}}>
      <nav className='navbar navbar-expand-sm bg-light mb-3'>

        <div className='container-fluid'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to="/" className='nav-link px -3'>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to="login" className='nav-link px -3'>Login</Link>
                </li>
                <li className='nav-item'>
                  <Link to="vendor_reg" className='nav-link px -3'>Vendor Registration</Link>
                </li>
                <li className='nav-item'>
                  <Link to="customer_reg" className='nav-link px -3'>Customer Registration</Link>
                </li>
            </ul>
        </div>
      </nav>
     
     
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginComp/>}/>
        <Route path='/customer_reg' element={<CustomerReg/>}/>
        <Route path='/customer_register' element={<CustomerReg/>}/>
        <Route path="/admin_home" element={<AdminHome/>} >
          <Route path="addrate" element={ <AddStandardRate />} />
          <Route path="editrate" element={<EditRate/>} />
          <Route path="approve_vendor" element={<ApproveVendor/>}/>
          <Route path="add_category" element={<AddCategory/>}/>
        </Route>
        <Route path="/vendor_home" element={<VendorHome/>}>
          <Route path="viewRequests" element={<ViewServiceRequest/>}/>
        </Route>
        <Route path="/vendor_reg" element={<VendorReg/>}/>
        <Route path="/customer_home" element={<CustomerHome/>}>
          <Route path="view_stdRate" element={<ViewStandardRate/>}/>
          <Route path="search_vendors" element={<SearchVendors/>}/>
          
        </Route>
        <Route path="/logout" element={<LogoutComp/>}/>
        

       
        
      </Routes>

    </div>
  );
}
<Route path="/login" element={<LoginComp/>}/>
export default App;

