import { ICreateProductDTO } from "../dtos/create_product.dto"

import { ProductEntity } from "../entities/product"

// prettier-ignore
export interface IProductRepository {
  create(data: ICreateProductDTO): Promise<ProductEntity>

  listAll(): Promise<ProductEntity[]>

  findById(data: Pick<ProductEntity, "id">): Promise<ProductEntity | undefined>
  findByName(data: Pick<ProductEntity, "name">): Promise<ProductEntity | undefined>

  update(data: Pick<ProductEntity, "id" | "name" | "description">): Promise<void>
  updateStockById(data: Pick<ProductEntity, "id" | "stock">): Promise<void>
  updateAvaliableById(data: Pick<ProductEntity, "id" | "avaliable">): Promise<void>
  updatePriceById(data: Pick<ProductEntity, "id" | "prices">): Promise<void>

  deleteById(data: Pick<ProductEntity, "id">): Promise<void>
}
