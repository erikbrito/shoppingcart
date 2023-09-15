import { formatPrice } from './format'

it('should return the price', () => {
  expect(formatPrice(3.5).replace(/\s/, " ")).toEqual('R$ 3,50')
  expect(formatPrice(10).replace(/\s/, " ")).toEqual('R$ 10,00')
  expect(formatPrice(105.20).replace(/\s/, " ")).toEqual('R$ 105,20')
})