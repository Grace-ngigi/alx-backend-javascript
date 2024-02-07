const http = require('http');

const { countStudents } = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    countStudents('database.csv')
      .then(() => {
        console.log('Students count logged successfully.');
        res.end('Students count logged successfully.\n');
      })
      .catch((error) => {
        console.error(error.message);
        res.end('Error: Cannot load the database.\n');
      });
  } else {
    res.end('404 Not Found\n');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
module.exports = app;
