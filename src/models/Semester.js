
export class Semester {
  constructor(classes) {
    this.classes = new Map()
    classes?.forEach(m => this.classes.set(m.identifier, m))
  }

  average() {

    let sum = 0, totalWeights = 0
    this.classes.forEach(c => {
      sum += c.weightedGrade()
      totalWeights += c.coef
    })

    return sum / totalWeights
  }

  mutateClass(identifier, gradeType, value) {

    value = (value === "") ? null : parseFloat(value)

    let mod = this.classes.get(identifier)
    if (mod == null) {
      console.log(identifier)
      throw Error("somth's wrong")
    }

    mod.grade.set(gradeType, value)

    let copy = new Semester()
    copy.classes = this.classes
    return copy
  }

  toString() {
    return Array.from(this.classes.values()).map(c => c.toString()).join("\n\n")
  }
}

