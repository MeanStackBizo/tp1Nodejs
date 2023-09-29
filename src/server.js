var http=require("http");

var httpserver= http.createServer(function(req, res) {
    res.writeHead("200",{'content-type':'text/html'});
    res.end(`<h1>Execution :Test Node js server</h1>`);
})

httpserver.listen(3000, function() {
	console.log("Node Server started");
});