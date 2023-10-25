import React, { useState } from 'react'
import'./product.css'
const Product = () => {
const [pn,setPname]=useState('');
const [pc,setPcode]=useState('');
const [pq,setPquantity]=useState('');
const [pp,setPprice]=useState('');

const readpname=(event) =>{
    setPname(event.target.value);
    // console.log(event.target.value);
}
const readpquantity=(event) =>{
    setPquantity(event.target.value);
    // console.log(event.target.value);
}
const readprice=(event) =>{
    setPprice(event.target.value);
    // console.log(event.target.value);
}
  return (
    <div >
      <h1 className='p'>Product</h1>
      Product Name:<input  type="text" onChange={readpname} /><br></br>
      Product Code:<input type="text" onChange={(event) => {
              setPcode(event.target.value);
              console.log(event.target.value);
          }} /><br></br>
      Product Quantity <input type="text" onChange={readpquantity} /><br></br>
      Product Price <input type="text" onChange={readprice} /><br></br>

    </div>
  )
}

export default Product
