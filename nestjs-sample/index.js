require('dotenv').config();

// const { createAgent } = require('@forestadmin/agent');
// const { createMongooseDataSource } = require('@forestadmin/datasource-mongoose');
// // Retrieve your mongoose connection
// const connection = require('./mongoose-models');

// // Create your Forest Admin agent
// // This must be called BEFORE all other middleware on the app
// createAgent({
//   authSecret: process.env.FOREST_AUTH_SECRET,
//   envSecret: process.env.FOREST_ENV_SECRET,
//   isProduction: process.env.NODE_ENV === 'production',

// })
//   // Create your Mongoose datasource
//   .addDataSource(createMongooseDataSource(connection))
//   // Replace "myNestJsApp" by your NestJs application
//   .mountOnNestJs(Todo)
//   .start();

const { createAgent } = require('@forestadmin/agent');
const { createMongooseDataSource } = require('@forestadmin/datasource-mongoose');

const agent = createAgent(Option);
const aDataSource = createMongooseDataSource('mongodb://localhost:27017');
const anoterDataSource = createMongooseDataSource('mongodb://localhost:27017');

// Specify which collection you want to play with
agent
  .addDataSource(aDataSource, { include: ['customers', 'orders'] })
  .addDataSource(anoterDataSource, { exclude: ['todos'] });

