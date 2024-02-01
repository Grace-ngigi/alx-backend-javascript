const fs = require('fs');

function countStudents(pat) {
  const data = fs.readFileSync(pat, 'utf8');
  const lines = data.trim().split('\n');
  const fieldStats = {};

  lines.forEach((line, index) => {
    if (index === 0) {
      // Skip the header line
      return;
    }

    const [firstname, , , field] = line.split(',');

    if (!fieldStats[field]) {
      fieldStats[field] = {
        count: 1,
        names: [firstname],
      };
    } else {
      fieldStats[field].count += 1;
      fieldStats[field].names.push(firstname);
    }
  });

  // Log the overall number of students
  const totalStudents = lines.length - 1; // Subtract 1 for the header
  console.log(`Number of students: ${totalStudents}`);

  // Log the number of students in each field
  for (const field in fieldStats) {
    if (Object.prototype.hasOwnProperty.call(fieldStats, field)) {
      const { count } = fieldStats[field];
      const names = fieldStats[field].names.join(', ');

      console.log(`Number of students in ${field}: ${count}. List: ${names}`);
    }
  }
}

module.exports = countStudents;
