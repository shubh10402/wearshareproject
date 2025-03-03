import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserNavbar } from './component/layout/UserNavbar'
// import './App.css'
import './assets/css/adminlte.css'
import './assets/css/adminlte.min.css'
import { UserSidebar } from './component/layout/UserSidebar'
import { SignUp } from './component/common/SignUp'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Loginpageuser } from './component/common/Loginpageuser'






function App() {
  // const [count, setCount] = useState(0)

  return (
    <body> 
     

      <div >
       {/* <UserSidebar>  </UserSidebar> */}
       <UserNavbar></UserNavbar>
       
       
       {/* <SignUp></SignUp> */}
       {/* <Loginpageuser></Loginpageuser> */}
       <div> 
        
        {/* <Routes>
          <Route path="/" element={<UserSidebar/>}></Route>
        </Routes> */}
        
       <Routes>
          <Route path="/signup" element={<SignUp/>}></Route>
       </Routes>
       <Routes>
          <Route path="/Loginpageuser" element={<Loginpageuser/>}></Route>
       </Routes>
       
       </div>

        
   

      </div>
    </body>
  )
}

export default App
