import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
const [un,setUn]=useState('');
const [ps,setPwd]=useState('');
const [error,setError]=useState(false);
const navigate=useNavigate();

const readusername=(event) =>{
    event.preventDefault();
    setUn(event.target.value);

  
}
const readpassword=(event) =>{
    event.preventDefault();
    setPwd(event.target.value);
}

const readalldata=(event)=>{
event.preventDefault();
if(un.trim () ==='' || ps.trim () ==='')
{
setError(true);
return;

}
else{
setError(false);
navigate('/home');
}
}
  return (
    <div>
      <h1>{ props.a}</h1>
        <h1 className='aa'>SIGN - IN</h1>
        <form>
            <div className='bb'>
      UserName<input type="text" onChange={readusername} /><br></br>
      Password<input type="text" onChange={readpassword}/><br></br>
      <button type="submit" onClick={readalldata}>Login</button>
      {error && 'Error in data'}
      </div> </form>
    </div>
  )
}


export default Login
