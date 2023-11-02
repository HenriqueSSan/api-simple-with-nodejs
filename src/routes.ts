import { Router } from "express"

import { product_router } from "./modules/products/routes"

export const router = Router()

router.use("/product", product_router)
