const path = require('path');
const express = require('express'); //grabbing express
const app = express(); //app uses express

const publicDirectoryPath=path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));
app.set('view engine', 'html');
app.use('/assets', express.static('assets'))

app.get('/', function (req, res) { //.get checks the root 
 // res.send('<h1>Hello</h1>')
 //res.render('index1')
 res.sendFile(__dirname + '/index.html');
})

app.get('/about', function (req, res) { //.get checks the root 
    res.send('<h1>About</h1>')
  })
 
app.listen(3000, () =>{ //listen for app to start

console.log("The server is running on port 3000")
}) 