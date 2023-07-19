import React from 'react';
import styles from './Plan.module.css'
import PlanImage from '../images/icon-music.svg'

const Plan = () => {
  return (
    <div className={styles["plan-container"]}>
        <img src={PlanImage} alt="musical icon"></img>   
        <div className={styles["annual-plan-container"]}>
            <h3 className={styles["title"]}>Annual Plan</h3>
            <p className={styles["price"]}>$59.99/year</p>
        </div>
        <a href="#">Change</a>
    </div>
  )
}

export default Plan
