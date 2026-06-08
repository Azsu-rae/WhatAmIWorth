
import { COURSE_TYPE } from "./Course.js"

function throwIfNull(value) {
  if (value == null) {
    throw new Error("Attempting to compute the grade without passing all of the fields")
  } return value
}

export class Grade {

  static #token = "somesecret"

  constructor(token, { exam, tp, td, courseType } = {}) {

    if (token !== Grade.#token) {
      throw new Error("This constructor is private!")
    }

    this.courseType = courseType

    this.exam = exam
    this.tp = tp
    this.td = td
  }

  static create(courseType) {
    return Object.freeze(new Grade(Grade.#token, { courseType: courseType }))
  }

  with(key, value) {
    let copy = new Grade(Grade.#token, this)
    copy[key] = value
    return Object.freeze(copy)
  }

  toString() {
    return JSON.stringify({ courseType: this.courseType, exam: this.exam, tp: this.tp, td: this.td })
  }

  compute() {
    switch (this.courseType) {
      case COURSE_TYPE.EXAM_ONLY:
        return throwIfNull(this.exam)
      case COURSE_TYPE.TD:
        return throwIfNull(this.exam) * 0.6 + throwIfNull(this.td) * 0.4
      case COURSE_TYPE.TP:
        return throwIfNull(this.exam) * 0.6 + throwIfNull(this.tp) * 0.4
      case COURSE_TYPE.TD_TP:
        return throwIfNull(this.exam) * 0.6 + ((throwIfNull(this.tp) + throwIfNull(this.td)) / 2) * 0.4
    }
  }
}
