import React, {useRef} from "react";
import logo from './logo.svg';
import './App.css';



function App() {
  const spanUsername = useRef();
  const spanPassword = useRef();

  async function getUsers(){
     await fetch("https://restapitestewds.herokuapp.com/62a5a5d4eaf608f25d697d91", {method: "GET"})
      .then((res) => {
        return res.json();
      })
      .then(data => {
        spanUsername.current.value = data.username;
        spanPassword.current.value = data.password;
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  return (
    <div className="App">
      <header onLoad={getUsers} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Utilizador:</p> <span ref={spanUsername}></span>
        <p>Password:</p> <span ref={spanPassword}></span>
      </header>
    </div>
  );
}

export default App;
