import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {

    const { register, handleSubmit, setValue } = useForm()

    const { userId } = useParams()
    
    const navi = useNavigate()

    async function fetchData() {
        const result = await axios.get(`http://localhost:5000/user/${userId}`)
        setValue('docturename', result.data.docturename)
        setValue('consultancyfees', result.data.consultancyfees)
        setValue('appointmentdate', result.data.appointmentdate)
        setValue('appointmenttime', result.data.appointmenttime)
        setValue('currentstatus', result.data.currentstatus)

    }

    function saveData(data) {
        axios.put(`http://localhost:5000/user/${userId}`, data)
        navi('/show')
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <div className=" container border border-info mt-3 p-3">
                <center><b>Employee Update</b></center>
                <form onSubmit={handleSubmit(saveData)}>
                    <label htmlFor='n'> Doctor Name : </label>
                    <input type='text' id='n' className='form-control' {...register('docturename')} />

                    <label htmlFor='cname'> Consultancy Fees : </label>
                    <input type='text' id='cname' className='form-control' {...register('consultancyfees')} />

                    <label htmlFor='add'> Appointment Date : </label>
                    <input type='text' id='add' className='form-control' {...register('appointmentdate')} />

                    <label htmlFor='add'> Appointment Time : </label>
                    <input type='text' id='add' className='form-control' {...register('appointmenttime')} />
                    
                    <label htmlFor='add'> Current Status : </label>
                    <input type='text' id='add' className='form-control' {...register('currentstatus')} />

                    <input type='submit' value={'Update'} className="btn btn-outline-warning btn-sm me-3" />
                    <input type='reset' value={'Reset'} className='btn btn-outline-danger btn-sm'/>
                </form>

            </div>
        </>
    )
}

export default Update