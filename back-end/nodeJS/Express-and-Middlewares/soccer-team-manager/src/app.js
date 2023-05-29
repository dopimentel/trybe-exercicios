const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const teamsRouter = require('./routes/teamsRouter');
const handleErrors = require('./middlewares/handleErrors');
require('express-async-errors'); 

const limiter = rateLimit({
   max: 100,
   windowMs: 20 * 60 * 1000,
   message: 'Too many requests',
});

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(limiter);
app.use(helmet());
app.use(express.json());

app.use('/static', express.static('./src/images'));
app.use('/teams', teamsRouter);

app.use((req, res) => res.status(404).json({ message: 'Not found' }));

app.use(handleErrors);

module.exports = app;