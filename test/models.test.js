
import { Semester } from "../src/models/Semester.js";
import { Course } from "../src/models/Course.js";

import courses_data from "../src/assets/courses.json" with {type: "json"}
import test_data from "./assets/my_s8.json" with {type: "json"}

let semester = new Semester(courses_data.map(({ name, coef, hasTP, hasTD }) => new Course(name, coef, hasTP, hasTD)))
Object.keys(test_data).forEach(courseIdentifier => {
  Object.keys(test_data[courseIdentifier]).forEach(gradeType => {
    semester.mutateCourseGrade(courseIdentifier, gradeType, test_data[courseIdentifier][gradeType])
  })
})

console.log(`${semester}`)
console.log(`\n${semester.average()}`)
