import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Joblisting.css';
import { JoblistingCard } from './JoblistingCard';

export const Joblisting = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/jobs/');
        setJobs(response.data);
      } catch (err) {
        setError('Failed to fetch jobs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <p className="loading-text">Loading jobs...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  return (
    <section className="job-listings-container">
      <h2 className="job-listings-heading">Latest Job Listings</h2>
      <div className="jobs-container-wrapper">
        {jobs.map((job) => (
          <JoblistingCard job={job} key={job.id} />
        ))}
      </div>
      <button className="view-all-button">View All Jobs</button>
    </section>
  );
};
