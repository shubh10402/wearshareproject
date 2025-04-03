import React , {useState , useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'


export const Updatevolunteer = () => {
    const{id} = useParams()
    const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [address, setAddress] = useState('');
        const [city, setCity] = useState('');
        const [area, setArea] = useState('');
        const [volunteer, setVolunteer] = useState([]);
        const navigate = useNavigate();

        const UpdateVolunteer = (e) => {
            e.preventDefault();
            const data = {
                name,
                email,
                phone,
                address,
                city,
                area
            };
            axios.put(`http://localhost:3001/volunteer/volunteer/update/${id}`, data)
              .then((response) => {
                console.log(response.data);
                navigate("/Addvolunteer");
              })
              .catch((err) => console.log("Error in updating Volunteer:", err));
          }
        

        useEffect(() => {
            axios
              .get(`http://localhost:3001/volunteer/volunteer/${id}`)
              .then((response) => {console.log(response.data)
                setVolunteer(response.data.volunteer)
                setName(response.data.name)
                setEmail(response.data.email)
                setPhone(response.data.phone)
                setAddress(response.data.address)
                setCity(response.data.city)
                setArea(response.data.area)
              } )

              .catch((err) => console.log("Error fetching Volunteer:", err));
          }, []);
  return (
    <div className="d-flex vh-100 bg-body-secondary justify-content-center align-items-center">
         <div className='w-50 bg-white rounded p5 card card-outline card-primary card-header'>
            <h1 style={{ textAlign: "center"}}>Update Volunteer</h1>
            <form onSubmit={UpdateVolunteer}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter phone number"
                    value={phone} 
                    onChange={(e)=>setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" 
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" placeholder="Enter city"
                    value={city}
                    onChange={(e)=>setCity(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="area" className="form-label">Area</label>
                    <input type="text" className="form-control" id="area" placeholder="Enter area"
                    value={area} 
                    onChange={(e)=>setArea(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
        </div>   
        
  )
}
export default Updatevolunteer
