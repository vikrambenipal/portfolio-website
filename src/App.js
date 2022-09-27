import './App.css';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
    </div>
  );
}

export default App;
