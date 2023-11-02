import { Request, Response } from "express"

import { ProductEntity } from "../../entities/product"

import { ListAllProductUsecase } from "./list_product.usecase"

export class ListAllProductController {
  constructor(private ListAllProductUsecase: ListAllProductUsecase) {}

  async handle(
    _: Request,
    response: Response,
  ): Promise<Response<ProductEntity[]>> {
    const allProducts = await this.ListAllProductUsecase.execute()

    return response.status(200).json(allProducts)
  }
}
