import React from "react";
import Home from "./Home";

function Welcome() {
  return (
    <>
      <Home />
      <div className='container mt-4  p-3 d-flex justify-content-center d-block'>
        <div className='bg-faebd8 card p-4 shadow p-3   rounded'>
          <div className=' image d-flex flex-column justify-content-center align-items-center'>
            <button className='btn btn-secondary rounded-circle'>
              <img
                src='https://i.imgur.com/wvxPV9S.png'
                height='110'
                width='100'
                className=''
              />
            </button>
            <span className='text-left mt-3'>
              <p className='name  mt-3'>
                <span> Name : </span> Prince Makavana
              </p>
              <p className='idd '>
                <span> Email : </span> princemakak91@gs.sf
              </p>
              <p className='idd1'>
                <span> Phone No : </span> 12345678900
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className=' container p-3 d-flex justify-content-center d-block'>
        <div className='bg-faebd8 card px-4 shadow p-3  rounded'>
          <span>
            Hello <span className='fw-bold'> Prince Makavana </span>, you are
            registered with the email id -{" "}
            <span className='fw-bold'> princemakak91@gs.sf </span> and phone
            number - <span className='fw-bold'> 12345678900 </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Welcome;
