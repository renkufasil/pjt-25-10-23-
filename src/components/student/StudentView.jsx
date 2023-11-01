import { DeleteForever } from '@mui/icons-material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Student from './Student';

const StudentView = () => {

var [students,setStudents] = useState([]);
var [selected,setSelected]=useState()
var [update,setUpdate]=useState(false)
useEffect(()=>{
axios.get("http://localhost:3005/view")
.then(response =>{
    console.log(response.data)
    setStudents(response.data)
})
.catch(err=>console.log(err))

},[])

const deleteValues=(id)=>{
    console.log("deleted",id)
    axios.delete("http://localhost:3005/remove/"+id)
    .then((response)=>{
        alert("Deleted")
        window.location.reload(false);
    })
}
const updateValues = (value) =>{

  console.log("updated:",value)
  setSelected(value);
  setUpdate(true);
}

 
     
      var result=
      <TableContainer >
      <table>
      <TableHead> 
        <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell>Admission No</TableCell>
            <TableCell>Age</TableCell>
           
        </TableRow>
      </TableHead>
      <TableBody>

        {

            students.map((value,index)=>{
                return(
                    <TableRow key={index}>

                        <TableCell>{value.sname}</TableCell>
                        <TableCell>{value.admno}</TableCell>
                        <TableCell>{value.age}</TableCell>
                        <TableCell><DeleteForever onClick={()=>deleteValues(value._id)}/></TableCell>
                        <TableCell><ModeEditIcon onClick={()=>updateValues(value)} /></TableCell>
                        <TableCell>
                            
                        </TableCell>
                    </TableRow>
                )
            })
        }
      </TableBody>
      </table>
      </TableContainer>
   
      if(update)
      result=<Student data={selected} method='put'/>
      return (result)
    
}

export default StudentView
