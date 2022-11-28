import { symbols } from './symbols'

export const symbolsToObject = (): { text: string; value: string }[] => {
  return symbols.map((symbol) => {
    return { text: symbol, value: symbol }
  })
}
