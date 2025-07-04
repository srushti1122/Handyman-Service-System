import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function ApproveVendor () {

    const [vendor_req,setVendorReq]=useState([{}]);
    const navigate=useNavigate();

    useEffect(()=>{

        fetch("http://localhost:8080/getVendorsRequest")
        .then(resp=>resp.json())
        .then(obj => {
            localStorage.setItem("vendor_req",JSON.stringify(obj));
            setVendorReq(obj);
        })
    },[])

    function updateStatus (user_id)
    {

            alert(user_id);
            fetch("http://localhost:8080/updateStatus?user_id="+user_id,{
                mode:'no-cors',
                method:"GET",
                headers:{"Content-Type":"application/json"}
            })
            .then((resp)=>resp.json())
            .then(resp=>{
                    console.log(resp);
                    //navigate("/")
                        })

    }



    
    
    return(
        
        <div>
            <h1>Vendor Requests</h1>
            <table className="table table-striped">
                <tr >
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Aadhar NO.</th>
                    <th>user_id</th>
                </tr>
                {
                vendor_req.map(exp=>
                            <tr class="info">
                                <td>{exp.fname} {exp.lname}</td>
                                <td>{exp.contact_no}</td>
                                <td>{exp.aadhar_no}</td>
                                <td>{exp.user_id}</td>
                                <button type="button" class="btn btn-info" onClick={()=>updateStatus(exp.user_id)} >Approve</button>
                                <button type="button" class="btn btn-danger" >Pending</button>
                            </tr>         
                        )
                }            
        </table>
            
        </div>
    )
            }


   {/*<table className="table table-bordered">
                <tr class="danger">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Certification</th>
                    <th>Experience</th>
                </tr>
                <tr class="info">
                                <td>{exp.fname}</td>
                                <td>{exp.lname}</td>
                                <td>{exp.email}</td>
                                <td>Expert</td>
                                <button type="button" class="btn btn-info">Edit</button>
                                <button type="button" class="btn btn-danger" >Delete</button>
                    </tr>
        </table>*/}

        {/*<div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="..." alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">{exp.fname} {exp.lname}</h5>
                                <h6 class="card-text">Certification: {exp.certification}</h6>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">{exp.email}</li>
                                <li class="list-group-item">{exp.mobile}</li>
                                <li class="list-group-item">Experience: {exp.experience}</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div> */}