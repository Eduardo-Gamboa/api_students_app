const express = require('express');
const app = express();

// Settings
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
// app.set('port', process.env.PORT || 3000);

// MIddlewares
app.use(express.json());
app.use(bodyParser.json());

//Routes
app.use(require('./routes/productos'));

app.listen(PORT, () => {
    console.log('Server on port ' + PORT + ' !!!');
});