import React, {Component} from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe'
// import Image from './Image';
// import name from '../images/nueva.svg'
import { ReactComponent as Name } from '../images/jeuManzo.svg';


class Home extends Component {
  render () {
    return (
      <div className="home" >
        <header>
          <Navbar />
        </header>
        <main>
          <Name/>
          <AboutMe/>
        </main>
      </div>
    )
  }
};

export default Home;
