import React, {Component} from 'react';
import functions from '../content/functionsDB.js'

class Projects extends Component{

  render () {
    return (
      <section className="projects">
        {
          functions.titlesSpanish.map((title, index) => (
            <header key={index}>{title}</header>
          ))
        }
      </section>
    )
  }
};

export default Projects;
