import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const aboutSections = [
    {
      id: 1,
      path: 'app',
      title: 'About App',
    },
    {
      id: 2,
      path: 'author',
      title: 'About Author',
    },
  ];
  return (
    <>
      <ul className="about-section-nav">
        {aboutSections.map((section) => (
          <li key={section.id}>
            <Link to={section.path}>{section.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default About;
