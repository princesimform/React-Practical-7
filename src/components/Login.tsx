import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "./../assets/HomeProfile.png";

function Login() {
  return (
    <>
    <div className="bg-faebd8">
      <div className='align-items-center justify-content-center container auth-container  pt-5 pt-sm-5 pt-md-0  '>
        <div className='shadow p-3 mb-5 bg-white rounded'>
          <div className='row'>
            <div className='col-md-5 m-auto'>
              <div className='login-container'>
                <h1 className=''>Login</h1>
                <div>
                  <form action='' method='post ' className='mt-3'>
                    <div className='form-group text-left '>
                      <label
                        className='py-2 cursor-pointer'
                        htmlFor='exampleInputEmail1'
                      >
                        Email address
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                      />
                    </div>
                    <div className='form-group '>
                      <label
                        className='py-2 cursor-pointer'
                        htmlFor='exampleInputPassword1'
                      >
                        Password
                      </label>
                      <input
                        type='password'
                        className='form-control'
                        id='exampleInputPassword1'
                      />
                    </div>
                    <button type='submit' className='btn btn-primary my-4 '>
                      Submit
                    </button>
                  </form>
                  <p>
                    Don't Have Account ? <Link to='/sign-up'>Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-7 m-auto'>
              <img
                className='login-user-profile-img'
                src={UserProfile}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;
