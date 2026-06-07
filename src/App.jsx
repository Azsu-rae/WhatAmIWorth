
import classes_data from "./assets/classes.json" with { type: "json" }
import { Semester } from "./models/Semester.js"
import { Class } from "./models/Class.js"

import React, { useState } from 'react'

function App() {

  let [semester, setSemester] = useState(() =>
    new Semester(classes_data.map(({ name, coef, hasTP, hasTD }) => new Class(name, coef, hasTP, hasTD)))
  )

  let [average, setAverage] = useState(0.0)

  const onChange = (e) => {
    let [gradeType, ...identifier] = e.target.id.split("-")
    identifier = identifier.join("-")
    setSemester(semester.mutateClass(identifier, gradeType, e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAverage(semester.average())
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {
          Array.from(semester.classes.values()).map(c => (
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
