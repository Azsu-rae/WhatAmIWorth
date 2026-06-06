
export class Grade {
  constructor({ hasTP, hasTD }, { exam, td, tp } = {}) {

    this.hasTP = hasTP
    this.hasTD = hasTD

    this.exam = exam
    this.tp = tp
    this.td = td
  }

  toString() {
    return JSON.stringify({ exam: this.exam, tp: this.tp, td: this.td })
  }

  compute() {

    if (!this.hasTD && !this.hasTP) {
      return this.exam;
    }

    let cc;
    if (this.hasTD !== this.hasTP) {
      cc = this.hasTD ? this.td : this.tp;
    } else if (this.td == null || this.tp == null) {
      cc = null
    } else {
      cc = (this.td + this.tp) / 2
    }

    if (cc == null || this.exam == null) {
      return null
    }

    return this.exam * 0.6 + cc * 0.4
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

