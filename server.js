const express = require('express');
const routes = require('./routes');
// import sequelize connection
const { sequelize } = require('./models')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

sequelize.sync({ alter: true })
.then(() => {
  console.log('\n----- DATABASE SYNCED -----\n');
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
})

.catch(err => {
  console.error('Error connecting to the database:', err);
  process.exit(1);
});

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Not Found',
  });
});
