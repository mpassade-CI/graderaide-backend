/******************
 * YOUR CODE HERE *
 ******************/
const Grade = function(assignment,score){
  return {
    assignment,
    score
  }
}
const Term = function(hours){
  return {
    hours,
    grades: [],
    addGrade(assignment,score){
      const grade = Grade(assignment,score)
      this.grades.push(grade)
    }
  }
}
const Course = function(name){
  return {
    name,
    terms: [],
    addTerm(hours){
      const term = Term(hours)
      this.terms.push(term)
    }
  }
}
const Student = function(name,course,term=1){
  return {
    name,
    course,
    term,
    courses: [],
    addCourse(name){
      const course = Course(name)
      this.courses.push(course)
    },
    getAverage(course,term){
      const student = this
      let sum = 0
      for (let i=0; i<student.courses.length; i++){
        if (course===undefined && term===undefined){
          if (student.courses[i].name===this.course){
            for (let j=0; j<student.courses[i].terms[this.term-1].grades.length; j++){
              sum += student.courses[i].terms[this.term-1].grades[j].score
            }
            return sum / student.courses[i].terms[this.term-1].grades.length
          }
        }
        if (student.courses[i].name===course){
          if (term===undefined){
            for (let j=0; j<student.courses[i].terms[this.term-1].grades.length; j++){
              sum += student.courses[i].terms[this.term-1].grades[j].score
            }
            return sum / student.courses[i].terms[this.term-1].grades.length
          }
          for (let j=0; j<student.courses[i].terms.length; j++){
            if (j===term){
              for (let k=0; k<student.courses[i].terms[j].grades.length; k++){
                sum += student.courses[i].terms[j].grades[k].score
              }
              return sum / student.courses[i].terms[j].grades.length
            }
          }
        }
      }
    }
  }
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Grade === 'undefined') {
  Grade = undefined;
}

if (typeof Term === 'undefined') {
  Term = undefined;
}

if (typeof Course === 'undefined') {
  Course = undefined;
}

if (typeof Student === 'undefined') {
  Student = undefined;
}


module.exports = {
  Grade,
  Term,
  Course,
  Student,
}
