import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Student = () => {
   var [inputs,setInputs]=useState({"admno":'',"sname":'',"age":''})

   const readinputs = (event)=>{
const {name,value} = event.target
setInputs((inputs)=>({...inputs,[name]:value}))
console.log(inputs)

   }
   
   const saveData =() =>{

    console.log("clicked")
    console.log(inputs)
    axios.post("http://localhost:3005/new",inputs)
    .then(( response)=>{
      
      alert("Record Saved") 
    })
    .catch(err=>console.log(err))
   }
   
  return (
    <div>
        <h1>Student Details</h1>
      Name:  <TextField id="outlined-basic" label="name" variant="outlined" name="sname" value={inputs.sname} onChange={readinputs} /><br></br>
      Admission No:  <TextField id="outlined-basic" label="admission no" variant="outlined" name="admno" value={inputs.admno} onChange={readinputs} /><br></br>
      Age: <TextField id="outlined-basic" label="age" variant="outlined" name="age" value={inputs.age}  onChange={readinputs} /><br></br><br></br>
      <button type="submit" onClick={saveData}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="submit">View</button>
    </div>
  )
}

export default Student
