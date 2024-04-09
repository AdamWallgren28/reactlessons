import logo from './logo.svg';
import './App.css';
import { Counter } from './components/lektion3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save...
        </p>
        
      </header>
      <div>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
