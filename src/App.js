import NavBar from './Components/NavBar.js';
import Home from './Components/Home.js';
import Particle from './Components/Particle.js';
import AboutMe from './Components/AboutMe.js';
import Experience from './Components/Experience.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Particle/>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Experience/>
    </div>
  );
}

export default App;
