import React from 'react';
import './index.css'
import Summary from './components/Summary';
import Button from './components/Button';
import Plan from './components/Plan';
import HeaderImage from './images/illustration-hero.svg';

function App() {
  return (
    <main className="app-container">
      <div className="header-img-container">
        <img className="header-image" src={HeaderImage} alt="musical illustration"/>
      </div>
      <div className="main-container">
        <Summary/>
        <Plan/>
        <Button/>
      </div>
    </main>
  )
}

export default App;