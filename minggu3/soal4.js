function graduates(students) {
  let setClass = new Set();
  let listClass = [];
  let result = [];
  let listGraduateStudent = [];
  if (students.length == 0) {
    return {};
  }
  for (let i = 0; i < students.length; i++) {
    setClass.add(students[i].class);
    if (students[i].score > 75) {
      listGraduateStudent.push(students[i]);
    }
  }
  listClass = [...setClass];
  let obj = {};
  for (let i = 0; i < listClass.length; i++) {
   
    let spesificStudents = [];
    for (let j = 0; j < listGraduateStudent.length; j++) {
      if (listGraduateStudent[j].class == listClass[i]) {
        spesificStudents.push({
          name: listGraduateStudent[j].name,
          score: listGraduateStudent[j].score,
        });
      }
    }
    obj[listClass[i]] = spesificStudents;
    
  }
  return obj;
}
console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
