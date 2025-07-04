import React, { useEffect, useState } from "react";
export default function ApproveVendor123()
{

        const [requests, setRequests] = useState([]);

        useEffect(()=> {
            
            const vendor_id = JSON.parse(localStorage.getItem("loggedVendor")).vendor_id;
            fetch("http://localhost:8080/getVendorsRequest?vendor_id="+vendor_id)
            .then(resp=>resp.json())
            .then(req => setRequests(req))
            .then(reqs => localStorage.setItem("requestsForVendor",JSON.stringify(reqs)))
        })
    return(
          <div>
            <table >
                <thead className="thead-primary">

                        <tr>
                                <th> Name </th>
                                <th> Email</th>
                                <th> Contact Number </th>
                                <th> Address</th>
                                <th> Date and Time</th>
                                <th> Status</th>
                        </tr>
                </thead>
                <tbody>
                    {
                        requests.map((req)=>
                            {
                            <tr >
                                <td> {req.user_id.fname} {req.user_id.lname}</td>
                                <td> {req.user_id.email} </td>
                                <td> {req.user_id.contact_no}</td>
                                <td> {req.user_id.address}</td>
                                <td> {req.request_dateTime} </td>
                                <td> {req.request_status} </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

          </div> 
    
    )}
                