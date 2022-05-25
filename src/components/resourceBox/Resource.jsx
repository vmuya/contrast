import React from 'react';

import './resource.css';

const Resource = ({ source, name, description, resourceLink }) => {
  return (
    <div className="contrast__resource-box">
      <img className="contrast__resource-logo" src={source} alt={name} />

      <h2 className="contrast__resource-title">{name}</h2>

      <p className="contrast__resource-details">{description}</p>

      <a
        className="contrast__resource-link"
        href={resourceLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Resource →
      </a>
    </div>
  );
};

export default Resource;
