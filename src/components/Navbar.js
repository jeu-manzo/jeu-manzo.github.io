import React, {Component} from 'react';



class Navbar extends Component {
  call = () => {
    window.open('tel:3312782450');
  }

  render () {
    return (
      <div className="navbar">
          <section className="navbar-contact">
            <button onClick={this.props.onClickEng}>English</button>
            <button onClick={this.props.onClickEsp}>Español</button>
          </section>
          <section className="navbar-phone">
            <a href="#home">{this.props.labelAboutMe}</a>
            <a href="#home">{this.props.labelProjects}</a>
            <a href="#home">{this.props.labelContact}</a>
          </section>
          <section className="navbar-main">
            <button className="Phone is-animating" onClick={this.call}></button>
          </section>
      </div>
    )
  }
};

export default Navbar;
