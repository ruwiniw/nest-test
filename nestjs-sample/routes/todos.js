const express = require('express');
const { PermissionMiddlewareCreator } = require('forest-express-mongoose');
const { todos } = require('../models');

const router = express.Router();
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('todos');

// This file contains the logic of every route in Forest Admin for the collection todos:
// - Native routes are already generated but can be extended/overriden - Learn how to extend a route here: https://docs.forestadmin.com/documentation/reference-guide/routes/extend-a-route
// - Smart action routes will need to be added as you create new Smart Actions - Learn how to create a Smart Action here: https://docs.forestadmin.com/documentation/reference-guide/actions/create-and-manage-smart-actions

// Create a Todo
router.post('/todos', permissionMiddlewareCreator.create(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#create-a-record
  next();
});

// Update a Todo
router.put('/todos/:recordId', permissionMiddlewareCreator.update(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#update-a-record
  next();
});

// Delete a Todo
router.delete('/todos/:recordId', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#delete-a-record
  next();
});

// Get a list of Todos
router.get('/todos', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#get-a-list-of-records
  next();
});

// Get a number of Todos
router.get('/todos/count', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#get-a-number-of-records
  // Improve performances disabling pagination: https://docs.forestadmin.com/documentation/reference-guide/performance#disable-pagination-count
  next();
});

// Get a Todo
router.get('/todos/\\b(?!count\\b):recordId', permissionMiddlewareCreator.details(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#get-a-record
  next();
});

// Export a list of Todos
router.get('/todos.csv', permissionMiddlewareCreator.export(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#export-a-list-of-records
  next();
});

// Delete a list of Todos
router.delete('/todos', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#delete-a-list-of-records
  next();
});

module.exports = router;
