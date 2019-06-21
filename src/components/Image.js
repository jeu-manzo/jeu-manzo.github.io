import React, {Component} from 'react';
import logo from '../images/logo-bco-jeu.png'
import background from '../images/background.svg'


class Image extends Component {
  render () {
    return (
      <div className="image-div">
        <img className="image" src={background} alt="" />
      </div>
    )
  }
};

export default Image;
