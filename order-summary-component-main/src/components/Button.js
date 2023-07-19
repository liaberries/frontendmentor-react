import React from 'react'
import styles from './Button.module.css'

const Button = () => {
  return (
    <>
      <div className={styles["button-container"]}>
        <button className={styles["btn"]}>Proceed to Payment</button>
      </div>
      <a href="#" className={styles["cancel"]}>Cancel Order</a>
    </>
  )
}

export default Button
