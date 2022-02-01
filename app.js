const express = require('express');
const req = require('express/lib/request');
const { json } = require('express/lib/response');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use ('/', require ('./router'));


app.listen(5000,()=>{

console.log('SERVER CORRIENDO EN http://localhost:5000');


});