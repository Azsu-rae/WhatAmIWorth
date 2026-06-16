
import { SemesterRepository } from "../src/repositories/SemesterRepository.js"

import test_data from "./assets/my_s8.json" with {type: "json"}

let semester = SemesterRepository.get("masters", "I2A", 2)

Object.keys(test_data).forEach(courseIdentifier => {
  Object.keys(test_data[courseIdentifier]).forEach(gradeType => {
    semester.withCourseGrade(courseIdentifier, gradeType, test_data[courseIdentifier][gradeType])
  })
})

console.log(`${semester}`)
console.log(`\n${semester.average()}`)
