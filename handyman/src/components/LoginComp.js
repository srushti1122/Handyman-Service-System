import { useReducer, useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import { login } from "./slice";


export default function LoginComp()
{
    const init={
        uid:{value:"",error:"",valid:false,touched:false},
        password:{value:"",error:"",valid:false,touched:false}
    }
    const reducer=(state,action)=>{
            switch(action.type)
            {
                case 'update':
                    return {...state,[action.fld]:{...state[action.fld],value:action.value,error:action.error,valid:action.valid,touched:action.touched}}

                case 'reset':
                        return init;
            }
    }

    const[info,dispatch]=useReducer(reducer,init);
    const[msg,setMsg]=useState("");
    const navigate=useNavigate();
    const reduxAction=useDispatch();



  //update for validation
  const validate = (nm,val) => {
    let error = "";
    let valid = false;
    let touched = true;
    switch(nm)
    {
        case 'uid' :
             const exp1 = /[A-Za-z0-9._-]{5,12}/
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


        case 'password':
             
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
    }
    console.log(val+","+error+","+valid)
    dispatch({type: 'update', fld: nm,value: val,error, valid, touched})
}



    const sendData=(e)=>{
                e.preventDefault();
                const reqOptions={
                    method:"POST",
                    headers:{'content-type':'application/json'},
                    //body:JSON.stringify(info)
                    body:JSON.stringify({uid:info.uid.value,password:info.password.value})

                }

                fetch("http://localhost:8080/chkLogin",reqOptions)
               // .then(resp=>{console.log(info);});
               //.then(resp=>{console.log(resp); return resp.text()})
               .then(resp=>{ if(resp.ok)
                                    return resp.text();
                                else
                                    throw new Error("Server error");
                            })
               .then(text => {console.log(text);return text.length > 0 ? JSON.parse(text) : {}})
               .then(obj =>{
                            console.log(obj);
                            if(Object.keys(obj).length===0)
                            {
                                setMsg("wrong User id or password");
                            }
                            else
                            {
                                reduxAction(login())
                                localStorage.setItem("loggedUser", JSON.stringify(obj));
                                if(obj.status === 0)
                                {
                                    alert("Request has not been approved");
                                    navigate('/');
                                }
                                else
                                {
                                    
                                    if(obj.role_id.role_id===1)
                                    {
                                        navigate("/admin_home");
                                    }
                                    else if(obj.role_id.role_id===2)
                                    {
                                        navigate("/vendor_home");
                                    }
                                    else if(obj.role_id.role_id===3)
                                    {
                                        //localStorage.setItem("loggedCust", JSON.stringify(obj));
                                        navigate("/customer_home");
                                    }

                                }
                            }
                            
               })
                        //parse only when length>0 or text is present in response
                        //object need to check have text or blank                                                         
                        //wrong data given
                        //data correct but users request has not been approve yet 
                        //according to role navigate to correponding roles 
            .catch((error)=>alert("Server error try after some time"));
     }                       

    return(<div>
             <h1>Login Page</h1>
                
             {/*<form>
  
  <div class="form-outline mb-4">
    <label htmlFor="uid" className="form-label">Enter user id</label>
    <input type="text" id="uid" className="form-control" name="uid" placeholder="Type your user id here" 
    value={info.uid.value} onChange={(e)=>{validate("uid",e.target.value)}}/>
{/*onChange={(e)=>{dispatch({type:'update',fld:'uid',val:e.target.value})}}/>
   <div id="emailHelp" className="form-text" style={{display: (!info.uid.valid&&info.uid.touched)?"block":"none"}}>
        {info.uid.error}
    </div>    
  </div>
    
  <div class="form-outline mb-4">
    <label htmlFor="pwd" className="form-label">Enter  password</label>
    <input type="password" id="pwd" className="form-control" name="password" placeholder="Type your password here" 
    value={info.pwd} onChange={(e)=>{validate("password",e.target.value)}}/>
    {/*onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}}/>
    <div id="emailHelp" className="form-text" style={{display: (!info.password.valid&&info.password.touched)?"block":"none"}}>
        {info.password.error}
    </div>    
 </div>
 <button type="submit" className="btn btn-primary mb-3"
 onClick={(e)=>{sendData(e)}}>Submit</button>
 <button type="reset" className="btn btn-primary mb-3" 
 onClick={()=>{dispatch({type:'reset'})}}>Reset</button>

  <div class="row mb-4">
    
    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

             </form> */}
             <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

        <div id="login">
            <h3 class="text-center text-white pt-5">Login form</h3>
            <div class="container">
                <div id="login-row" class="row justify-content-center align-items-center">
                    <div id="login-column" class="col-md-6">
                        <div id="login-box" class="col-md-12">
                            <form id="login-form" class="form" action="" method="post">
                                <h3 class="text-center text-info">Login</h3>
                                <div class="form-group">
                                    <label for="uid" class="text-info">User ID:</label><br/>
                                    <input type="text" name="uid" id="uid" class="form-control" value={info.uid.val}
                                    onChange={(e)=>{validate("uid",e.target.value)}}/>
                                    <div id="emailHelp" className="form-text" style={{display: (!info.uid.valid&&info.uid.touched)?"block":"none"}}>
                                        {info.uid.error}
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="pwd" class="text-info">Password:</label><br/>
                                    <input type="password" name="pwd" id="pwd" class="form-control" value={info.password.val}
                                    onChange={(e)=>{validate("password",e.target.value)}}/>
                                    <div id="emailHelp" className="form-text" style={{display: (!info.password.valid&&info.password.touched)?"block":"none"}}>
                                        {info.password.error}
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                                    <button type="submit" name="submit" class="btn btn-info" value="submit" onClick={(e)=>{sendData(e)}}>Login</button>
                                    <button type="reset" className="btn btn-info" onClick={(e)=>{dispatch({type:'reset'})}}> Clear </button>
                                </div>
                                <div id="register-link" class="text-right">
                                    <a href="/customer_register" class="text-info">Register here</a>
                                </div>
                                <p class="text-danger">{msg}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<p>
    {/* {JSON.stringify(info)} */}
    {/* <p class="text-danger">{msg}</p> */}
</p> 
</div>
           

    );

}