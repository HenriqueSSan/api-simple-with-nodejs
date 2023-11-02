import { ICreateProductDTO } from "../../dtos/create_product.dto"
import { ProductEntity } from "../../entities/product"

import { IProductRepository } from "../IProductRepository"

export class ProductRepositoryInMemory implements IProductRepository {
  products: ProductEntity[] = []

  // Created a new Product
  async create(data: ICreateProductDTO): Promise<ProductEntity> {
    if (!data) throw new Error("Data is found")

    const product = new ProductEntity()

    const overrite_product: ProductEntity = {
      ...product,
      name: data.name,
      stock: data.stock,
      prices: data.prices,
      description: data.description,
      create_at: new Date().toISOString(),
      update_at: new Date().toISOString(),
    }

    this.products.push(overrite_product)

    return overrite_product
  }

  // List all products in "database"
  async listAll(): Promise<ProductEntity[]> {
    return this.products || []
  }

  async findById(
    data: Pick<ProductEntity, "id">,
  ): Promise<ProductEntity | undefined> {
    return this.products.find((product) => product.id === data.id)
  }

  async findByName(
    data: Pick<ProductEntity, "name">,
  ): Promise<ProductEntity | undefined> {
    return this.products.find((product) => product.name === data.name)
  }

  async update(
    data: Pick<ProductEntity, "id" | "name" | "description">,
  ): Promise<void> {
    const findProductIndex = this.products.findIndex(
      (product) => product.id === data.id,
    )

    this.products[findProductIndex].name = data.name

    this.products[findProductIndex].description = data.description

    this.products[findProductIndex].update_at = new Date().toISOString()
  }

  async updateStockById(
    data: Pick<ProductEntity, "id" | "stock">,
  ): Promise<void> {
    const findProductIndex = this.products.findIndex(
      (product) => product.id === data.id,
    )

    this.products[findProductIndex].stock = data.stock
    this.products[findProductIndex].update_at = new Date().toISOString()
  }

  async updateAvaliableById(
    data: Pick<ProductEntity, "id" | "avaliable">,
  ): Promise<void> {
    const findProductIndex = this.products.findIndex(
      (product) => product.id === data.id,
    )

    this.products[findProductIndex].avaliable = data.avaliable
    this.products[findProductIndex].update_at = new Date().toISOString()
  }

  async updatePriceById(
    data: Pick<ProductEntity, "id" | "prices">,
  ): Promise<void> {
    const findProductIndex = this.products.findIndex(
      (product) => product.id === data.id,
    )

    this.products[findProductIndex].prices = data.prices
    this.products[findProductIndex].update_at = new Date().toISOString()
  }

  async deleteById(data: Pick<ProductEntity, "id">): Promise<void> {
    const findProductIndex = this.products.findIndex(
      (product) => product.id === data.id,
    )

    const products = this.products

    products.splice(findProductIndex, 1)

    this.products = products
  }
}

export const makeProductRepositoryInMemory = new ProductRepositoryInMemory()
