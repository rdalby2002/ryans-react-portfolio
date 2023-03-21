import React from 'react';
import './Project.css';

export default function Projects({
  link,
  imgSrc,
  altTxt,
  title,
  description,
  repository
}) {
  return (
    <div className='project-card card'>
      <a href={link}>
        <div className="img-wrapper">
          <img src={require(`../../assets/images/${imgSrc}`)} alt={altTxt} />
        </div>
      </a>
      <h2>
        <a href={link} className="title-link">
          {title}
        </a>
      </h2>
      <p className="description-p">{description}</p>
      <div className="title">
        <h3>
          <a href={repository}>Github Repository</a>
        </h3>
      </div>
    </div>
  );
};