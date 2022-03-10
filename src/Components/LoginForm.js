import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../style/form.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useNavigate } from 'react-router-dom'

const validationSchema = Yup.object({
    email: Yup
        .string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: Yup
        .string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
    conPassword: Yup
        .string('Enter your password').oneOf([Yup.ref('password'), null], 'Passwords must match'),

    id: Yup
        .number().required('Id is required'),
    userFName: Yup
        .string().required('First name is required'),
    userLName: Yup
        .string().required('Last name is required'),
    phone: Yup
        .number().max(9999999999, 'מספר לא תקין').min(99999999, 'מספר לא תקין'),
    address: Yup
        .string(),
});

export default function LoginForm() {
     const nevigate = useNavigate(); 
    const formik = useFormik({
        initialValues: {
            email: '',
            userFName: '',
            userLName: '',
            id: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
                     console.log(values); 
                nevigate('/hello/'+values.userFName)
            
        },
    });

    return (
        <div style={{ minHeight: '73vh' }} className="row d-flex justify-content-center ">

        <div className=' formDiv ' >
            <form onSubmit={formik.handleSubmit} className=''>
                <TextField
                    fullWidth
                    id="id"
                    name="id"
                    label="id"
                    value={formik.values.id}
                    onChange={formik.handleChange}
                    error={formik.touched.id && Boolean(formik.errors.id)}
                    helperText={formik.touched.id && formik.errors.id}
                />

                <div style={{ marginRight: '6px' }}>
                    <TextField
                        fullWidth
                        id="userFName"
                        name="userFName"
                        label="First name"
                        value={formik.values.userFName}
                        onChange={formik.handleChange}
                        error={formik.touched.userFName && Boolean(formik.errors.userFName)}
                        helperText={formik.touched.userFName && formik.errors.userFName}
                    /> <TextField
                        fullWidth
                        id="userLName"
                        name="userLName"
                        label="Last name"
                        value={formik.values.userLName}
                        onChange={formik.handleChange}
                        error={formik.touched.userLName && Boolean(formik.errors.userLName)}
                        helperText={formik.touched.userLName && formik.errors.userLName}
                    /></div>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                /> <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    fullWidth
                    id="conPassword"
                    name="conPassword"
                    label="Confirm password"
                    type="password"
                    value={formik.values.conPassword}
                    onChange={formik.handleChange}
                    error={formik.touched.conPassword && Boolean(formik.errors.conPassword)}
                    helperText={formik.touched.conPassword && formik.errors.conPassword}
                />
                <TextField
                    fullWidth
                    id="address"
                    name="address"
                    label="Address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                />

                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
        </div>
    );
};