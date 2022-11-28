import { symbols } from './symbols'

export const symbolsToOptions = (): { label: string; value: string }[] => {
  return symbols.map((symbol) => {
    return { label: symbol, value: symbol }
  })
}
