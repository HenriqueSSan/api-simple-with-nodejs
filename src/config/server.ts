/**
 * @file
 * This is a using for maker configurations for server instance,
 *
 * @example
 * server.listen(PORT, () => console.log("message"))
 */

import dotenv from "dotenv"

dotenv.config()

export const PORT = process.env.PORT
