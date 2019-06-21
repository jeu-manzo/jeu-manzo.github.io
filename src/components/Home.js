import React, {Component} from 'react';
import Navbar from './Navbar';
import Image from './Image';

class Home extends Component {
  render () {
    return (
      <div className="home" >
        <header>
          <Navbar />
        </header>
        <main>
          <Image />
        </main>
      </div>
    )
  }
};

export default Home;
