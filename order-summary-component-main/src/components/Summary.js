import React from 'react'
import styles from './Summary.module.css'

const Summary = () => {
  return (
    <>
        <h1 className={styles["order-title"]}>Order Summary</h1>
        <p className={styles["body-text"]}>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
    </>
  )
}
export default Summary
