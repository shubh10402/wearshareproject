import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../common/css/adminlte.css';
import "../common/css/adminlte.min.css";

export const Userdonateform = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [photos, setPhotos] = React.useState([]);

  const handleUploadPhotos=(e)=>{
    const newphotos = e.target.files;
    setPhotos((prevPhotos) => [...prevPhotos, ...newphotos]);
  }
  
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('address', data.address);
      formData.append('city', data.city);
      formData.append('pincode', data.pincode);
      formData.append('numClothes', data.numClothes);
      formData.append('condition', data.condition);
      formData.append('type', data.type);
      formData.append('fabric', data.fabric);
      formData.append('size', data.size);
      photos.forEach((file) => {
        formData.append('images', file);
      });
      formData.append('additionalInfo', data.additionalInfo);

      await axios.post('http://localhost:3001/donate/adddonate', formData);
      navigate('/Thankyou');  // Redirect to Thank You page
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '600px' , border: '1px solid black', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
      <h2 > Donation Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label>Full Name</label>
          <input 
            {...register('name', { 
              required: 'Name is required', 
              minLength: { value: 3, message: 'Minimum length is 3 characters' } 
            })} 
            className="form-control" 
          />
          {errors.name && <span className="text-danger">{errors.name.message}</span>}
        </div>
        {/* <div className="form-group col-md-6 pl-2">
              <label>Surname</label>
              <input
                {...register('surname', {
                  required: 'Surname is required',
                  minLength: { value: 3, message: 'Minimum 3 characters' }
                })}
                className="form-control"
                placeholder="Surname"
              />
              {errors.surname && <span className="text-danger">{errors.surname.message}</span>}
            </div> */}
        

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            {...register('email', { 
              required: 'Email is required', 
              pattern: { value: /\S+@\S+\.\S+/, message: 'Enter a valid email' } 
            })} 
            className="form-control" 
          />
          {errors.email && <span className="text-danger">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input 
            type="tel" 
            {...register('phone', { 
              required: 'Phone is required', 
              pattern: { value: /^[0-9]{10}$/, message: 'Enter a valid 10-digit phone number' } 
            })} 
            className="form-control" 
          />
          {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea 
            {...register('address', { required: 'Address is required',message: 'Enter an address' })} 
            className="form-control">
          </textarea>
        </div>
        <div className="form-group">
          <label>City</label>
          <input 
            {...register('city', { 
              required: 'City is required', 
              minLength: { value: 3, message: 'Minimum length is 3 characters' } 
            })} 
            className="form-control" 
          />
          {errors.city && <span className="text-danger">{errors.city.message}</span>}
          
        </div>
        <div className="form-group">
          <label>Pin-Code</label>
          <input 
            {...register('pincode', { 
              required: 'Pincode is required', 
              minLength: { value: 6, message: 'Wrong Pincode Minimum length of picode is 6 characters' }, 
              maxLength: { value: 6, message: 'Wrong Pincode Max length of is 6 characters' }
            })} 
            className="form-control" 
          />
          {errors.pincode && <span className="text-danger">{errors.pincode.message}</span>}
        </div>

        <div className="form-group">
          <label>Number of Clothes</label>
          <input 
            type="number" 
            {...register('numClothes', { 
              required: 'This field is required', 
              min: { value: 1, message: 'Must be at least 1 ' }, 
              max: { value: 100, message: 'Must be at most 100' }
            })} 
            className="form-control" 
          />
          {errors.numClothes && <span className="text-danger">{errors.numClothes.message}</span>}
        </div>

        <div className="form-group">
          <label>Condition of the Clothes</label>
          <select {...register('condition', { required: 'Select a condition' })} className="form-control">
            <option value="">Select...</option>
            <option>Brand New</option>
            <option>Very Good Condition</option>
            <option>Good Condition</option>
            <option>Average Condition</option>
            <option>Bad Condition</option>
          </select>
          {errors.condition && <span className="text-danger">{errors.condition.message}</span>}
        </div>

        <div className="form-group">
          <label>Type of Clothes</label>
          <select {...register('type', { required: 'Select a type' })} className="form-control">
            <option value="">Select...</option>
            <option>Wedding Dress</option>
            <option>Bridesmaid Dress</option>
            <option>Formal Dress</option>
            <option>Other</option>
          </select>
          {errors.type && <span className="text-danger">{errors.type.message}</span>}
        </div>

        <div className="form-group">
          <label>Fabric</label>
          <select {...register('fabric', { required: 'Select fabric type' })} className="form-control">
            <option value="">Select...</option>
            <option>Cotton</option>
            <option>Silk</option>
            <option>Denim</option>
            <option>Leather</option>
          </select>
          {errors.fabric && <span className="text-danger">{errors.fabric.message}</span>}
        </div>

       

        <div className="form-group">
          <label>Size</label>
          <select {...register('size', { required: 'Select a size' })} className="form-control">
            <option value="">Select...</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>XL</option>
          </select>
          {errors.size && <span className="text-danger">{errors.size.message}</span>}
        </div>

        {/* {photos.length<1  */}
          <div className="form-group">
          <label>Upload Photos</label>
          <input 
            type="file"
            accept='image/*' 
            onChange={handleUploadPhotos}
            multiple 
            className="form-control" 
            required={true}
          />
          {errors.photos && <span className="text-danger">{errors.photos.message}</span>}
        </div>
        {/* )} */}

        
        <div className="form-group">
          <label>Additional Information</label>
          <textarea 
            {...register('additionalInfo')} 
            maxLength={150}
            className="form-control">
          </textarea>
        </div>

        <button type="submit" className="btn btn-primary mt-3" >Submit</button>
      </form>
    </div>
  );
};

export default Userdonateform;
