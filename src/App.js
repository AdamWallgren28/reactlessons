import logo from './logo.svg';
import './App.css';
// Lektion 3
// import { Counter } from './components/lektion3';
// import { Timer } from './components/lektion3';
// import { UserProfile } from './components/lektion3';

// Lektion 4
import { TraditionalGreeting, ArrowGreeting, UserProfile4 } from './components/lektion4';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React-lektioner</p>
        
      </header>
      {/* Lektion 3
      <div>
        <Counter title="Räknare" />
        <Timer title="Sekundräknare" />
        <UserProfile  title="Min Profil"
                      name="Adam"
                      email="adamWallgren28@seattlewonders.com"
                      bio="Frontend-utvecklare med passion för design."/>
      </div> */}

      {/*Lektion 4*/}
      <TraditionalGreeting name="Adam"/>
      <ArrowGreeting name="Adam" />
      <UserProfile4 name="Adam" age="28" location="Seattle"/>
    </div>
  );
}

export default App;
