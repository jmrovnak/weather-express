const express = require('express');
const app = express();

const PORT = 5555

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.get('/', function (req, res) {
    // res.send('Server Test')
    res.render('index')
})

app.post('/', function (req, resp) {
    res.render('index');
})

app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`)
})