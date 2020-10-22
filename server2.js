const http = require ('http');
const url = require ('url');
const hostname ='127.0.0.1';
const port = 8380;
function start(route,handle) {
    function onRequest(request,response) {
        const postData = "";
   //   response.statusCode(200);
  //    response.setHeader('Content-Type','text/plain');
        const pathname = url.parse(request.url).pathname;
        console.log("request for "+pathname+" received.");
        request.setEncoding("utf8");
        request.addListener("date" , function(postDataChunk){
            postData += postDataChunk;
            console.log("Recieved post chunk '"+postDataChunk +"'.");
        });
        request.addListener("end" , function(){
            route(handle,pathname,response,postData);
        });

 //       response.writeHead(200 ,{"Content-Type":
 //               "text/plain"});

//        route(handle,pathname,response);

 //       const content = route(handle,pathname);
 //       response.write(content);
 //       response.end();
}
const server=http.createServer(onRequest);

server.listen(port,hostname, ()=>{
 console.log('server is running...');
});
}
exports.start = start;