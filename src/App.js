import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          HI LMAO :D <br /> yes
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <iframe frameborder="0" src="https://itch.io/embed-upload/2263349?color=8ac4fa" allowfullscreen="" width="980" height="688">
        <a href="https://specturnal.itch.io/dumb-ways-to-doctor">Play Dumb Ways to Doctor on itch.io</a>
      </iframe>
      <Button>click me {"<3"} </Button>
    </div>
  );
}

export default App;
