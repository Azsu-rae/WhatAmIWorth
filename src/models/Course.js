
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

  static #token = "somesecret"

  constructor(token, { name, coef, hasTP, hasTD, grade, identifier }) {

    if (token !== Course.#token) {
      throw new Error("This constructor is private!")
    }

    this.name = name
    this.coef = coef

    this.hasTP = hasTP
    this.hasTD = hasTD

    this.grade = grade ?? Grade.create(type(hasTD, hasTP))
    this.identifier = identifier ?? name.toLowerCase().replaceAll(" ", "_")
  }

  static create(name, coef, hasTP, hasTD) {
    return Object.freeze(new Course(Course.#token, { name, coef, hasTP, hasTD }))
  }

  with(key, value) {
    let copy = new Course(Course.#token, this)
    copy[key] = value
    return Object.freeze(copy)
  }

  toString() {
    return `${this.name}, coef: ${this.coef}\nGrades: ${this.grade}`;
  }

  weightedGrade() {
    return this.coef * this.grade.compute()
  }
}
