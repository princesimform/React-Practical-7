import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import UserProfile from "./../assets/HomeProfile.png";
import { validationSchemaSignup } from "./validationSchema";
import { ConfirmPassword, Email, Name, Password, PhoneNo } from "./FormField";
import {
  InputFieldType,
  signUpInitialValuesTypes,
} from "./interface/interfaceList";
const initialValues: signUpInitialValuesTypes = {
  // profile: "",
  name: "",
  email: "",
  phone_no: "",
  password: "",
  confirm_password: "",
};

function SignUp() {
  // const [Profileimage, setProfileImage] = useState<undefined | string>(
  //   undefined
  // );
  const [MicroFormField, setmicroFormField] = useState<InputFieldType[]>([
    Name,
    Email,
    PhoneNo,
    Password,
    ConfirmPassword,
  ]);

  // const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     console.log(event.target.files[0]);
  //     setProfileImage(URL.createObjectURL(event.target.files[0]));
  //   }
  // };

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
                  {/* {Profileimage && (
                    <img
                      height='40'
                      width='40'
                      alt='preview image'
                      src={JSON.parse(Profileimage)}
                    />
                  )} */}
                </div>
                <div>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchemaSignup}
                  >
                    {({ values, handleChange, handleSubmit }) => (
                      <form
                        action=''
                        method='post '
                        className='mt-3'
                        onSubmit={handleSubmit}
                      >
                        {/* <div className='form-group text-center '>
                          <Field
                            type='file'
                            className=''
                            id='userProfileInput'
                            name='profile'
                            onChange={(
                              event: ChangeEvent<HTMLInputElement>
                            ) => {
                              if (event.currentTarget.files) {
                                let imgFile = event.currentTarget.files[0];
                                if (
                                  imgFile.type == "image/png" ||
                                  imgFile.type == "image/jpeg" ||
                                  imgFile.type == "image/jpg" ||
                                  imgFile.type == "image/gif"
                                ) {
                                  const reader = new FileReader();
                                  reader.addEventListener("load", function (e) {
                                    const ImgObj = JSON.stringify(
                                      reader.result
                                    );
                                    console.log(ImgObj);
                                    setProfileImage(ImgObj);
                                  });
                                  reader.readAsDataURL(imgFile);
                                } else {
                                  alert("Please Add Valid Image");
                                }
                                handleChange(event.currentTarget.files[0]);
                              }

                              // onImageChange(event);
                              // handleChange(event);
                            }}
                          />
                          <label
                            className='cursor-pointer'
                            htmlFor='userProfileInput'
                          >
                            Photo +
                          </label>
                        </div> */}
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
