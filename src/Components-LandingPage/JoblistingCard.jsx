import React from 'react';
import './Joblisting.css';

export const JoblistingCard = ({ job }) => {
  return (
    <div className="joblisting-card">
      <h3 className="joblisting-card-title">{job.title}</h3>
      <p className="joblisting-card-company">
        {job.company} • {job.location}
      </p>

      {/* Show job type if available, else show "N/A" */}
      <p className="joblisting-card-type">{job.type || 'N/A'}</p>

      {/* Render tags only if present */}
      {job.tags && job.tags.length > 0 && (
        <div className="joblisting-card-tags">
          {job.tags.map((tag) => (
            <span key={tag} className="joblisting-card-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Show salary & description from API */}
      {job.salary && <p className="joblisting-card-salary">💰 {job.salary}</p>}
      {job.description && (
        <p className="joblisting-card-description">{job.description}</p>
      )}

      <button className="view-joblisting-button">View details</button>
    </div>
  );
};
