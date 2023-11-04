import NavBar from './Components/NavBar.js';
import Home from './Components/Home.js';
import Particle from './Components/Particle.js';
import AboutMe from './Components/AboutMe.js';
import Experience from './Components/Experience.js';
import DProjects from './Components/DProjects.js';
import PProjects from './Components/PProjects.js';
import GetInTouch from './Components/GetInTouch.js';
import { Route } from 'react-router-dom';
import 'animate.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Particle/>
      <NavBar/>
      <Route exact path='/' component={Home}/>
      <Route path='/aboutme' component={AboutMe}/>
      <Route path='/experience' component={Experience}/>
      <Route path='/pprojects' component={PProjects}/>
      <Route path='/dprojects' component={DProjects}/>
      <Route path='/contact' component={GetInTouch}/>
    </div>
  );
}

export default App;
