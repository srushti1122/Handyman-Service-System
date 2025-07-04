import { useReducer } from "react";
export default function AddStandardRate()
{
  
    const init={
        // uid:{value:"",error:"",valid:false,touched:false},
    
        category_name:""

 
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
     const sendData=(e)=>{
        e.preventDefault();
        const reqOptions={
            method:"POST",
            headers:{'content-type':'application/json'},
           body:JSON.stringify(info)
           
        }
        fetch("http://localhost:8080/addCategory",reqOptions)
        .then(resp=>{
            if(resp.ok)
            {
              alert("Inserted successfully!!!!");
              return resp.text();
            }
            else
               alert("Insertion failed!!!!");
               
          })
       
    }
 
     const[info,dispatch]=useReducer(reducer,init);
     

    return(
        <div>
            <h1> Welcome to add Category</h1>
            <form>
            <div className="mb-3">
                <label htmlFor="category_name" className="form-label">Enter New Category : </label>
                <input type="text" className="form-control" id="category_name" name="category_name" 
                placeholder="Type new Category here"  value={info.category_name.val} 
                onChange={(e)=>{dispatch({type:'update',fld:'category_name',val:e.target.value})}} />
               
            </div>
            <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>Add</button>
            </form>
        {JSON.stringify(info)}
        </div>
    )
}