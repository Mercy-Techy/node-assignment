const express = require("express")
const app = express()
// first assignment project
// app.use((req,res,next)=>{
//     const url = req.originalUrl;
//     if(url != "/favicon.ico"){
//         console.log("response one url :", req.originalUrl);
//         next();
//     }
// })
// app.use((req,res,next)=>{
//     const url = req.originalUrl;
//     if (url != "/favicon.ico") {
//       console.log("response two url :", req.originalUrl);
//       next();
//     }
// })
// app.use((req,res,next)=>{
//     res.send("<h1>Hi,this is my second assignment</h1>")
// })

// second assignment project
app.use('/users',(req,res,next)=>{
    // const url = req.originalUrl;
    // if(url != "/favicon.ico"){
    // }
    console.log("user page url is: ",req.originalUrl);
    res.send("<h1>Hello user this is the page for users</h1>")
})
app.use('/',(req,res,next)=>{
    // const url = req.originalUrl;
    // if(url != "/favicon.ico"){
    // }
    console.log("page page url is: ", req.originalUrl);
    res.send("<h1>Hello user this is the home page</h1>")
})
app.listen(3000)