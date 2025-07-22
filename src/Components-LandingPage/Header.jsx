import React from 'react'
import './Header.css'

export const Header = () => {
  const [activeItem, setActiveItem] = React.useState("Home");
  const [arrowRotated,setArrowRotated] = React.useState(true);

  const handleNavClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleEmployerDropdown= ()=>{
    setArrowRotated(prev=>!prev)
  }

  return (
    <>
    <header className="header">
    <div className="logo">job portal</div>
    <nav className="nav-links">
      <a href="#" className={activeItem === "Home" ? "nav-item nav-active" : "nav-item"} onClick={()=>handleNavClick("Home")}>Home</a>
      <a href="#" className={activeItem === "Jobs" ? "nav-item nav-active" : "nav-item"} onClick={()=>handleNavClick("Jobs")}>Jobs</a>
      <a href="#" className={activeItem === "Companies" ? "nav-item nav-active" : "nav-item"} onClick={()=>handleNavClick("Companies")}>Companies</a>
    </nav>

    <div className="auth-links">
      <a href="#" className="login-btn">Login</a>
      <a href="#" className="signup-btn">Signup</a>
      <div className="separator"></div>
      <div className="dropdown" onMouseEnter={handleEmployerDropdown}>
        For Employers <span className={`material-symbols-rounded arrow-icon ${arrowRotated ? 'arrow-rotated' : ''}`}>arrow_back_ios</span>
      </div>
    </div>
    </header>
    </>
  )
}
