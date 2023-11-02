// import { makeProductRepositoryInMemory } from "../../repositories/in-memory/ProductRepositoryInMemory"

import { PostgressProductRepository } from "../../repositories/prisma/PostgresProductRepository"

import { DeleteProductController } from "./delete_product.cotroller"
import { DeleteProductUseCase } from "./delete_product.usecase"

const postgresProductRepository = new PostgressProductRepository()

const deleteProductUseCase = new DeleteProductUseCase(postgresProductRepository)

const deleteProductController = new DeleteProductController(
  deleteProductUseCase,
)

export { deleteProductController }
