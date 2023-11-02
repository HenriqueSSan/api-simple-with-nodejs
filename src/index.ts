import express from "express"

import body_parser from "body-parser"

// ----- ROUTER ----- //
import { router } from "./routes"

// ----- CONFIG ----- //
import { PORT } from "./config/server"

// --- DEP --- //
const server = express()

// --- CONFIG SERBER --- //
server.use(express.json())
server.use(body_parser.json())
server.use(router)

// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ //

const listeningListener = () => console.log(`Inicialização na porta ${PORT}`)

server.listen(PORT, listeningListener)

// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ //
