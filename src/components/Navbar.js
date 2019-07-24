import React, {Component} from 'react';


class Navbar extends Component {

  call = () => {
    window.open('tel:3312782450');
  }

  render () {
    return (
      <div className="navbar">
        <section className="navbar-options">
          <a href="#home">Sobre Mí</a>
          <a href="#home">Portafolio</a>
          <section className="navbar-contact">
            <a href="#home">Contacto</a>
            <button className="Phone is-animating" onClick={this.call}></button>
          </section>
        </section>
      </div>
    )
  }
};

export default Navbar;
