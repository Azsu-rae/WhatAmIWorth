
import courses_data from "./assets/courses.json" with { type: "json" }
import { Semester } from "./models/Semester.js"
import { Course } from "./models/Course.js"

import React, { useState } from 'react'

import './App.css'

function App() {

  let [semester, setSemester] = useState(() =>
    new Semester(courses_data.map(({ name, coef, hasTP, hasTD }) => new Course(name, coef, hasTP, hasTD)))
  )

  let [average, setAverage] = useState(0.0)

  const onChange = (e) => {
    let value = e.target.value === "" ? null : parseFloat(e.target.value)
    let [gradeType, ...identifier] = e.target.id.split("-")
    setSemester(semester.withCourseGrade(identifier.join("-"), gradeType, value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      setAverage(semester.average())
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {
          Array.from(semester.courses.values()).map(c => (
            <React.Fragment key={c.identifier}>
              <p><b>{c.name}</b></p>

              <label htmlFor={`exam-${c.identifier}`}>Exam:</label>
              <input
                type="number"
                step="any"
                id={`exam-${c.identifier}`}
                value={c.grade.exam ?? ""}
                onChange={onChange}
              />

              {(c.hasTP && <>
                <label htmlFor={`tp-${c.identifier}`}>TP:</label>
                <input
                  type="number"
                  step="any"
                  id={`tp-${c.identifier}`}
                  value={c.grade.tp ?? ""}
                  onChange={onChange}
                />
              </>)}

              {(c.hasTD && <>
                <label htmlFor={`td-${c.identifier}`}>TD:</label>
                <input
                  type="number"
                  step="any"
                  id={`td-${c.identifier}`}
                  value={c.grade.td ?? ""}
                  onChange={onChange}
                />
              </>)}
            </React.Fragment>
          ))
        }

        <output name="average">{average}</output>
        <button type="submit">Compute</button>
      </form>
    </>
  )
}

export default App
