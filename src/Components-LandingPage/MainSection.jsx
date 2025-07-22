import React from 'react'
import './MainSection.css'

export const MainSection = () => {
  return (
    <>
    <main className="main-section">
      <h1 className="headline">"Your Dream Job Is Just A Click Away"</h1>
      <p className="subheading">Explore 5 Lakh+ Openings Now</p>

      <div className="search-bar">
        <div className="search-field">
          <span className="material-symbols-outlined main-icon">search</span>
          <input type="text" placeholder="Search by Skills, company or job title" />
        </div>

        <div className="search-field">
          <span className="material-symbols-outlined main-icon">location_on</span>
          <input type="text" placeholder="Enter Location" />
        </div>

        <div className="search-field">
          <span className="material-symbols-outlined main-icon">settings</span>
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
