import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Select, Modal, InputNumber } from 'antd'
import { addOrder, addOrderPayload } from '../../actions/ordersActions'
import Clock from './components/Clock'
import SymbolBBA from './components/SymbolBBA'
import { symbolsToOptions } from '../../utils/symbolsToOptions'
import styles from './TradingPage.module.css'

export interface ICreateOrder {
  symbol: string
  side: string
  price: number
  volume: number
}

const defaultOrder: ICreateOrder = {
  symbol: '',
  side: '',
  price: 0,
  volume: 0,
}

const TradingPage = ({ addOrder }) => {
  const [symbol, setSymbol] = useState<string>(null)
  const [modalOpen, setModalStatus] = useState<boolean>(false)
  const [orderParams, setOrderParams] = useState<ICreateOrder>(defaultOrder)

  const handleChange = (value) => {
    setSymbol(value)
  }

  const createOrder = ({ symbol, side, price }: ICreateOrder) => {
    setOrderParams({ side, price, symbol, volume: 0 })
    setModalStatus(true)
  }

  const handleOk = () => {
    const d = new Date()
    const dateString =
      d.getFullYear() +
      '-' +
      ('0' + (d.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + d.getDate()).slice(-2) +
      ' ' +
      ('0' + d.getHours()).slice(-2) +
      ':' +
      ('0' + d.getMinutes()).slice(-2) +
      ':' +
      ('0' + d.getSeconds()).slice(-2)

    addOrder({
      symbol: orderParams.symbol,
      side: orderParams.side,
      price: orderParams.price,
      qty: orderParams.volume,
      ts: dateString,
    })
    setModalStatus(false)
  }

  const handleCancel = () => {
    setModalStatus(false)
  }

  const onChange = (value: number) => {
    setOrderParams({ ...orderParams, volume: value })
  }

  return (
    <div className={styles.trading}>
      <Clock />
      <Select
        showSearch
        className={styles['select-symbol']}
        onChange={handleChange}
        options={symbolsToOptions()}
      />
      {symbol && <SymbolBBA symbol={symbol} onOrderCreate={createOrder} />}
      <Modal
        title='Make Order'
        open={modalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: !orderParams.volume }}
      >
        <div className={styles['modal-info']}>
          <div className={styles[`side__${orderParams.side.toLowerCase()}`]}>
            {orderParams.side}
          </div>
          <div>{orderParams.price}</div>
          <div>{orderParams.symbol}</div>
        </div>
        <div className={styles['volume-container']}>
          <span className={styles['volume-text']}>Volume</span>
          <InputNumber
            className={styles['volume-input']}
            min={0}
            value={orderParams.volume}
            onChange={onChange}
          />
        </div>
      </Modal>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addOrder: (payload: addOrderPayload) => dispatch(addOrder(payload)),
})

export default connect(null, mapDispatchToProps)(TradingPage)
