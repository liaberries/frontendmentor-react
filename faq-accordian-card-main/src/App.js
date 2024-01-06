import React from 'react';
import { useState } from 'react';
import {questions} from "./components/questions";
import './index.css';
import mobileImage from './images/illustration-woman-online-mobile.svg';
import desktopImage from './images/illustration-woman-online-desktop.svg';
import bgPatternMobile from './images/bg-pattern-mobile.svg';
import bgPatternDesktop from './images/bg-pattern-desktop.svg';
import box from './images/illustration-box-desktop.svg';
import SingleQuestion from './components/SingleQuestion';

function App() {

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleVisibility = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  

  return (
      <>
        <div className="card-container">
          <div className="column-one">
            <div className="orange-box">
              <img src={box} alt="box" className="desktop-box"/> 
            </div>
            <div className="image-container">
              <img src={mobileImage} alt="girl standing in front of screen" className="mobile-image"/>
              <img src={desktopImage} alt="girl standing in front of screen" className="desktop-image"/>
              <div className="image-shadow">
                <img src={bgPatternMobile} alt="shadow" className="mobile-shadow"/>
                <img src={bgPatternDesktop} alt="shadow" className="desktop-shadow"/>
              </div>
            </div>
            
            
          </div>
          
          <div className="column-two">
            <h1 className="title">FAQ</h1>
            <div className="questions">
              {questions.map((quest, index) => (
                  <SingleQuestion 
                    key={index}
                    question={quest.question}
                    answer={quest.answer}
                    isOpen={openQuestion === index}
                    onToggle={() => toggleVisibility(index)}
                    />
                ))}
            </div>
          </div>
      </div>
    </>
        
  );
}

export default App;
