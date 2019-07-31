import React, {Component} from 'react';

class Projects extends Component{

  render () {
    return (
      <section className="projects">
        {
          this.props.title.map((title, index) => (
            <div className="project-container" key={index}>
              <header>{title}</header>
              <article>
                {
                  this.props.technology[index].technologies.map((technology, index) => (
                    <span key={index}>{technology}</span>
                  ))
                }
              </article>
            </div>
          ))
        }
      </section>
    )
  }
};

export default Projects;
