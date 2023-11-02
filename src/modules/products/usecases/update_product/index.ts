// import { makeProductRepositoryInMemory } from "../../repositories/in-memory/ProductRepositoryInMemory"
import { PostgressProductRepository } from "../../repositories/prisma/PostgresProductRepository"

import { UpdateProductController } from "./update.cotroller"
import { UpdateProductUseCase } from "./update.usecase"

const postgresProductRepository = new PostgressProductRepository()

const updateProductUseCase = new UpdateProductUseCase(postgresProductRepository)

const updateProductController = new UpdateProductController(
  updateProductUseCase,
)

export { updateProductController }
