const express = require('express');
const routerApi = require('./routes');
const { setUpStrategies } = require("./utils/auth")
const { logErrors, errorHandler, boomErrorHandler, ormHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
setUpStrategies()

app.get('/', (req, res) => {
    res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
    res.send('Hola, soy una nueva ruta');
});

routerApi(app);


app.use(logErrors);
app.use(boomErrorHandler);
app.use(ormHandler);
app.use(errorHandler);


app.listen(port, () => {
    console.log('Mi port' + port);
});
