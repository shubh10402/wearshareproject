import React from 'react'

export const Updatevolunteer = () => {
  return (
    <div className="d-flex vh-100 bg-body-secondary justify-content-center align-items-center">
         <div className='w-50 bg-white rounded p5 card card-outline card-primary card-header'>
                
                    <h1 style={{ textAlign: "center"}}>Update Volunteer</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" placeholder="Enter city" />
                </div>
                <div className="mb-3">
                    <label htmlFor="area" className="form-label">Area</label>
                    <input type="text" className="form-control" id="area" placeholder="Enter area" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
        </div>   
        
  )
}
export default Updatevolunteer
