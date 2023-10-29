import React, { useState } from "react";
import './Register.css'
function Register(){
  //js code
  const[userData,setUserData]=useState({
    uname:"",
    email:"",
    phone:"",
    password:""
  })

  const getUserData =(e)=>{
    const{name,value}=e.target
    console.log(name,value);
    setUserData({...userData,[name]:value})
  }
  console.log(userData);

  const handleSubmit=(e)=>{
    e.preventDefault()
    alert(` Name :${userData.uname}
          Email id :${userData.email}
          Phone:${userData.number}
           Password :${userData.password}
    `)
  }
  

  return(
    //jsx code
    <div  >
      <div style={{marginTop:'180px',textAlign:'center'}}>
        <h1>ART WORK SHOP</h1>
        <h2>BOOK YOUR SEAT NOW</h2>
      </div>
      <div  style={{marginTop:'10px',fontSize:'20px' ,textAlign:'center'}}>
        <form onSubmit={handleSubmit}>
          <div style={{marginTop:'10px'}}>
            <label  htmlFor="sname">Name : </label>
           
            <input  type="text" name="uname" onChange={(e)=>getUserData(e)} placeholder="Enter name" style={{width:'300px',padding:'10px',borderRadius:'10px'}}/>
          </div>
          
          <div style={{marginTop:'10px'}}>
            <label htmlFor="email">Email :  </label>  
            <input type="text" name="email" onChange={(e)=>getUserData(e)} placeholder="Enter email" style={{width:'300px',padding:'10px',borderRadius:'10px'}}/>
          </div>

          <div style={{marginTop:'10px'}}>
           <label htmlFor="number"> Ph No: </label>
            <input type="text" name="number" onChange={(e)=>getUserData(e)} placeholder="Enter Phone No" style={{width:'300px',padding:'10px',borderRadius:'10px'}}/>
          </div>
          
          <div style={{marginTop:'10px'}}>
           <label htmlFor="password">  Password :  </label>
            <input type="password" name="password" onChange={(e)=>getUserData(e)} placeholder="Password" style={{width:'300px',padding:'10px',borderRadius:'10px'}}/>
          </div>
          
         
           
           <div style={{marginTop:'10px'}}>
            <input type="submit" value={'Submit'} style={{backgroundColor:'violet',fontSize:'20px',width:'150px',borderRadius:'10px' }}/>
           </div>

        </form>
      </div>
      
    </div>
 
  )

  
}
  export default Register;




