
import { Grade } from "./Grade.js"

export const COURSE_TYPE = Object.freeze({
  TD_TP: "both",
  TD: "td",
  TP: "tp",
  EXAM_ONLY: "exam"
})

function type(hasTD, hasTP) {
  if (hasTD && hasTP) {
    return COURSE_TYPE.TD_TP
  } else if (hasTD) {
    return COURSE_TYPE.TD
  } else if (hasTP) {
    return COURSE_TYPE.TP
  } else {
    return COURSE_TYPE.EXAM_ONLY
  }
}

export class Course {
  constructor(name, coef, hasTP, hasTD) {

    this.name = name
    this.coef = coef

    this.hasTP = hasTP
    this.hasTD = hasTD

    this.grade = new Grade(type(hasTD, hasTP))
    this.identifier = name.toLowerCase().replaceAll(" ", "_")
  }

  toString() {
    return `${this.name}, coef: ${this.coef}\nGrades: ${this.grade}`;
  }

  weightedGrade() {
    return this.coef * this.grade.compute()
  }
}
