import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';
const Register = () => {
  return (
    <>
    <Helmet>
        <title>Register</title>
    </Helmet>
    <Formik
    initialValues={{fname:'',lname:'',email:'',password:'',cpassword:''}}
    validationSchema={Yup.object({
        fname:Yup.string()
        .max(20,'must be 20 character or less')
        .required('firstname is manditory'),

        lname:Yup.string()
        .max(20,'must be 20 character or less')
        .required('lastname is manditory'),

        email:Yup.string()
        .email('invalid email format')
        .required('email is mandatory'),
        
        password:Yup.string()
        .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$?!])[A-Za-z\d@#$?!]{8,100}$/,'muat contain one uppercase ,one lowercase,one numeric and one special character and must contain alteast 8 character'),

        cpassword:Yup.string()
        .required('confirm password is mandatory')
        .oneOf([Yup.ref('password'),null],'password and confirm password doesnot match')

    })}
    >
        <div className="container my-3">
            <div className="row d-felx justify-content-center">
                <div className="col-md-5 shadow">
                    <Form>
                        <div className="mb-2">
                            <label htmlFor="firstname">FirstName</label>
                            <Field type="text" name="fname" id="firstname" className='form-control'/>
                            <ErrorMessage name="fname">
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="lastname">LastName</label>
                            <Field type="text" name="lname" id="lastname" className='form-control'/>
                            <ErrorMessage name="lname">
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <Field type="text" name="email" id="email" className='form-control'/>
                            <ErrorMessage name="email">
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" id="password" className='form-control'/>
                            <ErrorMessage name="password">
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <Field type="password" name="cpassword" id="cpassword" className='form-control'/>
                            <ErrorMessage name="cpassword">
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <button className='btn btn-primary'>Register</button>
                        </div>
                    </Form>

                </div>
            </div>

        </div>
    </Formik>

    </>
  )
}

export default Register