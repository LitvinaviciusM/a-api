const express = require('express')
const bodyParser = require('body-parser')
const serviceUsers = require('./services/users')
const serviceAuth = require('./services/auth');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// AUTH
app.get('/auth/fb', serviceAuth.fb);

// USERS
app.get('/users', serviceUsers.getUsers);
app.get('/users/:id', serviceUsers.getUserById);
app.post('/users', serviceUsers.createUser);
app.put('/users/:id', serviceUsers.updateUser);
app.delete('/users/:id', serviceUsers.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
