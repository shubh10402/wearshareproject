import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserNavbar } from './component/layout/UserNavbar'
// import './index.css'
import './assets/css/adminlte.css'
import './assets/css/adminlte.min.css'
import { UserSidebar } from './component/layout/UserSidebar'
import { SignUp } from './component/common/SignUp'
import { Routes, Route } from 'react-router-dom'
import { Loginpageuser } from './component/common/Loginpageuser'
import { Forgatpassword } from './component/common/Forgatpassword'

import { AdminLogin } from './component/admin/adminlogin'






function App() {    //App function
  // const [count, setCount] = useState(0)

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
            <Route path='/adminlogin' element={<AdminLogin/>}></Route>
       </Routes>
       
       </div>

        
   

      
    </body>
  )
};

export default App //Export for App function
