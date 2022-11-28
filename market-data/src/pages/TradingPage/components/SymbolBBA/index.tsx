import React, { useState, useEffect } from 'react'
import styles from './SymbolBBA.module.css'

interface IBba {
  sell: string
  buy: string
}

type configType = {
  label: string
  side: string
  color: string
}

const config: configType[] = [
  {
    label: 'SELL',
    side: 'sell',
    color: 'red',
  },
  {
    label: 'BUY',
    side: 'buy',
    color: 'green',
  },
]

const SymbolBBA = ({ symbol, onOrderCreate }) => {
  let timer
  const [bba, setBbA] = useState<IBba>(null)

  useEffect(() => {
    function generateBba() {
      const buy = Math.random() * 10
      const sell = buy + Math.random() / 10
      setBbA({
        buy: buy.toFixed(3),
        sell: sell.toFixed(3),
      })
    }

    generateBba()
    timer = setInterval(() => {
      generateBba()
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [symbol])

  return (
    <>
      {bba && (
        <div className={styles['forex-container']}>
          {config.map(({ label, side, color }) => (
            <div
              key={side}
              style={{ color: color }}
              onClick={() => onOrderCreate({ symbol, side: label, price: bba[side] })}
            >
              {label}
              <br />
              {bba[side]}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default SymbolBBA
