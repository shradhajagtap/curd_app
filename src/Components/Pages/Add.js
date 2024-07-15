import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useForm} from 'react-hook-form'


function Add() {
  const { register, handleSubmit } = useForm()
  const navi = useNavigate()
  
  function saveData(data) {
    axios.post("http://localhost:5000/user", data)
    navi('/show')

  }

  return (
    <>
    <div className='container border border-info mt-3 p-3 w-50'>
      <form onSubmit={handleSubmit(saveData)}>
        <label htmlFor="n"> Doctor Name </label>
        <input type="text"  id="n" {...register('docturename')}/>
        <br/><br/>

        <label htmlFor="f"> Consultancy Fees </label>
        <input type="number"  id="f" {...register('consultancyfees')}/>
        <br/><br/>

        <label htmlFor="d"> Appointment Date </label>
        <input type="date"  id="d" {...register('appointmentdate')}/>
        <br/><br/>

        <label htmlFor="t"> Appointment Time </label>
        <input type="time"  id="t" {...register('appointmenttime')}/>
        <br/><br/>

        <label htmlFor="s"> Current Status </label>
        <input type="text"  id="s" {...register('currentstatus')}/>
        <br/><br/>

        <input type='submit' value={'Submit'} className='mt-2' />
        <input type='reset' value={'Reset'} className=' mt-2' />
        
        
      </form>
    </div>
    </>
  )
}

export default Add




