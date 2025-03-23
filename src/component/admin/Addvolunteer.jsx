import React, {useState} from 'react';
import { Link } from 'react-router-dom';


export const Addvolunteer = () => {
  const [volunteer, setVolunteer] = useState([{
    Name: "ram",
    Email: "ram123",
    Phone: 123456789,
    Address: "123 alwar rajasthan ",
    City: "alwar",
    Area: "rajasthan"
  }])
  return (
    <div className="d-flex vh-100 bg-body-secondary justify-content-center align-items-center">
      
    <div className='w-50 bg-white rounded p6'>
      <h1 style={{ textAlign: "center"}}>Volunteer Dashboard</h1>
      <Link to="/Createvolunteer"className="btn btn-primary">Create</Link> 
      
      <br></br>
      
      <table className="table table-bordered border-dark">
        <thead style={{ textAlign: "center"}}>
          
          <tr>
            <th scope="col">Volunteer Name</th>
            <th scope="col">Volunteer Email</th>
            <th scope="col">Volunteer Phone</th>
            <th scope="col">Volunteer Address</th>
            <th scope="col">Volunteer City</th>
            <th scope="col">Volunteer Area</th>
            <th scope="col">Action </th>
            
            
          </tr>
        </thead>
        <tbody style={{ textAlign: "center"}}>
          {
            volunteer.map((volunteer) => {
              return <tr>
                <td>{volunteer.Name}</td>
                <td>{volunteer.Email}</td>
                <td>{volunteer.Phone}</td>
                <td>{volunteer.Address}</td>
                <td>{volunteer.City}</td>
                <td>{volunteer.Area}</td>
                <td>
                  <Link to={'/Updatevolunteer'} className="btn btn-primary">Update</Link>
                  <Link to={'/Deletevolunteer'}className="btn btn-danger">Delete</Link>
                </td>
              </tr>
            })
          } 
        </tbody>
        </table>
</div>
</div>
  )
}
export default Addvolunteer