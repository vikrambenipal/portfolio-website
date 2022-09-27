import './App.css';
import data from './data.js';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Projects data={data}/>
    </div>
  );
}

export default App;
