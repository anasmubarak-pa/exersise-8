type Student = {
  name:string,
  marks:number
}

const students:Array<Student> = [
  { name: "Alice", marks: 52 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
];

function gradeAnalyzer(students:Array<Student>)
{
    let results = []
    for(let student of students)
    {
        let status = student['marks']>50?"Pass":"Fail"
        results.push({'name':student['name'],'status':status})
    }
    return results
}

let results = gradeAnalyzer(students)
console.log(results)