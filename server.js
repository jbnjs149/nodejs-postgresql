const express = require('express');
const randomId = require('random-id');
const app = express(),
  bodyParser = require("body-parser"),
  fs = require('fs');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd() + "/swagger.css"), 'utf8');

var dbOperations = require("./dbOperations.js");
const config = require('./config.js');

const port = config.apiPort || 3080;

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { customCss }));

app.get('/api/todos', (req, res) => {
  console.log('api/todos called!!!!!');
  dbOperations.getTaskList(req, res);
});

app.post('/api/todo/addNew', (req, res) => {
  console.log('api/todo/addNew called!!!!!');
  dbOperations.addNewTask(req, res);
});


app.post('/api/todo/update/task', (req, res) => {
  console.log('api/todo/deleteTask called!!!!!');
  dbOperations.updateTaskTitle(req, res);
});

app.post('/api/todo/update/status', (req, res) => {
  console.log('api/todo/deleteTask called!!!!!');
  dbOperations.updateTaskStatus(req, res);
});

app.delete('/api/todo/:task_id', (req, res) => {
  console.log('api/todo/deleteTask called!!!!!');
  dbOperations.deleteTask(req, res);
});


app.get('/', (req, res) => {
  res.send(`<h1>API Running on port ${port}</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on the port::::::${port}`);
});