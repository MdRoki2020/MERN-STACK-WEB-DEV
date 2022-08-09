import React, { Fragment } from 'react'
import PinCode from '@uiw/react-pin-code';

const Verify_OTP = () => {
  return (
    <Fragment>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card w-90  p-4">
                        <div className="card-body">
                            <h4>OTP VERIFICATION </h4>
                            <p>A 6 Digit verification code has been sent to your email address. </p>
                            {/* <PinCode  fields={6}/> */}
                            <PinCode autoFocus value={['', '', '', '', '', '']} />
                            <br/>  <br/>
                            <button  className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
  )
}

export default Verify_OTP
