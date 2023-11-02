import { IProductRepository } from "../../repositories/IProductRepository"

interface IRequest {
  id: string
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

  avaliable: boolean

  variables: []
}

export class UpdateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: IRequest) {
    await this.productRepository.update({
      id: data.id,
      name: data.name,
      description: data.description,
    })
  }
}
