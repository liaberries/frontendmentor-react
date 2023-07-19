import React from 'react';
import './index.css'
import Button from './components/Button';
import Summary from './components/Summary';
import Plan from './components/Plan'
import HeaderImage from './images/illustration-hero.svg';

function App() {
  return (
    <div className="app-container">
      <div className="header-img-container">
        <img className="header-image" src={HeaderImage} alt="musical illustration"/>
      </div>
      <div className="main-container">
        <Summary/>
        <Plan/>
        <Button/>
      </div>
    </div>
  )
}

export default App;