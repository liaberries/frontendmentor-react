import React, { useState } from 'react';
import styles from './SingleQuestion.module.css';
import downArrow from '../images/icon-arrow-down.svg'

export default function SingleQuestion({ question, answer, isOpen, onToggle }) {

    return (
        <>
            <div className={styles["article-question"]}>
                <article onClick={onToggle}>
                    <h2 className={isOpen ? styles.clicked : ''}>{question}</h2>
                    <img src={downArrow}
                        alt="Toggle"
                        className={isOpen ? styles.arrowOpen : styles.arrowClosed}
                    />
                </article>
                {isOpen && <p>{answer}</p>}
            </div>
        </>
    )

}