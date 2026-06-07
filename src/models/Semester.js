
export class Semester {
  constructor(courses) {
    this.courses = new Map()
    courses?.forEach(m => this.courses.set(m.identifier, m))
  }

  toString() {
    return Array.from(this.courses.values()).map(c => c.toString()).join("\n\n")
  }

  average() {

    let sum = 0, totalWeights = 0
    this.courses.forEach(c => {
      sum += c.weightedGrade()
      totalWeights += c.coef
    })

    return sum / totalWeights
  }

  mutateCourseGrade(courseIdentifier, gradeType, value) {

    let course = this.courses.get(courseIdentifier)
    if (course == null) {
      throw new Error(`identifier=${courseIdentifier} is not present amongst the courses`)
    } course.grade.set(gradeType, value)

    let copy = new Semester()
    copy.courses = this.courses
    return copy
  }
}
