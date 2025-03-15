import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true; // Set once, outside the component

export const Dashboard = () => {
  const [Success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/Dashboard')
      .then(result => {
        if (result.data.Status === "Success") {
          setSuccess("Success Login");
        } else {
          navigate('/');
        }
      })
      .catch(err => console.log("Error fetching dashboard data:", err));
  }, [navigate]);

  return (
    <>
      <div>Dashboard</div>
      <h1>{Success}</h1>
    </>
  );
};

export default Dashboard;
