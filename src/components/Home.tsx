import React from "react";
import { Link } from "react-router-dom";
import NewUserImage from "./../assets/new_user.png";
import loginImage from "./../assets/my_login.png";
import { useSelector } from "react-redux";
import Header from "./Header";
function Home() {
  const { loginUser } = useSelector((state: any) => state.userLoginSlice);
  return (
    <>
      <Header />
      {loginUser.isLogin ? (
        <></>
      ) : (
        <div className='align-items-center justify-content-center container   pt-5 pt-sm-5 pt-md-0'>
          <div className='shadow p-3 mb-5 bg-white rounded'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 text-center m-auto border-end border-3  '>
                <div className=' p-4  A  d-inline-block   '>
                  <div className=' image d-flex flex-column justify-content-center align-items-center'>
                    <div className=' '>
                      <img
                        src={loginImage}
                        height='100'
                        width='100'
                        className='rounded-circle border border-secondary border-2'
                      />
                    </div>
                    <span className='text-center mt-3'>
                      <p className='name  mt-3'>
                        <span> Already User </span>
                      </p>
                      <Link className='btn btn-dark' to='/login'>
                        LogIn
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-sm-12 text-center m-auto'>
                <div className=' p-4   d-inline-block  '>
                  <div className=' image d-flex flex-column justify-content-center align-items-center'>
                    <div className=' '>
                      <img
                        src={NewUserImage}
                        height='100'
                        width='100'
                        className='rounded-circle border border-secondary border-2'
                      />
                    </div>
                    <span className='text-center mt-3'>
                      <p className='create-user-container text-center name  mt-3'>
                        <span className=''>Create New User </span>
                      </p>
                      <Link className='btn btn-dark' to='/sign-up'>
                        Sign Up
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
