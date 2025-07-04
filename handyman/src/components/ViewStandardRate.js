import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddStandardRate()
{

    const navigate = useNavigate();
        const [categories, setCategory] = useState([]);

        const [services, setServices] = useState([]);

        useEffect(()=> {
            

            fetch("http://localhost:8080/getAllCategory")
            .then(resp=>resp.json())
            .then(categories => setCategory(categories))
            },[]);
            

        const getServices = (id) => {
            console.log(id)
            fetch("http://localhost:8080/getAllServices?category_id="+id)
            .then(resp=>resp.json())
            .then(srs =>
                {
                    setServices(srs)
                    localStorage.setItem("services_stoarge",JSON.stringify(srs)); 
                } )
        }
        
        const selectService=(e,s) => {
            e.preventDefault();
            console.log("in select service")
            console.log(JSON.stringify(s))
            localStorage.setItem("sel_service",JSON.stringify(s));
            navigate("/admin_home/editrate")
        }

    return(
          <div>
            <form>
            <h1 className=""> View Standard rate</h1>
            <h2></h2>
            <select name="cat_id" id="cat_id" onChange={(e)=>{getServices(e.target.value)}} >
                    <option value={0} key={0}> select one </option>
                    {
                        categories.map((c)=>
                            {return <option key={c.category_id} value={c.category_id}>
                                             {c.category_name}
                                
                                     </option>
                        })
                    }
            </select>

                <table className="table table-striped" >
                        <thead className="thead-primary">
                            <tr>
                                <th>Service Name</th>
                                <th>Description</th>
                                <th>Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map(service=> {
                                    return (
                                    <tr key={service.service_id}>
                                        <td> {service.service_name} </td>
                                        <td> {service.service_description} </td>
                                        <td> {service.service_rate} </td>
                                    </tr> )
                                })
                            }
                        </tbody>                      

                </table>       
      
            </form>
          </div>  
          

 
    
    )}