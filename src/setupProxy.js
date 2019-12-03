const proxy = require("http-proxy-middleware");



module.exports = (app)=>{
    app.use("/api",proxy({
        target:"http://cmsjapi.ffquan.cn",
        changeOrigin:true,
        // pathRewrite:{
        //     "^/users":""
        // }
    })),
    app.use("/ajax",proxy({
        target:"http://m.maoyan.com",
        changeOrigin:true,
        // pathRewrite:{
        //     "^/users":""
        // }
    })),
    app.use("/users",proxy({
        target:"http://localhost:3000",
        changeOrigin:true,
    }))
    app.use("/index.php",proxy({
        target:"http://www.163nn.com",
        changeOrigin:true,
    }))
}
