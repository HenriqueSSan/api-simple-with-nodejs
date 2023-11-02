export type ICreateProductDTO = {
  name: string
  description: string

  stock: {
    amount: number
  }

  prices: {
    price_promotion: number
    price: number
    float: number
  }

  variables: []
}
