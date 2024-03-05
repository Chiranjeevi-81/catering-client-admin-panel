import React, { useState } from 'react'
import LoginInput from '../../components/LoginInput'
import { FaEnvelope ,FaLock, FcGoogle } from '../../assets/icons/root'
import {motion}  from 'framer-motion'
import { buttonClick, whileTap } from '../../animations/root'

function Login() {
  const [userEmail , setUserEmail] = useState('');
  const [isSignUp , setIsSignUp] = useState(false)
  const [password , setPassword] = useState('')
  const [confirm_password , setConfirm_password] = useState('')

  return (
    <div className='w-screen h-screen flex relative overflow-hidden'>

      {/* <img src= 'client\src\assets\images\chuttersnap.jpg'
        className='w-full h-full object-cover absolute top-0 left-0'
       alt="hihihihi" 
       /> */}

       { /* CONTENT BOX  */ }
       <div className='flex flex-col bg-lighttextGray w-[80%] md:w-350 h-full z-10 backdrop-blur-md p-4 px-4 py-6 gap-6'>
        
          <div className='flex items-center justify-start gap-4 w-full '>
             <img src='' alt="LOGO" className='w-8 ' />
             <p className='text-headingColor font-semibold text-2xl'>FOOD</p>
          </div>

          {/* WELCOME MSG */}
          <p className='text-xl font-semibold text-headingColor text-center'>Welcome Back!</p>
          <p className='text-md text-textColor text-center -mt-6'>{isSignUp ? "Sign Up": "Sign In" } from the following</p>

          <div className='w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
            <LoginInput 
            placeHolder={"Your Email"} 
            icon={<FaEnvelope className='text-xl text-textColor' />}  inputState={userEmail} 
            inputStateFunc={setUserEmail} 
            type='email' 
            isSignUp={isSignUp}
            />

            <LoginInput 
            placeHolder={"Your Password"} 
            icon={<FaLock className='text-xl text-textColor' />}  inputState={password} 
            inputStateFunc={setPassword} 
            type='password' 
            isSignUp={isSignUp}
            />

            {
              isSignUp && (
                <LoginInput 
                placeHolder={" Confirm Password"} 
                icon={<FaLock className='text-xl text-textColor' />}  inputState={confirm_password} 
                inputStateFunc={setConfirm_password} 
                type='password' 
                isSignUp={isSignUp} 
                /> )
            }

            {!isSignUp ? <p className='text-xs text-gray-900'>Doesn't have an account ? {""} <motion.button 
            {...buttonClick}
            className='text-white underline cursor-pointer bg-transparent'
            onClick={ () => setIsSignUp(true) } >

                Create One.</motion.button> </p> : 

             (<p className='text-xs text-center text-gray-900'> 
               Already Have an account? {""} <motion.button 
               {...buttonClick} 
               className='text-white underline cursor-pointer bg-transparent' 
               onClick={ () => setIsSignUp(false)}>

                Sign-In here</motion.button>
             </p>) 
            }

           {isSignUp ?  <motion.button {...buttonClick} className='w-full px-4 py-2 rounded-md bg-black cursor-pointer text-white text-xl capitalize hover:bg-green-500 transition-all duration-150'>
              Sign Up
            </motion.button> :  <motion.button {...buttonClick} className='w-full px-4 py-2 rounded-md bg-black cursor-pointer text-white text-xl capitalize hover:bg-yellow-500 transition-all duration-150'>
              Sign In
            </motion.button>}

          </div>

          <div className='flex items-center justify-between gap-8'> 
             <div className='w-24 h-[1px] rounded-md bg-white'></div>
              <p className='text-white '>or</p>
             <div className='w-24 h-[1px] rounded-md bg-white'></div>
          </div>

          <motion.div {...buttonClick} 
          className='flex px-15 py-1 justify-center items-center bg-white rounded-2xl hover:cursor-pointer'> 
            <FcGoogle className='text-md'/> 
            <p className='capitalize text-base text-headingColor mx-1'>Signin with Google </p>
          </motion.div>
       </div>
      
    </div>
  )
}


export default Login
