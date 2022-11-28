export interface IOrder {
  key: React.Key
  side: string
  price: number
  symbol: string
  qty: number
  ts: string
}

export const data: IOrder[] = [
  {
    key: '1',
    side: 'BUY',
    price: 1.59,
    symbol: 'DOGE/USDT',
    qty: 100,
    ts: '2022-11-23 07:46:54',
  },
  {
    key: '2',
    side: 'BUY',
    price: 1.25,
    symbol: 'DOGE/USDT',
    qty: 200,
    ts: '2022-11-23 07:46:56',
  },
  {
    key: '3',
    side: 'SELL',
    price: 1.68,
    symbol: 'DOGE/USDT',
    qty: 4000,
    ts: '2022-11-24 07:46:54',
  },
  {
    key: '4',
    side: 'SELL',
    price: 1.78,
    symbol: 'DOGE/XRP',
    qty: 10,
    ts: '2022-11-25 07:46:54',
  },
  {
    key: '5',
    side: 'SELL',
    price: 1.38,
    symbol: 'XRP/USDT',
    qty: 15,
    ts: '2022-11-25 08:46:54',
  },
  {
    key: '6',
    side: 'SELL',
    price: 1.18,
    symbol: 'DOGE/BTC',
    qty: 10,
    ts: '2022-11-20 07:43:51',
  },
  {
    key: '7',
    side: 'BUY',
    price: 2.89,
    symbol: 'XRP/USDT',
    qty: 11,
    ts: '2022-10-25 03:45:54',
  },
  {
    key: '8',
    side: 'BUY',
    price: 10.98,
    symbol: 'DOGE/BTC',
    qty: 20,
    ts: '2020-11-25 07:46:54',
  },
  {
    key: '9',
    side: 'SELL',
    price: 0.88,
    symbol: 'DOGE/XRP',
    qty: 14,
    ts: '2022-12-20 07:43:54',
  },
]
