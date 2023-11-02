import { ProductEntity } from "../../entities/product"
import { IProductRepository } from "../../repositories/IProductRepository"

export class ListAllProductUsecase {
  constructor(private ProductRepository: IProductRepository) {}

  async execute(): Promise<ProductEntity[]> {
    return this.ProductRepository.listAll()
  }
}
