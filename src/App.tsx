import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import { RouterProvider } from "react-router-dom";
import router from "./components/Route/router";
function App() {
  return (
    <RouterProvider router={router} />
    // <>
    //     <Home />
    //   <div className='container auth-container mt-5'>
    //     <div className='shadow p-3 mb-5 bg-white rounded'>
    //       <div className='row'>
    //         <div className='col-md-5 m-auto'>
    //           <SignUp />
    //           {/* <Login /> */}
    //         </div>
    //         <div className='col-md-7 m-auto'>
    //           <img className='user-profile-img' src={UserProfile} alt='' />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

export default App;
