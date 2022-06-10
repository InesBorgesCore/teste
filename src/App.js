import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Utilizador:</p> <span></span>
        <p>Password:</p> <span></span>
      </header>
    </div>
  );
}

export default App;
