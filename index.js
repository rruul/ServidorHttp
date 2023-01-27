const http = require('http') //const - variable que no cambian de valor let - variable que cambia
const PORT = 5000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hola Mundo!!!</h1>')})
server.listen(PORT, () => {
    console.log(`Servidor escuchando: ${PORT}`) 
    // console.log('Servidor escuchando: ' + PORT)
})