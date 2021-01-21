import React from 'react'
import './App.css';
import Nav from './Nav';
import About from './About';
import Personajes from './Personajes';
import CharDetail from './CharDetail';
import Poster from './img/rickandmorty.jpg'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About}/>
          <Route path='/shop' exact component={Personajes} />
          <Route path='/shop/:urlId' component={CharDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Rick and Morty API Page</h1>
    <img src={Poster} className='poster' alt='Poster' />
  </div>
);

export default App;
