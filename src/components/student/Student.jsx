import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Student = (props) => {
   var [inputs,setInputs]=useState(props.data)
   console.log("method:",props.method)
   const navigate=useNavigate();

   const readinputs = (event)=>{
const {name,value} = event.target
setInputs((inputs)=>({...inputs,[name]:value}))
//console.log(inputs)

   }
   
   const saveData =() =>{

    console.log("clicked")
   // console.log(inputs)
   if(props.method==="post")
   {
    axios.post("http://localhost:3005/new",inputs)
    .then(( response)=>{
      
      alert("Record Saved") 
      navigate('/StudentView');
    })
    .catch(err=>console.log(err))
   }
   if(props.method==='put'){

    console.log("inside put")
    axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
    .then(response=>{
      console.log("post data"+response.data)
      alert("sucess")
      window.location.reload(false);
    })
    .catch(err=>console.log(err))
   }
   }
   
   const viewData=()=>
   {
    navigate('/StudentView');
   }
  return (
    <div>
        <h1>Student Details</h1>
      Name:  <TextField id="outlined-basic" label="name" variant="outlined" name="sname" value={inputs.sname} onChange={readinputs} /><br></br>
      Admission No:  <TextField id="outlined-basic" label="admission no" variant="outlined" name="admno" value={inputs.admno} onChange={readinputs} /><br></br>
      Age: <TextField id="outlined-basic" label="age" variant="outlined" name="age" value={inputs.age}  onChange={readinputs} /><br></br><br></br>
      <button type="submit" onClick={saveData}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="submit" onClick={viewData} >View</button>

    </div>
  )
}

export default Student
