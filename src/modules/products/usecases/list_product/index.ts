import { PostgressProductRepository } from "../../repositories/prisma/PostgresProductRepository"

import { ListAllProductController } from "./list_product.cotroller"
import { ListAllProductUsecase } from "./list_product.usecase"

const postgresProductRepository = new PostgressProductRepository()

const listAllProductUseCase = new ListAllProductUsecase(
  postgresProductRepository,
)

export const listAllProductController = new ListAllProductController(
  listAllProductUseCase,
)
