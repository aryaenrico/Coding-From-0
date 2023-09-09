function highestScore(students) {
  let grading = new Map();
  let listSchool = [];
  let result=[];
  if(students.length == 0){
    return {};
  }
  for (let i = 0; i < students.length; i++) {
    if (grading.get(students[i].class) == undefined) {
      grading.set(students[i].class, students[i]);
      listSchool.push(students[i].class);
    } else {
      if (grading.get(students[i].class).score < students[i].score) {
        grading.set(students[i].class, students[i]);
      }
    }
  }
   for (let i=0;i<listSchool.length;i++){
    let obj={};
    obj[listSchool[i]]= {
        name:grading.get(listSchool[i]).name,
        class:grading.get(listSchool[i]).score
    }
    result.push(obj);
   }
  return result;
}
console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
