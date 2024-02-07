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

module.exports = countStudents;
