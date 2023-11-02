import { ProductEntity } from "../../entities/product"
import { IProductRepository } from "../../repositories/IProductRepository"

interface IRequest {
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

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  execute(data: IRequest): Promise<ProductEntity> {
    const product = this.productRepository.create({
      name: data.name,
      stock: data.stock,
      prices: data.prices,
      description: data.description,
      variables: data.variables,
    })

    return product
  }
}
