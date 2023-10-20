import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../logo.svg'

export default function Navbar() {

  function hamClickHandler() {
    let Nav = document.querySelector(".navBar");
    let hamMenu = document.querySelector(".hamMenu")
    Nav.classList.toggle("showNav");
    hamMenu.classList.toggle("fa-xmark");
  }
  return (
    <header>
      <img src={logo} alt="React-Logo" className='AppLogo' />
      <nav className='navBar'>
        <NavLink to='/' className="NavLink">Home</NavLink>
        <NavLink to='/student' className="NavLink">Student</NavLink>
        <NavLink to='/contact' className="NavLink">Contact</NavLink>
      </nav>
      <i className="fa-solid fa-bars hamMenu" onClick={() => hamClickHandler()}></i>
    </header>
  )
}
