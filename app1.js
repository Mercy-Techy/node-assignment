const http = require("http")

const server = http.createServer((req,res)=>{
const url = req.url
if(url == '/'){
    res.setHeader("Content-Type","text/html")
    res.write("<html>")
    res.write("<head><title>My first assignment</title></head>")
    res.write("<body>")
    res.write("<h1>Welcome to my first Assignment project</h1>")
    res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>')
    res.write("</body></html>")
    res.end()
}
else if(url == "/users"){
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first assignment</title></head>");
    res.write("<body><ul>")
    res.write("<li>user 1 </li>")
    res.write("<li>user 2 </li>")
    res.write("<li>user 3 </li>")
    res.write("<li>user 4 </li>")
    res.write("<li>user 5 </li>")
    res.write("</ul></body>")
    res.end()
}
else if(url == "/create-user"){
    const body = []
    req.on('data',(chunk)=>{
       body.push(chunk)
    })
    req.on('end',()=>{
        const bufferedbody = Buffer.concat(body).toString()
        const username = bufferedbody.split('=')[1]
        console.log(username);
        res.statusCode = 302
        res.setHeader("Location","/")
        res.end()
    })
}
})
server.listen(5000)