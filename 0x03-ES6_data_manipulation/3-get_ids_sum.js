export default function getStudentIdsSum(studenList) {
  if (!Array.isArray(studenList)) { return 0; }
  return studenList.reduce((acc, student) => acc + student.id, 0);
}
