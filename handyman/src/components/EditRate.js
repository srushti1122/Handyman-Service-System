import { useState, useEffect } from "react";

export default function EditRate()
{
    const [ser, setSer] = useState({});
    const [rate,setRate] = useState(0) ;

    /*const sendData = (e) => {
        e.preventDefault();
        const sid = ser.service_id;
        fetch("http://localhost:8080/updateRate/sid/rate")
        //fetch("")
    }*/

    const sendData=(e)=>{
        e.preventDefault();
        const sid = ser.service_id;
        const reqOptions={
            method:"POST",
            headers:{'content-type':'application/json'}
            //body:JSON.stringify(info)
           // body:JSON.stringify({uid:info.uid.value,password:info.password.value})
        }
        alert("http://localhost:8080/updateRate/"+sid+"/"+rate);
        fetch("http://localhost:8080/updateRate/"+sid+"/"+rate,reqOptions)
        //?service_id="+sid+"service_rate="+rate
           // .then(resp=>{console.log(info);})
        
           .then(resp=>{
              if(resp.ok)
              {
                alert("Updated successfully!!!!");
                return resp.text();
              }
              else
                 alert("Updation failed!!!!");
                 
            })
        
    }

    useEffect(()=>{
        const service=JSON.parse(localStorage.getItem("sel_service"));
        setSer(service);
        setRate(service.service_rate)
        },[])


    

    return(
            <div>
            <form>
                    <h1>Welcome to edit rate </h1>
                    <p> {ser && ser.service_name}  </p>
  
                        
                    <input type="number" value={rate}
                    onChange={(e)=>setRate(e.target.value)} />
                    
                   <button onClick={(e)=>{sendData(e)}}> Update </button>

                   {rate}
                   </form>
            </div>

    )
}