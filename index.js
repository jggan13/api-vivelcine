const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose }  = require('./database');

//Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/movies', require('./routes/movies.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server en puerto ${app.get('port')}`);
});