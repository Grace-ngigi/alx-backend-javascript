export default function createIteratorObject(report) {
  const reportObject = [];
  for (const idx of Object.values(report.allEmployees)) {
    reportObject.push(...idx);
  }
  return reportObject;
}
