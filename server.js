const app = require('./app')
// starting server
const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
