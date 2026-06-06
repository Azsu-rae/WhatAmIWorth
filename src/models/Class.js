
import { Grade } from "./Grade.js"

export class Class {
  constructor({ name, coef, hasTP, hasTD } = {}) {

    this.name = name
    this.coef = coef

    this.hasTP = hasTP
    this.hasTD = hasTD

    this.grade = new Grade({ hasTP, hasTD })
    this.identifier = name.toLowerCase().replaceAll(" ", "_")
  }

  toString() {
    return `${this.name}, coef: ${this.coef}:\nGrades: ${this.grade}`;
  }
}

