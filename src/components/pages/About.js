import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>App to search Github users</p>
      <p>made by Elena Dubinsky</p>
      <div>
        <a href={`https://github.com/chekayufor?tab=repositories`} > Elena`s GitHub  </a>
      </div>
    </Fragment>
  );
};

export default About;
