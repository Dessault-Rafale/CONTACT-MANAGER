import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../Lower portion/lower.css"
import AccountCircle from '@mui/icons-material/AccountCircle';
import Delete from '@mui/icons-material/Delete';
import BorderColor from '@mui/icons-material/BorderColor';




export default function Lower({ allcontacts, deletecontact, editcontact }) {





    return (




        <>
            {allcontacts.map((item) =>
                <>
                    {console.log("item===>", item)}
                    <div className='seconddiv'>
                        <AccountCircle className='profile' />
                        <div className='para1'>
                            <p>{item.name}</p>
                        </div><br />
                        <p className='para2'>{item.email}</p>
                        <div className='editicon' onClick={() => editcontact(item._id)}>
                            <BorderColor />
                        </div>
                        <div className='delete' onClick={() => deletecontact(item._id)}>
                            <Delete />
                        </div>

                        {/* {contact.map((item) =>(<><Lower note={item}/></>))} */}


                    </div>

                </>
            )}</>
    )
}