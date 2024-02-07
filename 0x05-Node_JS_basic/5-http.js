const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = {};
        const lines = data.trim().split('\n');
        lines.shift().split(',');
        lines.forEach((line) => {
          const values = line.split(',');
          const firstname = values[0];
          const field = values[3].trim();

          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        });
        console.log(`Number of students: ${lines.length}`);
        Object.keys(students).forEach((field) => {
          console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        });

        resolve();
      }
    });
  });
}

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')

  if (req.url === '/') {
    res.write('Hello Holberton School!\n');
    res.end();
  } else if (req.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
        const outString = output.slice(0, -1);
        response.end(outString);
      }).catch(() => {
        response.statusCode = 404;
        response.end('Cannot load the database');
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
