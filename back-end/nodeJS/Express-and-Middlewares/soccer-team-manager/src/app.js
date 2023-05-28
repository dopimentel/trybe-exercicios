const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const teamsRouter = require('./routes/teamsRouter');
require('express-async-errors'); 

const limiter = rateLimit({
   max: 100,
   windowMs: 20 * 60 * 1000,
   message: 'Muitas requisições originadas desta IP',
});

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use('/static', express.static('./src/images'));
app.use(cors());
app.use(limiter);
app.use('/teams', teamsRouter);

app.use((req, res) => res.status(404).json({ message: 'Não encontrado' }));

module.exports = app;