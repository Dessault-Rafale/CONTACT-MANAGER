import React from 'react'
import './edit.css';
import { useState } from 'react';
import axios from 'axios';


export default function Edit() {

    return (
        <>
            <div className="login-card">
                <h2>EDIT</h2>
                <h3>Enter your Details</h3>
                <form className="login-form">
                    <input classNameName="control" type="text" name='name'/>
                    <div className="mail">
                        <input classNameName="control" id="mail" name='email' type="email"/>
                        <button className="toggle" type="button"></button>
                    </div>
                    <button className="control" type="submit" >UPDATE</button>
                </form>

            </div>
        </>
    )
}