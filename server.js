const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

const PORT = 5555

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function (req, res) {
    // res.send('Server Test')
    res.render('index');
})

app.post('/', function (req, res) {
    res.render('index');
    console.log(req.body.city);
})

app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`)
})