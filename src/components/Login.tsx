import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserProfile from "./../assets/HomeProfile.png";
import { Email, Password } from "./FormField";
import { Formik, Field, ErrorMessage } from "formik";
import { validationSchemaLogin } from "./validationSchema";
import { loginInitialValuesTypes } from "./interface/interfaceList";

const initialValues: loginInitialValuesTypes = {
  email: "",
  password: "",
};

function Login() {
  const [MicroFormField, setmicroFormField] = useState([Email, Password]);
  const handleSubmit = (values: loginInitialValuesTypes) => {
    console.log("values");
    console.log(values);
  };

  return (
    <>
      <div className='bg-faebd8'>
        <div className='align-items-center justify-content-center container auth-container  pt-5 pt-sm-5 pt-md-0  '>
          <div className='shadow p-3 mb-5 bg-white rounded'>
            <div className='row'>
              <div className='col-md-5 m-auto'>
                <div className='login-container'>
                  <h1 className=''>Login</h1>
                  <div>
                    <Formik
                      initialValues={initialValues}
                      onSubmit={handleSubmit}
                      validationSchema={validationSchemaLogin}
                    >
                      {({ values, handleChange, handleSubmit }) => (
                        <form
                          action=''
                          method='post '
                          className='mt-3'
                          onSubmit={handleSubmit}
                        >
                          {MicroFormField.map((element) => (
                            <div
                              className='form-group text-left '
                              key={element.id}
                            >
                              <label
                                className='py-2 cursor-pointer'
                                htmlFor={element.id}
                              >
                                {element.lable}
                              </label>
                              <Field
                                type={element.type}
                                id={element.id}
                                aria-describedby='nameHelp'
                                name={element.name}
                                className='form-control'
                              />
                              <ErrorMessage
                                name={element.name}
                                component='div'
                                className='text-danger'
                              />
                            </div>
                          ))}
                          <button
                            type='submit'
                            className='btn btn-primary my-4 '
                          >
                            Submit
                          </button>
                        </form>
                      )}
                    </Formik>
                    {/* <form action='' method='post ' className='mt-3'>
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
                    </form> */}
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
