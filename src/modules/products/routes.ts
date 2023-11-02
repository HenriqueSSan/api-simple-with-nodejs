import { Router } from "express"

import { listAllProductController } from "./usecases/list_product"
import { createProductController } from "./usecases/create_product"
import { deleteProductController } from "./usecases/delete_product"
import { updateProductController } from "./usecases/update_product"

import { alreadyExistsId } from "../../middlewares/alreadyExistId"

export const product_router = Router()

// prettier-ignore
product_router.get("/", (req, res) => listAllProductController.handle(req, res))
// prettier-ignore
product_router.post("/", (req, res) => createProductController.handle(req, res))
// prettier-ignore
product_router.put("/:id", alreadyExistsId, (req, res) => updateProductController.handle(req, res))
// prettier-ignore
product_router.delete("/:id",alreadyExistsId, (req, res) => deleteProductController.handle(req, res))
