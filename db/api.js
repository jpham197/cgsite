const express = require(`express`);
const sql = require(`sqlite3`).verbose();
const app = express();

const server = app.listen(3000, () => {
    console.log(`server listening..`);
});

let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

  db.close();