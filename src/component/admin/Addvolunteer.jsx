import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


export const Addvolunteer = () => {
  // const [volunteer, setVolunteer] = useState([{
  //   name: "",
  //   email: "",
  //   phone ,
  //   address: "",
  //   city: "",
  //   area: ""
  // }])
  const [volunteer, setVolunteer] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/volunteer/volunteer")
      .then((response) => setVolunteer(response.data))
      .catch((err) => console.log("Error fetching users:", err));
  }, []);
  
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center ">
      
      
    <div className='border border-dark p-6 border-2'>
      <h1 style={{ textAlign: "center"}}>Volunteer Dashboard</h1>
      <Link to="/Createvolunteer"className="btn btn-primary justify-content-center">Create</Link>
      
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
                <td>{volunteer.name}</td>
                <td>{volunteer.email}</td>
                <td>{volunteer.phone}</td>
                <td>{volunteer.address}</td>
                <td>{volunteer.city}</td>
                <td>{volunteer.area}</td>
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