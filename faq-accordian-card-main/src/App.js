import React from 'react';
import { useState } from 'react';
import {questions} from "./components/questions";
import './index.css';
import mobileImage from './images/illustration-woman-online-mobile.svg';
import desktopImage from './images/illustration-woman-online-desktop.svg';
import bgPatternMobile from './images/bg-pattern-mobile.svg';
import bgPatternDesktop from './images/bg-pattern-desktop.svg';
import SingleQuestion from './components/SingleQuestion';

function App() {

  const [quests] = useState(questions);

  return (
    <div className="container">
      <div className="background-image-container">
        <img src={bgPatternMobile} alt="shadow"></img>
      </div>
        
      <div className="image-container">
        <img src={mobileImage} alt="girl standing in front of giant computer screen"></img>
      </div>
        {/* <picture>
          <source media="(min-width:480px)" srcSet={mobileImage} className="mobile-image"/>
          <source media="(min-width: 768px)" srcSet={desktopImage} className="desktop-image" />  
          <img src={desktopImage} alt="" className="desktop-image"/>
        </picture> */}
      

      <article className="questions">
        <h1 className="title">FAQ</h1>
        {quests.map((quest, index) => (
          <SingleQuestion 
            key={index}
            question={quest.question}
            answer={quest.answer}
            />
        ))}
      </article>
    
    </div>
  );
}

export default App;
