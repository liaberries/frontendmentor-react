import React, { forwardRef, useState } from 'react';
import SingleQuestion from './SingleQuestion';
import questions from './questions';

export default function FAQList() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleVisibility = (index) => {
        console.log("Toggling visibility for question:", index);
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div>
            {questions.map((faq, index) => (
                <SingleQuestion 
                    key={index}
                    isOpen={openQuestion === index}
                    onToggle={() => toggleVisibility(index)}
                    question={faq.question}
                    answer={faq.answer}
                />
            ))}
        </div>
    );
}