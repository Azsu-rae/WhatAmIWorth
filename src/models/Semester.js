
export class Semester {

  static #token = "somesecret"

  constructor(token, courses) {

    if (token !== Semester.#token) {
      throw new Error("This constructor is private!")
    }

    this.courses = new Map()
    courses.forEach(c => this.courses.set(c.identifier, c))
  }

  toString() {
    return Array.from(this.courses.values()).map(c => c.toString()).join("\n\n")
  }

  static create(courses) {
    return Object.freeze(new Semester(Semester.#token, courses))
  }

  withCourseGrade(courseIdentifier, gradeType, value) {

    let course = this.courses.get(courseIdentifier)
    if (course == null) {
      throw new Error(`identifier=${courseIdentifier} is not present amongst the courses`)
    }
    this.courses.set(course.identifier, course.with("grade", course.grade.with(gradeType, value)))

    return new Semester(Semester.#token, this.courses)
  }

  average() {

    let sum = 0, totalWeights = 0
    this.courses.forEach(c => {
      sum += c.weightedGrade()
      totalWeights += c.coef
    })

    return sum / totalWeights
  }
}
