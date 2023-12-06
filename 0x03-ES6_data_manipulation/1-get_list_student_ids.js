export default function getListStudentIds(studentArray){
    if (!Array.isArray(studentArray)){
        return [];
    }
    return studentArray.map(student => student.id);
}