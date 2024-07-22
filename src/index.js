require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./users/users.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const app = express();

app.use(bodyParser.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post('/users', userController.createUser, swaggerUi.serve);
app.get('/users/:id', userController.getUserById, swaggerUi.serve);
app.patch('/users/:id', userController.updateUser, swaggerUi.serve);
app.delete('/users/:id', userController.deleteUser, swaggerUi.serve);
app.patch('/users/deposit/:id', userController.deposit, swaggerUi.serve);
app.patch('/users/deduct/:id', userController.deduct, swaggerUi.serve);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
