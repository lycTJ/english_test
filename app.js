const express = require("express")
const expressLayouts = require('express-ejs-layouts');
const res = require("express/lib/response");
// const fileUpload = require('express-fileupload');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const flash = require('connect-flash');
const fs = require("fs")

const app = express()


app.use(express.static('public'))
app.use('/css', express.static( __dirname+'public/css'))


app.use(expressLayouts)
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');  

// var file = "data.json"

var file = "test.json"

var result = JSON.parse(fs.readFileSync(file))
// var strResult = JSON.stringify(fir)

// console.log(result[1].id)

app.get("/", (req,res)=>{
    console.log("->",req.url)
    
    
    // res.send(strResult)
    
    res.render("index",{title: "English-testing",data:result})
})








/**Server連線 
 * 
*/
const PORT = process.env.port || 3000
const IP = "127.0.0.1"
app.listen(PORT,(err)=>{
    if(err){
        console.log("wrong")
    }
    console.log(`Server is running at http://${IP}:${PORT}`)
})
