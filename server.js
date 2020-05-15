var express = require('express');
var bodyParser = require('body-parser');
var pdf = require('./pdf.js');
var pdf2 = require('./pdf2.js');
const pg = require('pg');
var app = express();
app.use(bodyParser.urlencoded({
  limit: '10mb',
  extended: true
}));
global.client = new pg.Client(process.env.DATABASE_URL || {
  user: 'qnfkzdqpeybeti',
  password: '3e32b9c61b4baab4b30edf09727c8f2e687c1ae0e4cf32e4c508f98b6990f9eb',
  database: 'd36hu2i3ceh9d1',
  port: 5432,
  host: 'ec2-23-21-156-171.compute-1.amazonaws.com',
  ssl: true
});

//global.hummus = require('hummus');
//pdf2('tst.pdf',[/a/g,'f'])
//pdf.replaceText('tst.pdf', 'output.pdf', 1, ['a', 'p', 'l', 'e'], ['а', 'р', 'ӏ', 'е']);

app.get('/',(req,res)=>{
    res.send('x')
})

app.post('/save',(req,res)=>{
    var data = req.body.text.replace("/'/g","\'")
    console.log(data)
    client.query("INSERT INTO plagrizm_data (data) VALUES ("+data+")",(res,err)=>{

    })
})

app.listen(process.env.POR  T, function () {
    console.log('Server Started');
});
