import { NavLink } from "react-router-dom";



function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
         <div className="nav">
            <NavLink to='/' className='nav__link'>
               Home
            </NavLink>
            <NavLink to='/store' className='nav__link'>
               Store
            </NavLink><NavLink to='/about' className='nav__link'>
               About
            </NavLink>
         </div>
      </div>
    </div>
  )
}

export default Navbar
