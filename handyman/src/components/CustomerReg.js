// import { useEffect, useReducer, useState } from "react";
// import { useNavigate } from "react-router-dom";
// export default function CustomerReg()
// {
//     const init={
//        // uid:{value:"",error:"",valid:false,touched:false},
//        // pwd:{value:"",error:"",valid:false,touched:false}
//        uid:"",
//        password:"",
//        fname:"",
//        lname:"",
//        gender:"",
//        email:"",
//        contact_no:"",
//        aadhar_no:"",
//        address:"",
//        area_id:0,
//        q_id:0,
//        ans:""

//     }
//     const reducer=(state,action)=>{
//             switch(action.type)
//             {
//                 case 'update':
//                    return {...state,[action.fld]:action.val}

//                 case 'reset':
//                         return init;
//             }
//     }


//     const[info,dispatch]=useReducer(reducer,init);
//     const [qs, setQs] = useState([]) ;
//     const [cities, setCities] = useState([]);
//     const [areas, setAreas] = useState([]);
//    // const [services, setServices] = useState([]);
//     const navigate = useNavigate();


//     const sendData=(e)=>{
//         e.preventDefault();
//         const reqOptions={
//             method:"POST",
//             headers:{'content-type':'application/json'},
//            body:JSON.stringify(info)
           
//         }
        
//         fetch("http://localhost:8080/regCustomer",reqOptions)
//         //.then(resp => console.log(resp))
//         .then(resp=> {
//             if(resp.ok)
//             {                
//                 return resp.text();                
//             }              
//             else
//             {              
//                 throw new Error("server error");
//             }
                
//     })
//         .then(text => text.length? JSON.parse(text) : {})
//         .then(obj=>{
//             alert("Registration successful.Try login");
//             navigate('/login');
//         })     
//         .catch((error)=>alert("server error.Try later"))
    
//     }
//     //const sendData = () =>{}  
    
//     useEffect(()=> {
//         fetch("http://localhost:8080/getAllQuestion")
//         .then(resp=>resp.json())
//         .then(questions => setQs(questions))

//         fetch("http://localhost:8080/getAllCity")
//         .then(resp=>resp.json())
//         .then(allcities => setCities(allcities))

//     },[]);

//     const getAreas = (id) => {
//         console.log(id)
//         fetch("http://localhost:8080/getAll?city_id="+id)
//         .then(resp=>resp.json())
//         .then(ars => setAreas(ars))
//    // alert(id);

//     }

//     return(
//         <div>
//             <h1>Customer Registration</h1>

//             <form>
//             <div className="mb-3">
//                 <label htmlFor="uid" className="form-label">Enter uid : </label>
//                 <input type="text" className="form-control" id="uid" name="uid" placeholder="type your userid here" value={info.uid}
//                 onChange={(e)=>{dispatch({type:'update',fld:'uid',val:e.target.value})}}  />
               
//             </div>

//             <div className="mb-3">
//                 <label htmlFor="password" className="form-label">Enter Password : </label>
//                 <input type="password" className="form-control" id="password" name="password" placeholder="type your password here"  value={info.pwd} 
//                 onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}} />
               
//             </div>

//             <div className="mb-3">
//                 <label htmlFor="fname" className="form-label">Enter First name : </label>
//                 <input type="text" className="form-control" id="fname" name="fname" placeholder="type your first name here" value={info.fname}
//                 onChange={(e)=>{dispatch({type:'update',fld:'fname',val:e.target.value})}}   />
                
//             </div>

//             <div className="mb-3">
//                 <label htmlFor="lname" className="form-label">Enter Last name : </label>
//                 <input type="text" className="form-control" id="lname" name="lname" placeholder="type your last name here" value={info.lname}
//                 onChange={(e)=>{dispatch({type:'update',fld:'lname',val:e.target.value})}}  />
               
//             </div>
        
//             <div>
//             <label htmlFor="gender" className="form-label">Select gender : </label>
//                 <br/><input type="radio" className="form-radio" name="r1" value="Male" 
//                   onChange={(e)=>{dispatch({type:'update',fld:'gender',val:e.target.value})}}/>MALE
//                <br/> <input type="radio" className="form-radio" name="r1" value="female"
//                    onChange={(e)=>{dispatch({type:'update',fld:'gender',val:e.target.value})}}/>FEMALE

//             </div>

//             <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Enter Email : </label>
//                 <input type="email" className="form-control" id="email" name="email" placeholder="type your email here" value={info.email}
//                 onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}  />
                
//             </div>

//             <div className="mb-3">
//                 <label htmlFor="contact_no" className="form-label">Enter Contact number : </label>
//                 <input type="text" className="form-control" id="contact_no" name="contact_no" placeholder="type your contact here" value={info.contact_no}
//                 onChange={(e)=>{dispatch({type:'update',fld:'contact_no',val:e.target.value})}}  />
               
//             </div>

//             <div className="mb-3">
//                 <label htmlFor="aadhar_no" className="form-label">Enter aadhar number : </label>
//                 <input type="text" className="form-control" id="aadhar_no" name="aadhar_no" placeholder="type your aadhar number here" value={info.aadhar_no}
//                 onChange={(e)=>{dispatch({type:'update',fld:'aadhar_no',val:e.target.value})}}  />
                
//             </div>   

//             <div className="mb-3">
//                 <label htmlFor="address" className="form-label">Enter your address : </label>
//                 <input type="textarea" className="form-control" id="address" name="address" placeholder="type your address here" value={info.address}
//                onChange={(e)=>{dispatch({type:'update',fld:'address',val:e.target.value})}}  />
                
//             </div>   
//             <div className="mb-3">
//                 <label htmlFor="city_id" className="form-label">Select your city : </label>
        
//                 <select name="city_id" id="city_id" onChange={(e)=>getAreas(e.target.value)}>
//                     <option value={0} key={0}> select one </option>
//                     {
//                         cities.map((city)=>
//                             {return <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
//                         })
//                     }
//                 </select>
                
//             </div>   

//             <div className="mb-3">
//                 <label htmlFor="area_id" className="form-label">Select your area : </label>
        
//                 <select name="area_id" id="area_id" onChange={(e)=>dispatch({type:'update',fld:'area_id',val:e.target.value})}>
//                 <option value={0} key={0}> select one </option>
//                     {
//                         areas.map((area)=>
//                             {return <option key={area.area_id} value={area.area_id}>{area.area_name}</option>
//                         })
//                     }
               
//                 </select>
                
//             </div>   

//             <div className="mb-3">
//                 <label htmlFor="q_id" className="form-label">Choose security question: </label>
//                 <select className="form-select" name="q_id" id="q_id" onChange={(e)=>dispatch({type:'update',fld:'q_id',val:e.target.value})}>
//                 <option value={0} key={0}> select one </option>
//                     {
//                         qs.map((q)=>
//                             {return <option key={q.q_id} value={q.q_id}>{q.q_text}</option>
//                         })
//                     }
               
//                 </select>
                
               
//             </div>   

//             <div className="mb-3">
//                 <label htmlFor="ans" className="form-label">Enter answer : </label>
//                 <input type="textarea" className="form-control" id="ans" name="ans" placeholder="type your answer here" value={info.ans}
//                 onChange={(e)=>{dispatch({type:'update',fld:'ans',val:e.target.value})}}  />
               
//             </div>      


//             <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>Submit</button>
//             <button type="reset" className="btn btn-primary mb-3" onClick={()=> {dispatch({type:'reset'})}} > Clear </button>
            
//             <div class="row mb-4">
//                 <div class="col">
//                     <a href="#!">Forgot password</a>
//                 </div>
//             </div>
          
//         </form>
//         <p>{JSON.stringify(info)}</p>
//         </div>
//     )
//         }
    
//VALIDATION
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function VendorReg(){

    const init={
        uid:{value:"",error:"",valid:false,touched:false},
        password:{value:"",error:"",valid:false,touched:false},
        fname:{value:"",error:"",valid:false,touched:false},
        lname:{value:"",error:"",valid:false,touched:false},
        gender:{value:"",error:"",valid:false,touched:false},
        email:{value:"",error:"",valid:false,touched:false},
        address:{value:"",error:"",valid:false,touched:false},
        contact_no:{value:"",error:"",valid:false,touched:false},
        aadhar_no:{value:"",error:"",valid:false,touched:false},
        ans:{value:"",error:"",valid:false,touched:false},
        area_id:{value:0,error:"",valid:false,touched:false},
        q_id:{value:0,error:"",valid:false,touched:false},
       // category_id:{value:0,error:"",valid:false,touched:false},
       
    }
    const reducer=(state,action)=>{
            switch(action.type)
            {
                case 'update':
                     return {...state , [action.fld]:
                         {  ...state[action.fld],value: action.value,error: action.error, valid: action.valid,touched: action.touched}}

                case 'reset':
                        return init;
            }
    }



    const [categories, setCategory] = useState([]);
        

    const[info,dispatch]=useReducer(reducer,init);

    const[qs,setQs]=useState([]);

    const[cities,setCities]=useState([]);

    const[areas,setAreas]=useState([]);

    const navigate = useNavigate();

    //VALIDATE FUNCTION
    const validate = (nm,val) => {
         let error = "";
         let valid = false;
         let touched = true;
        switch(nm)
        {
            case 'uid' :
                const exp1 = /^[A-Za-z0-9.@]{5,20}$/
                if(!exp1.test(val))
                {
                   error = "Invalid User name!!!!!!"; 
                   valid = false;                   
                }
                else
                {
                   error ="";
                   valid = true;
                }
                break;
            case 'password' :
                var pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,18}$/
                if(!pattern.test(val))
                {
                   error = "Invalid Password!!!!!"; 
                   valid = false;                   
                }
                else
                {
                   error ="";
                   valid = true;
                }
                break;
            case 'fname' :
                    const fexp = /^[A-Za-z]{2,}$/
                    if(!fexp.test(val))
                    {
                       error = "Invalid First name!!!!!!"; 
                       valid = false;                   
                    }
                    else
                    {
                       error ="";
                       valid = true;
                    }
                    break;
            case 'lname' :
                        const lexp = /^[A-Za-z]{3,}$/
                        if(!lexp.test(val))
                        {
                           error = "Invalid Last name!!!!!!"; 
                           valid = false;                   
                        }
                        else
                        {
                           error ="";
                           valid = true;
                        }
                        break;

               
            case 'email' :
                const eexp = /^[A-Za-z0-9]{5,}@[a-z]{3,12}\.[a-z]{2,3}$/
                        
                if(!eexp.test(val))
                {
                    error = "Invalid Email id!!!!!!"; 
                    valid = false;                   
                }
                else
                {
                    error ="";
                    valid = true;
                }
                break;

            case 'contact_no' :
                const cexp = /^[1-9]{1}[0-9]{9}$/
                           
                if(!cexp.test(val))
                {
                    error = "Invalid Contact  number!!!!!"; 
                    valid = false;                   
                }
                else
                {
                    error ="";
                    valid = true;
                }
                break;

               // It should have 12 digits.
                //It should not start with 0 and 1.
                //It should not contain any alphabet and special characters.
                //It should have white space after every 4 digits.

            case 'aadhar_no' :
                const aexp = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/
                        
                if(!aexp.test(val))
                {
                    error = "Invalid aadhar number!!!!!"; 
                    valid = false;                   
                }
                else
                {
                    error ="";
                    valid = true;
                }
                break;
            case 'q_id':
        
                error="";
                valid=true;
                break;
            
            case 'ans':
                error="";
                valid=true;
                break;

            // case 'category_id':
            //     error="";
            //     valid=true;
            //     break;
            
            case 'area_id':
                error="";
                valid=true;
                break;

            case 'address':
                error="";
                valid=true;
                break;
            case 'gender':
                const gexp = /^(male|female)$/
                        
                if(!gexp.test(val))
                {
                    error = "Invalid gender!!!!!"; 
                    valid = false;                   
                }
                else
                {
                    error ="";
                    valid = true;
                }
                break;

        }
        
       // console.log(val+","+error+","+valid)
        dispatch({type: 'update', fld: nm,value: val,error, valid, touched})
    
}

    const sendData = (e) => {    

        e.preventDefault();
        const reqOptions={
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({uid:info.uid.value,password:info.password.value,fname:info.fname.value,
                lname:info.lname.value,gender:info.gender.value,email:info.email.value,
                address:info.address.value,contact_no:info.contact_no.value,
               aadhar_no:info.aadhar_no.value,ans:info.ans.value,area_id:info.area_id.value,
               q_id:info.q_id.value
            })
        }
        alert(({uid:info.uid.value,password:info.password.value,fname:info.fname.value,
            lname:info.lname.value,gender:info.gender.value,email:info.email.value,
            address:info.address.value,contact_no:info.contact_no.value,
           aadhar_no:info.aadhar_no.value,ans:info.ans.value,area_id:info.area_id.value,
           q_id:info.q_id.value
        }
        ));
        fetch("http://localhost:8080/regCustomer",reqOptions)
       // .then(resp => resp.json())

        .then(resp=> {
            if(resp.ok)
            {                
                return resp.text();                
            }            
            else
            {               
                throw new Error("server error");
            }                
    })
    .then(text => text.length? JSON.parse(text) : {})
        .then(obj=>{
            alert("Registration successful.Try login");
            navigate('/login');
        })     
        .catch((error)=>alert("server error.Try later"))
        
    }

    useEffect(()=> {
        fetch("http://localhost:8080/getAllQuestion")
        .then(resp=>resp.json())
        .then(questions => setQs(questions))

        fetch("http://localhost:8080/getAllCity")
        .then(resp=>resp.json())
        .then(allcities => setCities(allcities))

       
        fetch("http://localhost:8080/getAllCategory")
        .then(resp=>resp.json())
        .then(categories => setCategory(categories))

    },[]);

    const getAreas = (id) => {
        console.log(id)
        fetch("http://localhost:8080/getAll?city_id="+id)
        .then(resp=>resp.json())
        .then(ars => setAreas(ars))
    }

    {/*const getServices = (id) => {
        console.log(id)
        fetch("http://localhost:8080/getAllServices?category_id="+id)
        .then(resp=>resp.json())
        .then(ars => setServices(ars))
    }*/}


return(

        <div>
        <h1> Customer Registration</h1>
        <form>
        <div class="form-outline mb-4">
        <label htmlFor="uid" className="form-label">Enter user name: </label>
        <input type="text" id="uid" className="form-control" name="uid" placeholder="Type your user name  here" 
        value={info.uid.value} onChange={(e)=>{validate("uid", e.target.value)}}  />
        {/* onChange={(e)=>{dispatch({type:'update',fld:'uid',val:e.target.value})}}/> */}
        <div id="emailHelp" className="form-text" style={{display: (!info.uid.valid&&info.uid.touched)?"block":"none"}}>
                {info.uid.error}
        </div>    
        </div>

        <div class="form-outline mb-4">
        <label htmlFor="password" className="form-label">Enter  password: </label>
        <input type="password" id="pwd" className="form-control" name="password" placeholder="Type your password here" 
        value={info.password.value} onChange={(e)=>{validate("password", e.target.value)}}/>
        {/* onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}} */}
        <div id="emailHelp" className="form-text" style={{display: (!info.password.valid&&info.password.touched)?"block":"none"}}>
        {info.password.error} 
        </div>    

        </div>
        <div class="form-outline mb-4">
        <label htmlFor="fname" className="form-label">Enter  First Name: </label>
        <input type="text" id="fname" className="form-control" name="fname" placeholder="Type your first name here" 
        value={info.fname.value} onChange={(e)=>{validate("fname",e.target.value)}} />
        {/* onChange={(e)=>{dispatch({type:'update',fld:'fname',val:e.target.value})}} */}
        <div id="emailHelp" className="form-text">
        {info.fname.error}
        </div>    
        </div>

        <div class="form-outline mb-4">
        <label htmlFor="lname" className="form-label">Enter  Last Name: </label>
        <input type="text" id="lname" className="form-control" name="lname" placeholder="Type your last name here" 
        value={info.lname.value} onChange={(e)=>{validate("lname",e.target.value)}}/>
        {/* onChange={(e)=>{dispatch({type:'update',fld:'lname',val:e.target.value})}} */}
        <div id="emailHelp" className="form-text">
        {info.lname.error}  
        </div>    
        </div>

        <div className="form-outline mb-4">
        <label htmlFor="gender" className="form-label">Select gender : </label>
        <br/><input type="radio" className="form-radio" name="r1" value="male" id="r1" 
        onChange={(e)=>{validate("gender",e.target.value)}}/>MALE

        <br/><input type="radio" className="form-radio" name="r1" value="female" id="r1" 
        onChange={(e)=>{validate("gender",e.target.value)}}/>FEMALE

        <br/>
        {/* <input type="radio" className="form-radio" name="r1" value="female"
        id="r1" onChange={(e)=>{dispatch({type:'update',fld:'gender',val:e.target.value})}}/>FEMALE */}

        <div id="emailHelp" className="form-text">
        {/* {info.r1.error}   */}
        </div>  

        </div>

        <div class="form-outline mb-4">
        <label htmlFor="email" className="form-label">Enter  Your Email Name: </label>
        <input type="email" id="email" className="form-control" name="email" placeholder="Enter your email" 
        value={info.email.value} onChange={(e)=>{validate("email",e.target.value)}} />
        {/* onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}} */}
        <div id="emailHelp" className="form-text">
        {info.email.error}
        </div>    
        </div>


        <div class="form-outline mb-4">
        <label htmlFor="contact_no" className="form-label">Enter  Your Contact Number: </label>
        <input type="text" id="contact_no" className="form-control" name="contact_no" placeholder="Type your contact here" 
        value={info.contact_no.value} onChange={(e)=>{validate("contact_no",e.target.value)}}/>
        {/* onChange={(e)=>{dispatch({type:'update',fld:'contact_no',val:e.target.value})}} */}
        <div id="emailHelp" className="form-text">
        {info.contact_no.error}  
        </div>    
        </div>

        <div class="form-outline mb-4">
        <label htmlFor="aadhar_no" className="form-label">Enter  Your Aadhar Number: </label>
        <input type="text" id="aadhar_no" className="form-control" name="aadhar_no" placeholder="Should be 12 digits and not starts with 0 and 1" 
        value={info.aadhar_no.value} onChange={(e)=>{validate("aadhar_no",e.target.value)}}/>
        <div id="emailHelp" className="form-text">
        {info.aadhar_no.error}
        </div>    
        </div>

        <div class="form-outline mb-4">
        <label htmlFor="address" className="form-label">Enter  Your Address Number: </label>
        <input type="textarea" id="address" className="form-control" name="address" placeholder="Type your Address here" 
        value={info.address.value} onChange={(e)=>{validate("address",e.target.value)}}/>
        <div id="emailHelp" className="form-text">
            {info.address.error}  
        </div>    
        </div>

       
        {/* <div className="mb-3">
        <label htmlFor="category_id" className="form-label">Select Category : </label>

            <select name="cat_id" id="category_id" value={info.category_id.value} onChange={(e)=>{validate("category_id", e.target.value)}}>  
                <option value={0} key={0}> select one </option>
                {
                    categories.map((c)=>
                        {return <option key={c.category_id} value={c.category_id}>
                                        {c.category_name}
                            
                                </option>
                    })
                }
            </select>
        </div> */}

        <div className="mb-3">
        <label htmlFor="city_id" className="form-label" >Select your city : </label>

        <select name="city_id" id="city_id" onChange={(e)=>getAreas(e.target.value)} >
        {/* onChange={(e)=>getAreas(e.target.value)}
        onChange={(e)=>getAreas(e.target.value)}*/}
        <option value={0} key={0}> select one </option>
        {
            cities.map((city)=>
                {return <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
        })
        }
        </select>
        </div>  

        <div className="mb-3">
            <label htmlFor="area_id" className="form-label">Select your area : </label>

            <select name="area_id" id="area_id" value={info.area_id.value} onChange={(e)=>{validate("area_id", e.target.value)}}>
            <option value={0} key={0}> select one </option>
                {
                    areas.map((area)=>
                        {return <option key={area.area_id} value={area.area_id}>{area.area_name}</option>
                    })
                }
        
            </select>

            <div className="mb-3">
            <label htmlFor="q_id" className="form-label">Choose security question: </label>
            <select className="form-select" name="q_id" id="q_id" onChange={(e)=>validate("q_id",e.target.value)}>
            <option value={0} key={0}> select one </option>
                {
                    qs.map((q)=>
                        {return <option key={q.q_id} value={q.q_id}>{q.q_text}</option>
                    })
                }
        
            </select>
        </div>
            
        </div>   


            <div className="mb-3">
                        <label htmlFor="ans" className="form-label">Enter answer : </label>
                        <input type="textarea" className="form-control" id="ans" name="ans" placeholder="type your answer here"
                        value={info.ans.value} onChange={(e)=>{validate("ans", e.target.value)}}
                        />
                    
            </div>


        {/*
        <div className="mb-3">
            <label htmlFor="ans" className="form-label">Enter answer : </label>
            <input type="textarea" className="form-control" id="ans" name="ans" value={info.ans.val}
            onChange={(e)=>{dispatch({type:'update',fld:'ans',val:e.target.value})}}  />
        
        </div> */}



        <button type="submit" className="btn btn-primary mb-3"
        onClick={(e)=>{sendData(e)}}>Submit</button>
        <button type="reset" className="btn btn-primary mb-3" 
        onClick={()=>{dispatch({type:'reset'})}}>Reset</button>

        <div class="row mb-4">

        <div class="col">
        <a href="#!">Forgot password?</a>
        </div>
        </div>

        </form>
        {/* <p> {JSON.stringify(info)} </p> */}
        </div>
        )
}
