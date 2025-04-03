import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { AdminSidebar } from '../admin/Adminsidebar';

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
  const handleDelete = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3001/volunteer/Deletevolunteer/${id}`);
        console.log(response.data);

        // Update state correctly
        setVolunteer((prevVolunteers) => prevVolunteers.filter((volunteer) => volunteer._id !== id));
    } catch (error) {
        console.error("Error deleting volunteer:", error);
    } 
}; 
  
  
  return (
    <div className="d-flex  justify-content-center align-items-center ">
       
    <div className=''>
    <Link to="/Dashboard"className="btn btn-primary justify-content-center">Home</Link>
      <h1 style={{ textAlign: "center"}}>Volunteer Dashboard</h1>
      <Link to="/Createvolunteer"className="btn btn-primary justify-content-center ">Create</Link>
      
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
                  <Link to={`/Updatevolunteer/${volunteer._id}`} className="btn btn-primary">Update</Link>
                  <button className="btn btn-danger" onClick={(e) => handleDelete(volunteer._id)}>Delete</button>
                  
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