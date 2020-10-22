const exec = require("child_process").exec;


function start(response,postData) {
    console.log("Request handler 'start' was called.");
//    const content = "empty";
    const body = '<html>'+'<head>'+'<meta http-equiv="Content-Type" content="text/html;' + 'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<from action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+'</br></br>'+
        '<input type="file" name="filetoupload">'+'</br></br>'+
        '<input type="submit" value="submit text" />'+
        '</from>'+
        '</body>'+
        '</html>' ;

    //  exec("ls-lah",function (error,stdout,stderr){}
 //   exec("find/",{timeout: 10000,maxBuffer: 20000*1024},function (error,stdout,stderr){

    response.writeHead(200 ,{"Content-Type": "text/html"});
    response.write(body);
    response.end();
       // content = stdout;
//    });

//    function sleep(milliSeconds){
//        const startTime = new Date().getTime();
//        while (new Date().getTime()<startTime+milliSeconds);
//    }
//    sleep(5000);
//    return content;
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200 ,{"Content-Type": "text/plain"});
    response.write("you've sent:"+postData);
    response.end();
//    return "Hello upload";
}
module.exports = {start,upload}