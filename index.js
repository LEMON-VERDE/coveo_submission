const express = require('express');
const parser = require('body-parser');
const fs = require('fs');
const solve = require('./enigme.js');


const payload = JSON.parse(fs.readFileSync('./team.json'),'utf8');

const app = express();
app.use(parser.json());
app.set('port', process.env.PORT || 80);

app.post('', (req, res)=>{
    payload.solution = solve(req.body.shapes);
    res.json(payload);
});

app.get('',(req, res)=>{
    payload.solution = 0;
    res.json(payload);
});

app.listen(app.get('port'));