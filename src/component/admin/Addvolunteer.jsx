import React from 'react'
import { AdminSidebar } from './Adminsidebar'

export const Addvolunteer = () => {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
    
    <div style={{ width: "250px" }}>  
            <AdminSidebar />
          </div>
    
    <div className="flex-grow-1 p-4" style={{ overflowX: "auto" }}>
    <h1 style={{ textAlign:"center"}}>Volunteer Dashboard</h1>
    
     </div>
     </div>
  )
}
