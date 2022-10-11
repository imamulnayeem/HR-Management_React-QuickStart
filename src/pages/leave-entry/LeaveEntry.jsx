import React from 'react'
import { CancelButton, SaveButton } from '../../components/form-field/FormButton'
import InputField from '../../components/form-field/InputField'
import './LeaveEntry.css'
import { Paper,Table,TableContainer,TableHead,TableRow,TableCell,TableBody } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const initialValue={
  leaveName:'',
  allowedDays:0
}

const LeaveEntry = () => {
  const formik=useFormik({
    initialValues:initialValue,
    onSubmit:(values)=>{
      console.log(values)
    },
    validationSchema: Yup.object({
      leaveName: Yup.string()
            .max(10, 'Leave Name must be 10 charcter or less')
            .required('Leave Name is Required'),
      allowedDays: Yup.number()
            .required('Allowed days is Required')
            .max(10,'Max value should be 10'),
    })
  })
  return (
    <div>
        <div className="row">
            <Paper style={{margin:'1rem',padding:'1rem', width:'30%'}}>
                <h2>Leave Type Entry</h2>
                <form onSubmit={formik.handleSubmit}>
                  <InputField 
                    name='leaveName' 
                    label='Leave Name' 
                    style={{width:'90%'}}
                    onChange={formik.handleChange}
                    // onBlur={formik.handleBlur} 
                    value={formik.values.firstName}
                  /> 
                  {formik.touched.leaveName && formik.errors.leaveName ? ( <div>{formik.errors.leaveName}</div>) : null}
                  
                  <InputField 
                    name='allowedDays' 
                    type='number' 
                    label='Allowed Days' 
                    style={{width:'90%'}}
                    onChange={formik.handleChange}
                    // onBlur={formik.handleBlur} 
                    value={formik.values.allowedDays}
                  /> 
                  {formik.touched.allowedDays && formik.errors.allowedDays ? ( <div>{formik.errors.allowedDays}</div>) : null}

                  <div className="btnRow">
                    <SaveButton type='submit'>Save</SaveButton>
                    <CancelButton >Clear</CancelButton>
                  </div>
                </form>
            </Paper>
            <Paper style={{margin:'1rem', width:'70%'}}>
                <div>Just another day</div>
            </Paper>
        </div>
    </div>
  )
}

export default LeaveEntry