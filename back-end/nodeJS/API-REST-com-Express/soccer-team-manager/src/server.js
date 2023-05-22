const app = require('./app');

app.use(express.json());

app.listen(3001, () => console.log('server running on port 3001'));
