import { Request, Response } from "express"

import { DeleteProductUseCase } from "./delete_product.usecase"

interface IRequest {
  id: string
}

export class DeleteProductController {
  constructor(public deleteProductUseCase: DeleteProductUseCase) {}

  async handle(request: Request, response: Response) {
    const params = request.params

    const product = await this.deleteProductUseCase.execute({
      id: params.id,
    })

    return response.status(201).json(product)
  }
}
