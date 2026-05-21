import axio from "axios"

//http://localhost:3000

//define a porta onde a API local esta rodando
const apiPort = "3000"

const localApi = `http://localhost:${apiPort}`

const externalApi = null

const api = axio.create({
    baseURL: localApi
})


export  default api