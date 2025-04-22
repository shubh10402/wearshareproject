import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../common/css/adminlte.css';
import "../common/css/adminlte.min.css";
import heroImage from '../../images/image1.jpg';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTshirt, FaUpload, FaInfoCircle, FaArrowsAltV, FaCheckCircle, FaCalendarAlt, FaClock } from 'react-icons/fa';

export const Userdonateform = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [photos, setPhotos] = React.useState([]);
  const [submitError, setSubmitError] = React.useState('');

  const handleUploadPhotos = (e) => {
    const newPhotos = Array.from(e.target.files);
    setPhotos(newPhotos);
  };
  
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      
      // Append all form fields
      Object.keys(data).forEach(key => {
        if (key !== 'images') { // Skip images as we'll handle them separately
          formData.append(key, data[key]);
        }
      });

      // Append each photo file
      photos.forEach((file, index) => {
        formData.append('images', file);
      });

      // Set the correct content type for multipart/form-data
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const response = await axios.post('http://localhost:3001/donate/adddonate', formData, config);
      
      if (response.status === 200) {
        navigate('/Thankyou');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        setSubmitError(error.response.data.message || 'Failed to submit form. Please try again.');
      } else {
        setSubmitError('Network error. Please check your connection and try again.');
      }
    }
  };

  return (
    <div 
      style={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '2rem 0',
      }}
    >
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)'
        }}>
          <h2 className="text-center mb-4">Donation Form</h2>
          {submitError && (
            <div className="alert alert-danger" role="alert">
              {submitError}
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className="form-group">
              <label>
                <span className="me-1"><FaUser /></span>
                Full Name
              </label>
              <input 
                {...register('name', { 
                  required: 'Name is required', 
                  minLength: { value: 3, message: 'Minimum length is 3 characters' } 
                })} 
                className="form-control" 
              />
              {errors.name && <span className="text-danger">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label>
                <span className="me-1"><FaEnvelope /></span>
                Email
              </label>
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
              <label>
                <span className="me-1"><FaPhone /></span>
                Phone Number
              </label>
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
              <label>
                <span className="me-1"><FaMapMarkerAlt /></span>
                Address
              </label>
              <textarea 
                {...register('address', { required: 'Address is required',message: 'Enter an address' })} 
                className="form-control">
              </textarea>
            </div>

            <div className="form-group">
              <label>
                <span className="me-1"><FaMapMarkerAlt /></span>
                City
              </label>
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
              <label>
                <span className="me-1"><FaMapMarkerAlt /></span>
                Pin-Code
              </label>
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
              <label>
                <span className="me-1"><FaTshirt /></span>
                Number of Clothes
              </label>
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
              <label>
                <span className="me-1"><FaTshirt /></span>
                Condition of the Clothes
              </label>
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
              <label>
                <span className="me-1"><FaTshirt /></span>
                Type of Clothes
              </label>
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
              <label>
                <span className="me-1"><FaTshirt /></span>
                Fabric
              </label>
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
              <label>
                <span className="me-1"><FaArrowsAltV /></span>
                Size
              </label>
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
              <label>
                <span className="me-1"><FaUpload /></span>
                Upload Photos (Required)
              </label>
              <input 
                type="file"
                accept='image/*' 
                onChange={handleUploadPhotos}
                multiple 
                className="form-control" 
                required
              />
              {photos.length > 0 && (
                <small className="text-muted">
                  {photos.length} photo(s) selected
                </small>
              )}
            </div>

            <div className="form-group">
              <label>
                <span className="me-1"><FaInfoCircle /></span>
                Additional Information
              </label>
              <textarea 
                {...register('additionalInfo')} 
                maxLength={150}
                className="form-control">
              </textarea>
            </div>

            <div className="form-group">
              <label>
                <span className="me-1"><FaCalendarAlt /></span>
                Preferred Pickup Date
              </label>
              <input 
                type="date" 
                {...register('pickupDate', { 
                  required: 'Pickup date is required',
                  validate: {
                    futureDate: (value) => {
                      const selectedDate = new Date(value);
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return selectedDate >= today || 'Please select a future date';
                    }
                  }
                })} 
                className="form-control" 
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.pickupDate && <span className="text-danger">{errors.pickupDate.message}</span>}
            </div>

            <div className="form-group">
              <label>
                <span className="me-1"><FaClock /></span>
                Preferred Pickup Time
              </label>
              <select 
                {...register('pickupTime', { required: 'Pickup time is required' })} 
                className="form-control"
              >
                <option value="">Select a time slot...</option>
                <option value="09:00-11:00">09:00 AM - 11:00 AM</option>
                <option value="11:00-13:00">11:00 AM - 01:00 PM</option>
                <option value="13:00-15:00">01:00 PM - 03:00 PM</option>
                <option value="15:00-17:00">03:00 PM - 05:00 PM</option>
                <option value="17:00-19:00">05:00 PM - 07:00 PM</option>
              </select>
              {errors.pickupTime && <span className="text-danger">{errors.pickupTime.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-block mt-3">
              <span className="me-1"><FaCheckCircle /></span>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Userdonateform;
