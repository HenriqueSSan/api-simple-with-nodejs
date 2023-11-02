import { Request, Response } from "express"

import { UpdateProductUseCase } from "./update.usecase"

interface IRequest {
  id: string
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

  avaliable: boolean

  variables: []
}

export class UpdateProductController {
  constructor(public updateProductUsecase: UpdateProductUseCase) {}

  async handle(request: Request<any, any, IRequest>, response: Response) {
    const params = request.params
    const body = request.body

    await this.updateProductUsecase.execute({
      id: params.id,
      name: body.name,
      stock: body.stock,
      prices: body.prices,
      variables: body.variables,
      avaliable: body.avaliable,
      description: body.description,
    })

    return response.status(200).send()
  }
}
