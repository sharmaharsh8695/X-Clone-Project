const express = require('express');
const { ServerConfig } = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const apiRoutes = require('./routes');
app.use('/api',apiRoutes);

app.listen(ServerConfig.Port, async () => {
  console.log(`Server is active on port ${ServerConfig.Port}`);
})


//