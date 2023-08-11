import React from 'react'
import { logo } from '../assets'

const Login = () => {
    return (
            <div className='h-screen flex justify-between items-center'>
                <div className='w-full'>
                    <div className='w-[90%] m-auto sm:w-[70%] md:w-[60%] shadow-xl p-5 rounded-xl border'>
                        <h1 className='flex justify-center w-full mb-5'>
                            <img src={ logo } alt="image" className='w-[180px]'/> 
                        </h1>
                        <h1 className='font-extrabold text-center mb-10 text-[24px] text-[#97073B]'>LOGIN TO CONTINUE</h1>
                        <form action="/">
                            <input type="text" className='py-2 px-5 border-2 w-full rounded-lg mb-4' placeholder='Email'/>
                            <input type="password" className='py-2 px-5 border-2 w-full rounded-lg mb-4' placeholder='Password'/>
                            <input type="submit" value="LOGIN" className='w-full block bg-[#F44336] py-2 px-5 text-[16px] font-bold text-white rounded-md' />
                        </form>
                        <p className='mt-5 text-[14px] text-[#97073B]'>Don't have an account? <a href="/singup" className='text-[#F44336]'>Create Now</a></p>
                    </div>
                </div>  
            </div>
        )
}

export default Login