import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Show() {
  const [user, setUser] = useState([]);

  async function fetchData() {
    
      const result = await axios.get('http://localhost:5000/user');
      setUser(result.data);
    
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <center><span style={{"color": "blue"}}> <h2> Healthify </h2> <h4> Redefining Health Domain!!</h4></span></center>
      
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Consultancy Fees</th>
            <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th>Current Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.docturename}</td>
              <td>{obj.consultancyfees}</td>
              <td>{obj.appointmentdate}</td>
              <td>{obj.appointmenttime}</td>
              <td>{obj.currentstatus}</td>
              <td>
                <NavLink to={`/update/${obj.id}`}>
                  <button className="btn btn-outline-warning btn-sm me-3">Update</button>
                </NavLink>
                <NavLink to={`/delete/${obj.id}`}>
                  <button className='btn btn-outline-danger btn-sm'>Delete</button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <center><NavLink to={`/add`}><input type="button" value="Add" className='btn-btn-primary'></input></NavLink></center>
    </>
  );
}

export default Show;
