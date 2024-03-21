
import '../App.css';
import About from '../Sections/about/about';
import Nav from '../Sections/Nav/nav';
import Skills from '../Sections/skills/skills';
import Header from '../Sections/header/header';
import Certification from '../Sections/certifications';
import ContactMe from '../Sections/contact me/contact';
// import SplitPane from 'react-split-pane';

function Index() {

  return (
    < div className="app-container"> 
      <div className="header-wrapper">
        <Header />
      </div>
      <div className='left-pane'>
          <Nav />
        </div>
        <div className='right-pane app-wrapper'>
          <About />
          <Skills />
          <Certification />
          <ContactMe />
         </div>
      {/* <div className="app">
      </div>     */}
    </div>
  );
}

export default Index;
