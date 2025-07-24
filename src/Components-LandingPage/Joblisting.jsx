import React from 'react'
import './Joblisting.css'
import { JoblistingCard } from './JoblistingCard';

/* Below Code is removed after backend integration*/
const jobsInListing = [
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    type: "Full-Time",
    tags: ["React", "Node.Js", "AWS"]
  },
  {
    title: "Marketing Manager",
    company: "Global Brands Co.",
    location: "CBE, TN",
    type: "Full-Time",
    tags: ["SEO", "Content Marketing"]
  },
  {
    title: "Data Analyst",
    company: "Data Insights Ltd.",
    location: "Remote",
    type: "Contract",
    tags: ["React", "Node.Js", "AWS"]
  },
  {
    title: "UX/UI Designer",
    company: "Creative Minds Studio",
    location: "Remote",
    type: "Contract",
    tags: ["Figma", "Adobe XD", "Html", "Css"]
  },
  {
    title: "Financial Advisor",
    company: "Wealth Management Group",
    location: "Chicago, IL",
    type: "Full-Time",
    tags: ["SEO", "Content Marketing"]
  },
  {
    title: "Data Analyst",
    company: "Data Insights Ltd.",
    location: "Remote",
    type: "Contract",
    tags: ["React", "Node.Js", "AWS"]
  }
];

export const Joblisting = () => {
  return (
    <section className='job-listings-container'>
        <h2 className="job-listings-heading">Latest Job Listings</h2>
        <div className='jobs-container-wrapper'>
          {jobsInListing.map((job, index) => (
            <JoblistingCard job={job} key={index} />
          ))}
        </div>
        <button className='view-all-button'>View All Jobs</button>
    </section>
  )
}
