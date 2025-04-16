import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../common/css/adminlte.css';
import { Link } from 'react-router-dom';
import "../common/css/adminlte.min.css";

export const Userdonateform = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
 

  const onSubmit = async (data) => {
    try {
      console.log('Form Data:', data);
      await axios.post('http://localhost:3001/api/submit', data);  // Replace with your API endpoint
      navigate('/Thankyou');  // Redirect after submission
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="d-flex  justify-content-center align-items-center ">
       
    <div className=''>
    {/* <Link to="/Dashboard"className="btn btn-primary ">Home</Link> */}
  

         <div className="container mt-4" style={{ maxWidth: '600px' , border: '1px solid black', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
      {/* <Link to="/Dashboard"className="btn btn-primary justify-content-center">Home</Link> */}
      <h2 > NGO Request Donation Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

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
          <label>Required Number of Clothes</label>
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
          <label>Required Condition of the Clothes</label>
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
          <label>Required Type of Clothes</label>
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
          <label> Required Fabric</label>
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
          <label>Required Size</label>
          <select {...register('size', { required: 'Select a size' })} className="form-control">
            <option value="">Select...</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>XL</option>
          </select>
          {errors.size && <span className="text-danger">{errors.size.message}</span>}
        </div>
        
        <div className="form-group">
          <label>Additional Information</label>
          <textarea 
            {...register('additionalInfo')} 
            className="form-control">
          </textarea>
        </div>

        <button type="submit" className="btn btn-primary mt-3" >Submit</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Userdonateform;
