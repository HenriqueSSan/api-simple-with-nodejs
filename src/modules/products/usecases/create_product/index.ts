// import { makeProductRepositoryInMemory } from "../../repositories/in-memory/ProductRepositoryInMemory"

import { PostgressProductRepository } from "../../repositories/prisma/PostgresProductRepository"

import { CreateProductController } from "./create_product.cotroller"
import { CreateProductUseCase } from "./create_product.usecase"

const postgresProductRepository = new PostgressProductRepository()

const createProductUseCase = new CreateProductUseCase(postgresProductRepository)

const createProductController = new CreateProductController(
  createProductUseCase,
)

export { createProductController }
