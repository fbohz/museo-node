const dotenv = require('dotenv')
// read config.env file and save as env variables
dotenv.config({path: './config.env'})

const app = require('./app')

// console.log(process.env)

// starting server
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
