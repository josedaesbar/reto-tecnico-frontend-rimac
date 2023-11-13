export const formatNumber = (data: number) => {
  return data > 1000 ? data.toLocaleString('en-US') : data.toString()
}
