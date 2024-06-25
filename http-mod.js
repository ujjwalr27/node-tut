const http = require('http')
const server = http.createServer((req , res)=>{
   if(req.url==='/'){
      res.end('Welcome to Home Page')

   }
   else if(req.url==='/about'){
      res.end('About')
   }
   res.end(`<h1> OOPS </h1>
      <a href='/'> back home </a>
    `)
})
server.listen(5007)