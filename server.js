const express = require('express');
const app = express();

const PORT = 5555

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.send('Server Test')
})

app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`)
})