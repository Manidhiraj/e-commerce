import react from "react";
import './App.css';
import {Header} from './Header';
import Home from './Home.js';


function App() {
  return (
    // BEM
    <div className="app">
        <Header/>
        <Home />
    </div>

  );
}

export default App;
