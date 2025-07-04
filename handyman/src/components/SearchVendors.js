import React, { useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchVendors()
{
    const init={
       
        category_id:0,
        area_id:0       
     }


    const reducer=(state,action)=>{
            switch(action.type)
            {
                case 'update':
                    return {...state,[action.fld]:action.val}

                case 'reset':
                        return init;
            }
    }

        const [categories, setCategory] = useState([]);

        const[areas,setAreas]=useState([]);

       const[info,dispatch]=useReducer(reducer,init);

        const[cities,setCities]=useState([]);
        const [vendors, setVendors]=useState([]); 
        useEffect(()=> {
            

            fetch("http://localhost:8080/getAllCategory")
            .then(resp=>resp.json())
            .then(categories => setCategory(categories))

            fetch("http://localhost:8080/getAllCity")
            .then(resp=>resp.json())
            .then(allcities => setCities(allcities))

            },[]);


            const getAreas = (id) => {
                console.log(id)
                fetch("http://localhost:8080/getAll?city_id="+id)
                .then(resp=>resp.json())
                .then(ars => setAreas(ars))
            }           
            function raiseRequest(vendor_id)
            {

                //const cust_id = JSON.parse(localStorage.getItem("cust_id")).user_id;
                const cust_id = JSON.parse(localStorage.getItem("loggedCustomer")).user_id;
                alert("Customer id"+cust_id)
                alert("Vendor id"+vendor_id);
                //localStorage.setItem("loggedVendor", JSON.stringify(obj));
                fetch("http://localhost:8080/raiseRequest?cust_id="+cust_id+"&vendor_id="+vendor_id)
                .then((resp)=>resp.json())
                .then(resp=>{console.log(resp);})

    }


            const sendData=(e)=>{
                e.preventDefault();
                const reqOptions={
                    method:"POST",
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(info)
                }
                   fetch("http://localhost:8080/searchvendors",reqOptions)
                   .then(resp=> {
                    if(resp.ok)
                    {                
                        return resp.json();                
                    }              
                    else
                    {              
                        throw new Error("server error");
                    }
                        
            })
            .then(obj => setVendors(obj))
        .catch((error)=>alert("server error.Try later")) 
            }

    return(
          <div>
            <form>
             <div className="mb-3">
            <label htmlFor="city_id" className="form-label" >Select your city : </label>
        
             <select name="city_id" id="city_id" onChange={(e)=>getAreas(e.target.value)} >
           
             <option value={0} key={0}> select one </option>
             {
                 cities.map((city)=>
                    {return <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
              })
            }

         </select>
         
                <label htmlFor="area_id" className="form-label">Select your area : </label>
        
                <select name="area_id" id="area_id" onChange={(e)=>dispatch({type:'update',fld:'area_id',val:e.target.value})}>
                <option value={0} key={0}> select one </option>
                    {
                        areas.map((area)=>
                            {return <option key={area.area_id} value={area.area_id}>{area.area_name}</option>
                        })
                    }
               
                </select> 

                <label htmlFor="category_id" className="form-label">Select Category : </label>
        
                <select name="cat_id" id="cat_id" onChange={(e)=>{dispatch({type:'update',fld:'category_id',val:e.target.value})}} >
                    <option value={0} key={0}> select one </option>
                    {
                        categories.map((c)=>
                            {return <option key={c.category_id} value={c.category_id}>
                                             {c.category_name}
                                
                                     </option>
                        })
                    }
                </select>
                
         </div>   
        
         <button type="submit" className="btn btn-primary mb-3"
            onClick={(e)=>{sendData(e)}}>Search Vendors</button>   
        
        <table className="table table-striped" >
            <thead className="thead-primary">
                <tr >
                    <th>Vendor Name</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Area</th>
                    <th>Category</th>
                   
                </tr>
            </thead>
            <tbody>
                {
                vendors.map(exp=>
                            <tr class="info">
                                <td>{exp.fname} {exp.lname}</td>
                                <td>{exp.contact_no}</td>
                                <td>{exp.address}</td>
                                <td>{exp.area_id.city_id.city_name}</td> 
                                <td>{exp.area_id.area_name}</td>
                                <td>{exp.category_id.category_name}</td>
                                {/* <button type="button" class="btn btn-info" onClick={()=>acceptReq(exp.request_id)}>Approve</button> */}
                                
                                <button type="button" className="btn btn-info" onClick={()=>{raiseRequest(exp.user_id)}}>Raise Request</button>
                            </tr>         
                        )
                }   
            </tbody>         
        </table>




            {JSON.stringify(info)}
            {JSON.stringify(vendors)}
        </form>
    </div>  
          
    
    )}