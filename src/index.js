const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/authController')(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

