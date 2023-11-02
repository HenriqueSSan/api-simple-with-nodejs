import { IProductRepository } from "../../repositories/IProductRepository"

interface IRequest {
  id: string
}

export class DeleteProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute({ id }: IRequest) {
    this.productRepository.deleteById({ id })
  }
}
