
import { COURSE_TYPE } from "./Class.js"

function throwIfNull(object) {
  if (object == null) { throw new Error("Attempting to compute the grade without passing all of the fields") }
  return object
}

export class Grade {
  constructor(type, { exam, td, tp } = {}) {

    this.exam = exam
    this.tp = tp
    this.td = td

    this.type = type
  }

  toString() {
    return JSON.stringify({ exam: this.exam, tp: this.tp, td: this.td })
  }

  compute() {
    try {
      switch (this.type) {
        case COURSE_TYPE.EXAM_ONLY:
          return throwIfNull(this.exam)
        case COURSE_TYPE.TD:
          return throwIfNull(this.exam) * 0.6 + throwIfNull(this.td) * 0.4
        case COURSE_TYPE.TP:
          return throwIfNull(this.exam) * 0.6 + throwIfNull(this.tp) * 0.4
        case COURSE_TYPE.TD_TP:
          return throwIfNull(this.exam) * 0.6 + ((throwIfNull(this.tp) + throwIfNull(this.td)) / 2) * 0.4
      }
    } catch {
      throw Error(JSON.stringify({ "type": this.type }))
    }
  }

  set(type, value) {
    if (type === "exam") {
      this.exam = value
    } else if (type === "td") {
      this.td = value
    } else if (type === "tp") {
      this.tp = value
    } else {
      throw new Error(`operation = ${type} WTF??`)
    }
  }
}
