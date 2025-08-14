import React from 'react'
import Slider from "react-slick";
import './Afterloginlanding.css'
import { Link } from 'react-router-dom';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import profile from '../assets/header_profile.png'
import search from '../assets/icon_search.png'
import location from '../assets/icon_location.png'
import tick from '../assets/icon_tick.png'
import Apple from '../assets/Apple-Logo.png'
import Wipro from '../assets/WIT.png'
import CTS from '../assets/CTSH_BIG.png'
import Amazon from '../assets/AMZN_BIG.png'
import Google from '../assets/GOOG.png'
import Infy from '../assets/INFY_BIG.png'
import Tcs from '../assets/TCS.png'
import META from '../assets/META_BIG.png'
import starIcon from '../assets/Star_icon.png'
import left from '../assets/left_arrow.png'
import right from '../assets/right_arrow.png'


/* Below Code is removed after backend integration*/
const findbyCompaniesNameList = [
    {
        id: 2,
        name: "Wipro",
        logo: Wipro,
        rating: 4.3,
        reviews: "55k+",
        desc: "Grow with us. Be bold.",
    },
    {
        id: 3,
        name: "Cognizant",
        logo: CTS,
        rating: 3.7,
        reviews: "55k+",
        desc: "Leading ITeS company with global presence",
    },
    {
        id: 4,
        name: "Amazon",
        logo: Amazon,
        rating: 4.0,
        reviews: "27.5k+",
        desc: "World’s largest Internet company",
    },
    {
        id: 6,
        name: "Infosys",
        logo: Infy,
        rating: 4.1,
        reviews: "50k+",
        desc: "Navigate your next",
    },
    {
        id: 7,
        name: "TCS",
        logo: Tcs,
        rating: 4.2,
        reviews: "65k+",
        desc: "Building on belief",
    },
    {
        id: 8,
        name: "Meta",
        logo: META,
        rating: 4.4,
        reviews: "22k+",
        desc: "Bring the world closer together",
    }
];

export const Afterloginlanding = () => {
    //header links
    const [activeItem, setActiveItem] = React.useState("Home");

    const handleNavClick = (itemName) => {
        setActiveItem(itemName);
    };


    const CustomPrevArrow = ({ onClick }) => (
        <div className="custom-arrow prev" onClick={onClick}>
            <img src={left} alt="Previous" />
        </div>
    );

    const CustomNextArrow = ({ onClick }) => (
        <div className="custom-arrow next" onClick={onClick}>
            <img src={right} alt="Next" />
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
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

            <div>Job Cards Section</div>

            <section className="carousel-wrapper">
            <h2 className="carousel-title">Find Jobs By Company</h2>
            <Slider {...settings}>
            {findbyCompaniesNameList.map((company)=>(
                <div className="carousel-card" key={company.id}>
                <img className="carousel-company-logo" src={company.logo} alt={company.name}/>
                <div className="carousel-card-header">
                    <h3>{company.name}</h3>
                    <p className='carousel-company-rating'><span className="star"><img src={starIcon} /></span> {company.rating} | {company.reviews} reviews</p>
                </div>
                <p className="carousel-desc">{company.desc}</p>
                <button className="carousel-view-jobs">View jobs</button>
                </div>
            ))}
            </Slider>
            <div className="carousel-view-all-wrapper">
            <button className="carousel-view-all">View All Companies</button>
            </div>
        </section>
        </>
    )
}