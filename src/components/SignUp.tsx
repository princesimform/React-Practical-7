import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import UserProfile from "./../assets/HomeProfile.png";
import { validationSchemaSignup } from "./validationSchema";
import InputField from "./InputField";
import {
  InputFieldType,
  signUpInitialValuesTypes,
} from "./interface/interfaceList";
const initialValues: signUpInitialValuesTypes = {
  profile: null,
  name: "",
  email: "",
  phone_no: "",
  password: "",
  confirm_password: "",
};

function SignUp() {
  const [Profileimage, setProfileImage] = useState<undefined | string>(
    undefined
  );

  const onImageChange = (
    event: ChangeEvent<HTMLInputElement>,
    setFieldValue: any
  ) => {
    if (event.target.files && event.target.files[0]) {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
      setFieldValue("profile", event.target.files[0]);
    }
  };

  const handleSubmit = (values: signUpInitialValuesTypes) => {
    console.log("values");
    console.log(values);
  };

  return (
    <div className='bg-faebd8'>
      <div className='align-items-center justify-content-center container auth-container  pt-5 pt-sm-5 pt-md-0'>
        <div className='shadow p-3 mb-5 bg-white rounded'>
          <div className='row'>
            <div className='col-md-5 m-auto'>
              <div className='sign-up-container'>
                <h1 className=''>SignUp</h1>
                <div className='text-center'>
                  {Profileimage && (
                    <img
                      height='40'
                      width='40'
                      alt='preview image'
                      src={Profileimage}
                    />
                  )}
                </div>
                <div>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchemaSignup}
                  >
                    {({
                      values,
                      handleChange,
                      handleSubmit,
                      setFieldValue,
                    }) => (
                      <form
                        action=''
                        method='post '
                        className='mt-3'
                        onSubmit={handleSubmit}
                      >
                        <div className='form-group text-center '>
                          <Field
                            type='file'
                            className=''
                            id='userProfileInput'
                            name='profile'
                            value={undefined}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                              onImageChange(event, setFieldValue)
                            }
                          />
                          <ErrorMessage
                            name='profile'
                            component='p'
                            className='text-danger'
                          />
                          <label
                            className='cursor-pointer'
                            htmlFor='userProfileInput'
                          >
                            Photo +
                          </label>
                        </div>
                        <InputField
                          type='text'
                          name='name'
                          label='Name'
                          hasValidate={true}
                        />

                        <InputField
                          type='email'
                          name='email'
                          label='Email address'
                          hasValidate={true}
                        />

                        <InputField
                          type='number'
                          name='phone_no'
                          label='Phone No.'
                          hasValidate={true}
                        />

                        <InputField
                          type='password'
                          name='password'
                          label='Password'
                          hasValidate={true}
                        />

                        <InputField
                          type='password'
                          name='confirm_password'
                          label='Confirm Password'
                          hasValidate={true}
                        />

                        <button type='submit' className='btn btn-primary my-4 '>
                          Submit
                        </button>
                        <button
                          type='reset'
                          value='Reset'
                          className='btn btn-danger my-4 mx-4 '
                        >
                          Reset
                        </button>
                      </form>
                    )}
                  </Formik>
                  <p>
                    Already Register <Link to='/login'>login</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-7 m-auto'>
              <img className='user-profile-img' src={UserProfile} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
