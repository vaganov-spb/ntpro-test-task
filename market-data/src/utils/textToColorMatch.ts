export const textToColorMatch = (text: string) => {
  switch (text) {
    case 'SELL':
      return 'red'
    case 'BUY':
      return 'green'
    default:
      return 'blue'
  }
}
