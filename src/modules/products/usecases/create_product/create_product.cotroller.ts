import { Request, Response } from "express"

import { CreateProductUseCase } from "./create_product.usecase"

interface IRequest {
  name: string
  description: string

  stock: {
    amount: number
  }

  prices: {
    price_promotion: number
    price: number
    float: number
  }

  variables: []
}

export class CreateProductController {
  constructor(public createProductUsecase: CreateProductUseCase) {}

  async handle(request: Request<any, any, IRequest>, response: Response) {
    const body = request.body

    const product = await this.createProductUsecase.execute({
      name: body.name,
      description: body.description,
      stock: body.stock,
      prices: body.prices,
      variables: body.variables,
    })

    return response.status(201).json(product)
  }
}
