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
      <Home />
      <Projects />
      <Technologies />
      <Work />
      <Achievements />
      <Hobbies />      
    </div>
  );
}

export default App;
