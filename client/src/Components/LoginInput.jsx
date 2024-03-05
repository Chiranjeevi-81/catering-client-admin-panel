import React from 'react'

function LoginInput({placeholder , icon , inputState , inputStateFunc , type , isSignUp}) {


  return (
    <div className='flex items-center justify-center gap-4 bg-lighttextGray backdrop-blur-md rounded-md w-full px-4 py-2'>
      {icon}
       <input type={type} 
       placeholder={placeholder} 
       className='w-full h-full  text-headingColor text-lg font-semibold border-none outline-none' />
    </div>
  )
}

export default LoginInput
