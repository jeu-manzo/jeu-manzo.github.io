import React, {Component} from 'react';

class AboutMe extends Component {

  render () {
    return (
      <p className="about-me">
        {this.props.text}
      </p>
    )
  }
};

export default AboutMe;
