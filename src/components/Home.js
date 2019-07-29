import React, {Component} from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Projects from './Projects';
import data from '../content/data.js';

// import Image from './Image';
// import name from '../images/nueva.svg'
import { ReactComponent as Name } from '../images/jeuManzo.svg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: <AboutMe text={data[0].content}/>,
      navAboutMe: "Sobre mí",
      navProjects: "Proyectos",
      navContact: "Contacto",
    };
  }

  contentToSpanish = () => {
    this.setState({ aboutMe: <AboutMe text={data[0].content}/> });
    this.setState({ navAboutMe: "Sobre mí"});
    this.setState({ navProjects: "Proyectos"});
    this.setState({ navContact: "Contacto"});
  }

  contentToEnglish = () => {
    this.setState({ aboutMe: <AboutMe text={data[1].content}/> });
    this.setState({ navAboutMe: "About Me"});
    this.setState({ navProjects: "Projects"});
    this.setState({ navContact: "Contact"});

  }

  render () {
    return (
      <div className="home" >
        <Navbar
          onClickEng={this.contentToEnglish}
          onClickEsp={this.contentToSpanish}
          labelAboutMe={this.state.navAboutMe}
          labelProjects={this.state.navProjects}
          labelContact={this.state.navContact}
        />
        <main>
          <Name/>
          {this.state.aboutMe}
          <Projects/>
        </main>
      </div>
    )
  }
};

export default Home;
