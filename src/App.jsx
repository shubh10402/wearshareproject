import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserNavbar } from './component/layout/UserNavbar'
// import './index.css'
import './component/common/css/adminlte.css'
import './component/common/css/adminlte.min.css'
import { UserSidebar } from './component/layout/UserSidebar'
import { SignUp } from './component/common/SignUp'
import { Routes, Route } from 'react-router-dom'
import { Loginpageuser } from './component/common/Loginpageuser'
import { Forgatpassword } from './component/common/Forgatpassword'
import { Dashboard } from './component/admin/Dashboard'
import{ Userdonateform} from './component/common/Userdonateform'
import { Addvolunteer } from './component/admin/Addvolunteer'
import {Createvolunteer} from './component/admin/Createvolunteer'
import Updatevolunteer from './component/admin/Updatevolunteer'
import Deletevolunteer from './component/admin/Deletevolunteer'




function App() {    //App function
  
  return (      //Return for App function
    <body> 
     

      <div>      
       {/* <UserSidebar>  </UserSidebar> */}
       <UserNavbar></UserNavbar>     
       
       </div>
       <div> 
            {/*Routing */}
        
                  {/* Routing  for signup&login */}
       <Routes>
          <Route path="/signup" element={<SignUp/>}></Route>  
       </Routes>
       <Routes>
          <Route path="/Loginpageuser" element={<Loginpageuser/>}></Route>
       </Routes>
       <Routes>
          <Route path='/Forgatpassword' element={<Forgatpassword/>}></Route>
       </Routes>
       <Routes>
            <Route path='/Dashboard' element={<Dashboard/>}></Route>
       </Routes>
      <Routes>
            <Route path='/Userdonateform' element={<Userdonateform/>}></Route>
      </Routes>
      <Routes>
            <Route path='/Addvolunteer' element={<Addvolunteer/>}></Route>
      </Routes>
      <Routes>
            <Route path='/Createvolunteer' element={<Createvolunteer/>}></Route>
      </Routes>
      <Routes>
            <Route path='/Updatevolunteer' element={<Updatevolunteer/>}></Route>
      </Routes>
      <Routes>
            <Route path='/Deletevolunteer' element={<Deletevolunteer/>}></Route>
      </Routes>
        
       
       </div>

        
   

      
    </body>
  )
};

export default App //Export for App function
