import React, { useState } from 'react'
import LoginInput from '../../components/LoginInput'
import { FaEnvelope } from '../../assets/icons/root'

function Login() {
  const [userEmail , setUserEmail] = useState('');
  const [isSignUp , setIsSignUp] = useState(false)
  return (
    <div className='w-screen h-screen flex relative overflow-hidden'>

      <img src='client\src\assets\Images\aneta-pawlik.jpg'
        className='w-full h-full object-cover absolute top-0 left-0'
       alt="hihihihi" 
       />

       { /* CONTENT BOX  */ }
       <div className='flex flex-col bg-lighttextGray w-[80%] md:w-275 h-full z-10 backdrop-blur-md p-4 px-4 py-6 gap-6'>
        
          <div className='flex items-center justify-start gap-4 w-full '>
             <img src= '' alt="LOGO" className='w-8 ' />
             <p className='text-headingColor font-semibold text-md'>FOOD</p>
          </div>

          {/* WELCOME MSG */}
          <p className='text-lg font-semibold text-headingColor text-center'>Welcome Back!</p>
          <p className='text-sm text-textColor text-center -mt-6'>Sign-in from the following</p>

          <div className='w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
            <LoginInput placeholder={"Your Email"} icon={<FaEnvelope className='text-xl text-textColor '/>}  inputState={userEmail} inputStateFunc={setUserEmail} type='email' isSignUp={isSignUp}/>
          </div>

       </div>
      
    </div>
  )
}

export default Login
