const jsonServer = require("json-server")

// crea el objeto de TODO mi servidor
const server = jsonServer.create() 

// hacer las configuraciones basicas de mi servidor
const middlewares = jsonServer.defaults() 
server.use(middlewares)

// permitir acceso de cualquier cliente a mi servidor
const allowAccessFromAnywhere = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
}
server.use(allowAccessFromAnywhere)

// crea TODAS las rutas de server a la base de datos indicada.
const router = jsonServer.router("db.json") 
server.use(router)

const PORT = process.env.PORT || 5001

server.listen(PORT, () => {
  console.log(`Servidor JSON andando! en el puerto ${PORT}`)
  console.log(`Acceso Local en: http://localhost:${PORT}`)
})