const express = require('express');
const parser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(parser.json());

app.set('port', process.env.PORT || 80);

app.post('', (req, res)=>{
    
    fs.writeFile('./request.log',JSON.stringify(req.body));
    res.send('Express Works');
    console.log('saved message');
});

app.listen(app.get('port'));