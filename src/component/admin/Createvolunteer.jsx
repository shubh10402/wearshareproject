import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Createvolunteer ()  {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const navigate = useNavigate();

   const handleSubmit = async(e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/volunteer/Createvolunteer', 
        {
        name,
        email,
        phone,
        address,
        city,
        area 
    })
    .then(result => {
        console.log(result)
        navigate('/Addvolunteer')})
    .catch(err => console.log(err))

   };
  return (
        <div className="d-flex vh-100 bg-body-secondary justify-content-center align-items-center">
                <div className='w-50 bg-white rounded p5 card card-outline card-primary card-header'>
                    <h1 style={{ textAlign: "center"}}>Create Volunteer</h1>
                    
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" 
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" 
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" 
                    onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" 
                    onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" placeholder="Enter city" 
                    onChange={(e)=>setCity(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="area" className="form-label">Area</label>
                    <input type="text" className="form-control" id="area" placeholder="Enter area" 
                    onChange={(e)=>setArea(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary ">Submit</button>
                </form>
        </div>
        </div>
        
  )
};
export default Createvolunteer