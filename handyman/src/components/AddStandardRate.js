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
            
            //localStorage.setItem("category_storage",JSON.stringify(categories));

           /* const id = JSON.parse(localStorage.getItem("category_storage")).category_id;
            console.log(id);
            alert(id);
            fetch("http://localhost:8080/getAll?category_id="+id)
            .then(resp=>resp.json())
            .then(services => setServices(services))*/
            },[]);
            
         //const id = JSON.parse(localStorage.getItem("category_storage")).category_id;
         //alert(id);
       

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
            <h1 className=""> Adding/Update Standard rate</h1>
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
                {/*<select name="service_id" id="service_id">
                <option value={0} key={0}> select one </option>
                    {
                        services.map((service)=>
                            {return <option key={service.service_id} value={service.service_id}>{service.service_name}</option>
                        })
                    }
               
                </select> */}
               {/* <table >
                    {
                    services.map(service=> {
                        return (
                        <tr key={service.service_id}>
                            <td> {service.service_name} </td>
                            <td> {service.service_description} </td>
                            <td> {service.service_rate} </td>
                            <td>  </td>
                        </tr> )
                    })
                    }       
                </table>*/}


                <table className="table">
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
                                    {/* <td>{JSON.stringify(service)}</td>  */}
                                        <td><button onClick={(e)=>{selectService(e,service)}}> Edit rate </button> </td> 
                                        
                                    </tr> )
                                })
                            }
                        </tbody>


                        


                </table>
            

                
          {/* 
             const DisplayData=categories.map((c)=>
                    {
                        <tr>
                            <td>{c.category_id}</td>
                            <td>{c.category_name}</td>
                        </tr>
                    }
                        
                )
                */}
           {/*} <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>category_id</th>
                    <th>category Name</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
            </div>
            */}
          
      
            </form>
          </div>  
          

    //);
    
    )}