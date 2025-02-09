"use client";
import React, { useState } from "react";  // ✅ Fix useState import
import { useLogin } from '../../hooks/useLogin'
import {useForm, useFormState} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {loginSchema} from "../../validations/ValidationSchema"
import {ErrorMessage, errorMessage} from "@hookform/error-message"


const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {login,error,isLoading} = useLogin()

    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(loginSchema)
    })


    const submitForm = async (e)=>{
        // e.preventDefault()
        await login(email,password)
    }   

    const handleKeyDown = (event)=>{
        if (event.key==='Enter'){
            event.preventDefault();
            submitForm()
        }
    }



  return (
    <div>
        {/* <Navbar id={'login--nav'}/> */}

        <div className=''>

            <h1>Sign in to MargIn</h1>
            <form onKeyDown={handleKeyDown} className='' onSubmit={handleSubmit(submitForm)}>
                <label>Email:</label>
                <input 
                    {...register('email',{required:true})}
                    name='email'
                    type='text'
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                >
                </input>
                <div className={'error'}>
                    <ErrorMessage errors={errors} name='email' />
                </div>

                <label>Password:</label>
                <input 
                    {...register('password',{required:true})}
                    name='password'
                    type='password'
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                >
                </input>
                <div className={'error'}>
                    <ErrorMessage  errors={errors} name='password' />
                </div>

                <button   className='' id='' >Submit</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
        
    </div>
  )
}

export default Login