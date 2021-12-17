import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import backbutton from '../assets/backbutton.png'
export default function Emergency() {
    return (
           
        <div className='embg'>
         <Link to="/">
         <img className= " p-4 fixed top-0 left-0 z-20    h-16 w-16" src={backbutton} alt="backbutton"/>
         </Link>
          </div>
    )
}
