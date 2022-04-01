const express = require("express")
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const fs = require("fs")
const app = express()

// app.use(express.json()) // this is to accept data in json format
// app.use(express.urlencoded({extended: true}))// this is basically to decode the data send through html form


let bodyParser = require('body-parser')
// 關鍵start
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//end
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


app.get("/submit-quesion", (req, res)=>{
    console.log("->", req.url)   
    res.render("submitque",{data:result})
})

app.get("/about", (req, res) => {
    console.log("->", req.url)
    res.render("about")
})

app.post('/sendque', function (req, res) {
    console.log(req.body.num)
    d = {
        "id": req.body.num,
        "que": req.body.que,
        "option": {
            "A":req.body.opa,
            "B":req.body.opb,
            "C":req.body.opc,
            "D":req.body.opd
        },
        "answer": req.body.ans,
        "translate": req.body.trans
    }
    result.push(d)
    fs.writeFileSync("test.json",JSON.stringify(result),err => {
        if(err){
            console.error("失敗",err)
        }
        console.log("成功")
    })

    res.redirect("/submit-quesion")
    // res.send(req.body.que + '謝謝你的回覆');
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
