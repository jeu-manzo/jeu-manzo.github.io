import React, {Component} from 'react';


class Navbar extends Component {

  call = () => {
    window.open('tel:3312782450');
  }

  render () {
    return (
      <div className="navbar">
        <section className="navbar-options">
          <a href="#home">SOBRE MÍ</a>
          <a href="#home">PORTAFOLIO</a>
          <section className="navbar-contact">
            <a href="#home">CONTACTO</a>
            <button className="Phone is-animating" onClick={this.call}></button>
          </section>
        </section>
      </div>
    )
  }
};

export default Navbar;
