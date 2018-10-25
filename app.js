const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const config = require('./config');
const api = require('./routes');

const app = express();
 
app.use(helmet())
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/', api);

const port = process.env.PORT || config.app.api.port;

app.listen(port, (error) =>{
    if (error) {
        throw error;
    }
    console.log(`Api is listening on port ${port}`);
});


