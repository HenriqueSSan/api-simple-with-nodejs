import { ICreateProductDTO } from "../../dtos/create_product.dto"
import { ProductEntity } from "../../entities/product"

import { IProductRepository } from "../IProductRepository"

import prisma from "../../../../config/prisma"

export class PostgressProductRepository implements IProductRepository {
  // Created a new Product
  async create(data: ICreateProductDTO): Promise<ProductEntity> {
    const dbProduct = await prisma.product.create({
      data: {
        name: data.name,
        price: data.prices.price,
        description: data.description,
        stock_amount: data.stock.amount,
        price_promotion: data.prices.price_promotion,
        avaliable: false,
      },
    })

    const overwrite_product: ProductEntity = {
      id: dbProduct.id,
      name: dbProduct.name,
      description: dbProduct.description,
      prices: {
        price_promotion: dbProduct.price_promotion,
        price: dbProduct.price,
      },

      stock: {
        amount: dbProduct.stock_amount,
      },

      avaliable: dbProduct.avaliable,

      variables: [],

      create_at: dbProduct.create_at,
      update_at: dbProduct.update_at,
    }

    return overwrite_product
  }

  // List all products in "database"
  async listAll(): Promise<ProductEntity[]> {
    const dbAllProduct = await prisma.product.findMany()

    const overwrite_product: ProductEntity[] = dbAllProduct.map(
      (dbProduct) => ({
        id: dbProduct.id,
        name: dbProduct.name,
        description: dbProduct.description,
        prices: {
          price_promotion: dbProduct.price_promotion,
          price: dbProduct.price,
        },

        stock: {
          amount: dbProduct.stock_amount,
        },

        avaliable: dbProduct.avaliable,

        variables: [],

        create_at: dbProduct.create_at,
        update_at: dbProduct.update_at,
      }),
    )

    return overwrite_product
  }

  async findById(
    data: Pick<ProductEntity, "id">,
  ): Promise<ProductEntity | undefined> {
    const dbProduct = await prisma.product.findUnique({
      where: {
        id: data.id,
      },
    })

    if (!dbProduct) return undefined

    const overwrite_product: ProductEntity = {
      id: dbProduct.id,
      name: dbProduct.name,
      description: dbProduct.description,
      prices: {
        price_promotion: dbProduct.price_promotion,
        price: dbProduct.price,
      },

      stock: {
        amount: dbProduct.stock_amount,
      },

      avaliable: dbProduct.avaliable,

      variables: [],

      create_at: dbProduct.create_at,
      update_at: dbProduct.update_at,
    }

    return overwrite_product
  }

  async findByName(
    data: Pick<ProductEntity, "name">,
  ): Promise<ProductEntity | undefined> {
    const dbProduct = await prisma.product.findFirst({
      where: {
        name: data.name,
      },
    })

    if (!dbProduct) return undefined

    const overwrite_product: ProductEntity = {
      id: dbProduct.id,
      name: dbProduct.name,
      description: dbProduct.description,
      prices: {
        price_promotion: dbProduct.price_promotion,
        price: dbProduct.price,
      },

      stock: {
        amount: dbProduct.stock_amount,
      },

      avaliable: dbProduct.avaliable,

      variables: [],

      create_at: dbProduct.create_at,
      update_at: dbProduct.update_at,
    }

    return overwrite_product
  }

  async update(
    data: Pick<ProductEntity, "id" | "name" | "description">,
  ): Promise<void> {
    await prisma.product.update({
      where: {
        id: data.id,
      },

      data: {
        name: data.name,
        description: data.description,
      },
    })
  }

  async updateStockById(
    data: Pick<ProductEntity, "id" | "stock">,
  ): Promise<void> {}

  async updateAvaliableById(
    data: Pick<ProductEntity, "id" | "avaliable">,
  ): Promise<void> {}

  async updatePriceById(
    data: Pick<ProductEntity, "id" | "prices">,
  ): Promise<void> {}

  async deleteById(data: Pick<ProductEntity, "id">): Promise<void> {
    await prisma.product.delete({
      where: {
        id: data.id,
      },
    })
  }
}
