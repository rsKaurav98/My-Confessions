
import './App.css';
import {Route } from "react-router-dom";
import Home from './Pages/Home';
import Confessions from './Pages/Confessions';

function App() {
  return (
    <div className='App'>
      <Route exact path="/" component={Home}/>
      <Route  path="/confessions" component={Confessions}/>
    </div>
  );
}

export default App;
