import logo from './logo.svg';
import './App.css';
// Lektion 3
// import { Counter } from './components/lektion3';
// import { Timer } from './components/lektion3';
// import { UserProfile } from './components/lektion3';

// Lektion 4
import { TraditionalGreeting, ArrowGreeting, UserProfile4, Card, Counter2, TitleUpdater, ToDoList } from './components/lektion4';



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
      <hr/>
      <UserProfile4 name="Adam" age="28" location="Seattle"/>
      <hr/>
      <Card>
        <h3>Plock </h3>
        <h2>Warrior G6.1 Pro</h2>
        <img src="https://www.warrioreurope.com/pub/media/catalog/product/cache/image/8706e245c2991d92f8e0b03c5f265359/g/6/g61ppt2www_war_01_i_1.png" style={{ transform: 'rotate(-90deg)', width: '15vw'}} />
        <h1>4 499 kr</h1>
      </Card>
      <hr/>
      <Counter2 />
      <hr/>
      <TitleUpdater />
      <hr/>
      <ToDoList />
      <hr/>
    </div>
  );
}

export default App;
