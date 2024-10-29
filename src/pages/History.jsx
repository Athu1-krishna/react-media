import React from 'react'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back Home</Link>
      </div>
      <table className="container my-5 table">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time Stamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>caption</td>
            <td><a href="https://youtu.be/ZYY-Aifrot8?si=UNepPJrsXyYfeDq_" target='_blank'>https://youtu.be/ZYY-Aifrot8?si=UNepPJrsXyYfeDq_</a></td>
            <td><button className="btn"><i className="fa-solid fa-trash text-danger"></i></button></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History