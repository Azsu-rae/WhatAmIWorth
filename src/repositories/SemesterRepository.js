import { Semester } from "../models/Semester.js";
import { Course } from "../models/Course.js";

import courses_data from "../assets/courses.json" with {type: "json"};


export class SemesterRepository {
  static get(cycle, specialty, semesterNumber) {
    let courses = courses_data[cycle][specialty][semesterNumber - 1]
    courses = courses.map(({ name, coef, hasTP, hasTD }) => Course.create(name, coef, hasTP, hasTD));
    return Semester.create(courses);
  }
}
