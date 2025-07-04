import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewServiceRequest()
{
    const navigate=useNavigate();
    const[requests,setRequests]=useState([]);
    
    useEffect(()=> {
            

        //const vendor_id = JSON.parse(localStorage.getItem("loggedVendor")).user_id;
        //alert(vendor_id);
        // fetch("http://localhost:8080/getAllRequestedServices?vendor_id="+vendor_id)
        fetch("http://localhost:8080/getAllRequestedServices")
        .then(resp=>resp.json())
        .then(requests => setRequests(requests))

        },[]);

        function acceptReq (request_id)
    {

           // alert(request_id);
            fetch("http://localhost:8080/acceptReq?request_id="+request_id
            ,{
                mode:'no-cors',
                method:"GET",
                headers:{"content-type":"application/json"}
            }
            )
            .then((resp)=>resp.json())
            .then(resp=>{ 
                //navigate("/vendor_home/viewRequests")
                console.log(resp);
                localStorage.setItem("loggedRequest", JSON.stringify(resp));
             //navigate('/viewRequests');
           

            })
           
    }
    return(
        <div>
            <h1>In View all service requests</h1>
           
            <table className="table table-striped">
                <tr >
                    <th>Customer Name</th>
                    <th>Customer Contact</th>
                    <th>Customer Aadhar NO.</th>
                    <th>Mobile Number</th>
                    <th>Address</th>
                    <th>Request Date</th>
                    <th>Vendor Requested</th>
                    <th>Vendor contact No.</th>
                </tr>
                
                {
                requests.map(exp=>
                            <tr class="info">
                                <td>{exp.user_id.fname} {exp.user_id.lname}</td>
                                <td>{exp.user_id.contact_no}</td>
                                <td>{exp.user_id.aadhar_no}</td>
                                <td>{exp.user_id.contact_no}</td>
                                <td>{exp.user_id.address}</td>
                                <td>{exp.request_date}</td>
                                <td>{exp.vendor_id.fname} {exp.vendor_id.lname}</td>
                                <td>{exp.vendor_id.contact_no}</td>
                                <button type="button" class="btn btn-info" onClick={()=>acceptReq(exp.request_id)}>Approve</button>
                            </tr>         
                        )
                }            
        </table>



            {/* {JSON.stringify(requests)} */}
        </div>

        )
    
        
}