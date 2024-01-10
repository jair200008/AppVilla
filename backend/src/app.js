const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//router
app.use('/api/users', require('./routes/users'));
app.use('/api/note', require('./routes/notes'));



module.exports = app;