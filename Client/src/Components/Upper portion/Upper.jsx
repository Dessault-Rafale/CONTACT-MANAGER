import React, { useState } from 'react'
import "../Upper portion/upper.css"






export default function Upper({ changeData, contact, formsubmit, edit , updation,changeupdate,dataupdate}) {
  console.log(edit);

  
  

  return (
    <div>

      {/* turnry operater=====> {edit?truediv:falsediv}  */}

      {edit?
       <div className="login-card">
       <h2>EDIT</h2>
       <h3>Enter your Details</h3>
       
           <input classNameName="control" type="text" name='name' value={edit.name} onChange={changeupdate}/>
           <div className="mail">
               <input classNameName="control" id="mail" name='email' type="email" value={edit.email} onChange={changeupdate}/>
               <input classNameName="control" id="id" name='id' type="email" value={edit._id} hidden/>
               <button className="toggle" type="button"></button>
           </div>
           <button className="control" onClick={dataupdate} type="submit" >UPDATE</button>
       

   </div>:
         <div className='firstdiv'>
         <form onSubmit={formsubmit}>
           <div className='innerfirstdiv'>
             <h2 className='mainheading'>Contact List</h2>
             <hr className='line' />
             <h3 className='contactheading'>Add Contact</h3>
             <label htmlFor="" className='name'>Name:</label>
             <input type="text" name="fname" onChange={changeData} className='input1' placeholder='Name' /><br /><br />
             <label htmlFor="" className='email'>Email:</label>
             <input type="text" name="lname" onChange={changeData} className='input2' placeholder='Email' />
             <br />
             <br />
             <button className='button'>ADD</button>
           </div>
         </form>
       </div>}
     

    </div>

  )
}
