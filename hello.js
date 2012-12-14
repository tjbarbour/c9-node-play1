var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    if(req.method == "GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile( "index.html","utf8", function(err, data) {
            var template = data.toString("utf",0,data.length);
            template = template.replace("$TOKEN$", new Date().toString());
            res.write(template);
            res.end();
        });
    }else if(req.method == "POST"){
        
    }
}).listen(process.env.PORT);