
export class Semester {
  constructor(classes) {
    this.classes = new Map()
    classes?.forEach(m => this.classes.set(m.identifier, m))
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
}

