const http = require('http'); // import http module

const PORT = 3000;
const host = 'localhost';

const server = http.createServer(function listener(request , response) {

    const Header = {
        'content-url' : 'https://github.com/singhsanket143/Basic-HTTP-server-using-HTTP-module-and-Express/blob/master/httpindex.js',
        'fetching-data' : 'repositpory-code'
    }

   
   
    response.writeHead(200 , 'ok' , Header);
    setTimeout(() =>{
        response.end("welcome");
    }, 5000);
   
})


server.listen(PORT , host ,  () => {
      console.log(`Server listening on Port ${PORT} and ${host}`);
})








