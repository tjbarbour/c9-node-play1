var http = require("http");
var static_server = require("node-static");
var file = new(static_server.Server)("./");
http.createServer(function(req, res) {
    req.addListener('end', function(){
        file.serve(req,res); 
    });
}).listen(process.env.PORT);