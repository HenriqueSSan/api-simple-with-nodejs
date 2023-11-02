import { v4 as uuidV4 } from "uuid"

export class ProductEntity {
  id: string = ""
  name: string = ""
  description: string = ""

  stock = {
    amount: 0,
  }

  prices = {
    price_promotion: 0,
    price: 0,
  }

  avaliable = false

  variables = []

  create_at: Date | string = ""
  update_at: Date | string = ""

  constructor() {
    const notAlreadyExistsFields = () => {
      if (!this.id) {
        this.id = uuidV4()
        this.avaliable = true
      }
    }

    notAlreadyExistsFields()
  }
}
