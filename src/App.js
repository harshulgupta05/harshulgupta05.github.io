//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Achievements from './pages/Achievements';

function App() {
  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#home">Harshul Gupta</a>
            {/* <div className="navbar-nav"> */}
                <ul className="navbar-nav">{ /*mb-lg-0"> */  }
                    <li className="nav-item mx-2">
                          <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#technologies">Technologies</a>
                    </li>
                    <li className="nav-item mx-2">
                          <a className="nav-link" href="#achievements">Achievements</a>
                    </li>
                    <li className="nav-item mx-2">
                          <a className="nav-link" href="#work">Work &amp; Volunteering</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#hobbies">Hobbies</a>
                    </li>                            
                </ul>
            {/* </div> */}
        </div>
      </nav>
      <Home />
      <Projects />
      <Technologies />
      <Work />
      <Achievements />
      <Hobbies />
      {/* <footer> */}
      {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
      {/* </footer> */}
    </div>
  );
}

export default App;
