const http = require('http')

const server = http.createServer(
    
    (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Server working')
        // console.log('Server Listening to port: ' + process.env.PORT ? process.env.PORT : '3000')
    }
    
)

server.listen(process.env.PORT || 3000)

