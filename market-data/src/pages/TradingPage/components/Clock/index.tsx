import React, { useState, useEffect } from 'react'
import styles from './Clock.module.css'

const Clock = () => {
  let timer
  const [date, setDate] = useState<string>(null)

  useEffect(() => {
    function clock() {
      const date = new Date(),
        hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
        minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      setDate(`${hours}:${minutes}:${seconds}`)
    }

    clock()
    timer = setInterval(() => {
      clock()
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <div className={styles.clock}>{date}</div>
}

export default Clock
