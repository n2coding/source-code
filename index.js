const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
var datetime = require('node-datetime')

const app = express();
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

app.get('/', function(req, res) {
    res.send("Cannot GET /")
})

app.post('/createNewRoom', function(req, res) {
    try {
        if(!fs.existsSync(`transcript/${id}`)) {
            fs.mkdirSync(`transcript/${id}`);
        }
    }
    catch {
        res.send({success: 0});
    }
    res.send({success: 1});
})

app.post('/writeMessage', function(req, res) {
    const result = req.body;
    var dt = datetime.create();
    var formatted = dt.format("d-m-Y H:M:S");

    const finalResult = `${formatted} [${result.name}]: ${result.passage}`
    fs.appendFile(`transcript/${id}/${result.id}.txt`, finalResult, err => {
        if (err) {
            console.log(err);
        }
    })
    res.send({success: 1});
})