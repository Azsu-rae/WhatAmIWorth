
import { Semester } from "../src/models/Semester.js";
import { Class } from "../src/models/Class.js";

import classes_data from "../src/assets/classes.json" with {type: "json"}
import test_data from "./assets/my_s8.json" with {type: "json"}

let semester = new Semester(classes_data.map(({ name, coef, hasTP, hasTD }) => new Class(name, coef, hasTP, hasTD)))
Object.keys(test_data).forEach(identifier => {
  Object.keys(test_data[identifier]).forEach(gradeType => {
    semester.mutateClass(identifier, gradeType, test_data[identifier][gradeType])
  })
})

console.log(`${semester}`)
console.log(`\n${semester.average()}`)
