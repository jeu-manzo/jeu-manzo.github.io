import React, {Component} from 'react';

class AboutMe extends Component {

  render () {
    return (
      <section className="about-me">
      <p>
        {this.props.text}
      </p>
      </section>
    )
  }
};

export default AboutMe;
