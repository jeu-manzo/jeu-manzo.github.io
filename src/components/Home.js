import React, {Component} from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import data from '../content/data.js'

// import Image from './Image';
// import name from '../images/nueva.svg'
import { ReactComponent as Name } from '../images/jeuManzo.svg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: <AboutMe text={data[0].content}/>,
      navAboutMe: "Sobre mí",
      navPortfolio: "Portafolio",
      navContact: "Contacto",
    };
  }

  contentToSpanish = () => {
    this.setState({ aboutMe: <AboutMe text={data[0].content}/> });
    this.setState({ navAboutMe: "Sobre mí"});
    this.setState({ navPortfolio: "Portafolio"});
    this.setState({ navContact: "Contacto"});
  }

  contentToEnglish = () => {
    this.setState({ aboutMe: <AboutMe text={data[1].content}/> });
    this.setState({ navAboutMe: "About Me"});
    this.setState({ navPortfolio: "Portfolio"});
    this.setState({ navContact: "Contact"});

  }

  render () {
    return (
      <div className="home" >
        <Navbar
          onClickEng={this.contentToEnglish}
          onClickEsp={this.contentToSpanish}
          labelAboutMe={this.state.navAboutMe}
          labelPorfolio={this.state.navPortfolio}
          labelContact={this.state.navContact}
        />
        <main>
          <Name/>
          {this.state.aboutMe}
          
        </main>
      </div>
    )
  }
};

export default Home;
