// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Tile from './components/Tile';
import Typing from './components/Typing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <NavBar />
          <h1>HI I AM MANOJ</h1>
          <Typing 
            text={[
              "Hello, welcome to the typing effect demo!",
              "Enjoy exploring this cool effect!",
              "This is an example of typing and deleting text.",
            ]}
            typingSpeed={100}
            deletingSpeed={50}
            duration={1000}
          />
          <Tile
            header="Class is going on"
            subHeader="Everyone is making a tile"
            img="https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"
            text="Learn with Friends, Grow Together!
            Introducing the Scaler School of Technology Referral Program."
            link="https://www.scaler.com"
            linkText="Scaler"
          />
      </header>
    </div>
  );
}

export default App;