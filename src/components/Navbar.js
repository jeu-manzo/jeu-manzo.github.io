import React, {Component} from 'react';


class Navbar extends Component {

  call = () => {
    alert("3312782450")
  }

  render () {
    return (
      <div className="navbar">
        <p>Jeu Manzo</p>
        <button className="Phone is-animating" onClick={this.call}></button>
      </div>
    )
  }
};

export default Navbar;
