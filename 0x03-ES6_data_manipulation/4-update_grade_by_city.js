export default function updateStudentGradeByCity(studenList, city, newGradesList) {
  if (!Array.isArray(studenList) || !Array.isArray(newGradesList)) { return []; }

  return studenList
    .filter((student) => student.location === city)
    .map((student) => {
      const existingGrade = newGradesList.find((grade) => grade.studentId === student.id);

      // If a matching grade is found, update the student's grade; otherwise, set it to 'N/A'
      return {
        ...student,
        grade: existingGrade ? existingGrade.grade : 'N/A',
      };
    });
}
