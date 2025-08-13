import React from 'react'
import './Afterloginlanding.css'
import { Link } from 'react-router-dom';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import profile from '../assets/header_profile.png'
import search from '../assets/icon_search.png'
import location from '../assets/icon_location.png'
import tick from '../assets/icon_tick.png'

export const Afterloginlanding = () => {
    const [activeItem, setActiveItem] = React.useState("Home");

    const handleNavClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <>
            <header className="header">
                <div className="logo">job portal</div>
                <nav className="nav-links">
                    <a href="#" className={activeItem === "Home" ? "nav-item nav-active" : "nav-item"} onClick={() => handleNavClick("Home")}>Home</a>
                    <a href="#" className={activeItem === "Jobs" ? "nav-item nav-active" : "nav-item"} onClick={() => handleNavClick("Jobs")}>Jobs</a>
                    <a href="#" className={activeItem === "Companies" ? "nav-item nav-active" : "nav-item"} onClick={() => handleNavClick("Companies")}>Companies</a>
                </nav>

                <div className="auth-links">
                    <div><img className='header-icons' src={breifcase} alt='My Jobs' /></div>
                    <div><img className='header-icons' src={chat} alt='Messages' /></div>
                    <div><img className='header-icons' src={bell} alt='Notifications' /></div>
                    <div><img className='header-icons' src={profile} alt='My Profile' /></div>
                </div>
            </header>

            <main className="main-section">
                <h1 className="headline">"Welcome Back!"</h1>
                <p className="subheading">Your next big opportunity is waiting — explore jobs tailored just for you.</p>

                <div className="search-bar">
                    <div className="search-field">
                        <span><img src={search} className="icon-size" alt="search_icon" /></span>
                        <input type="text" placeholder="Search by Skills, company or job title" />
                    </div>
                    <div className="separator"></div>

                    <div className="search-field">
                        <span><img src={location} className="icon-size" alt="location_icon" /></span>
                        <input type="text" placeholder="Enter Location" />
                    </div>
                    <div className="separator"></div>

                    <div className="search-field">
                        <span><img src={tick} className="icon-size" alt="search_tick" /></span>
                        <select defaultValue="" required>
                            <option value="" disabled hidden>Enter Experience</option>
                            <option value="fresher">Fresher</option>
                            <option value="1-3">1-3 Years</option>
                            <option value="3-5">3-5 Years</option>
                            <option value="5+">5+ Years</option>
                        </select>
                    </div>

                    <button className="search-button">Search</button>
                </div>
            </main>
        </>
    )
}