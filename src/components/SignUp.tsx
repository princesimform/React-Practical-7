import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import UserProfile from "./../assets/HomeProfile.png";

function SignUp() {
  const [Profileimage, setProfileImage] = useState<undefined | string>(
    undefined
  );

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      setProfileImage(URL.createObjectURL(event.target.files[0]));
    }
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
                  <form action='' method='post ' className='mt-3'>
                    <div className='form-group text-center '>
                      <input
                        type='file'
                        className=''
                        id='userProfileInput'
                        onChange={onImageChange}
                      />
                      <label
                        className='cursor-pointer'
                        htmlFor='userProfileInput'
                      >
                        Photo +
                      </label>
                    </div>
                    <div className='form-group text-left '>
                      <label
                        className='py-2 cursor-pointer'
                        htmlFor='exampleInputName1'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='exampleInputName1'
                        aria-describedby='nameHelp'
                      />
                    </div>
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
                    <div className='form-group text-left '>
                      <label
                        className='py-2 cursor-pointer'
                        htmlFor='exampleInputPhone1'
                      >
                        Phone No.
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='exampleInputPhone1'
                        aria-describedby='phoneHelp'
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
                    <div className='form-group '>
                      <label
                        className='py-2 cursor-pointer'
                        htmlFor='exampleInputConfirmPassword1'
                      >
                        Confirm Password
                      </label>
                      <input
                        type='password'
                        className='form-control'
                        id='exampleInputConfirmPassword1'
                      />
                    </div>

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
