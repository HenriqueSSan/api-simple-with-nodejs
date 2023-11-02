import { NextFunction, Response, Request } from "express"

export async function alreadyExistsId(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params

  if (!id) throw new Error(`[404] NotFound - Params - ID: ${id}`)

  return next()
}
