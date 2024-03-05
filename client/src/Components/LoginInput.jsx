import React , { useState , onBlur } from 'react'
import { motion } from 'framer-motion'
import { fadeInOut } from '../animations/root';

function LoginInput({placeHolder , icon , inputState , inputStateFunc , type , isSignUp}) {

  const [isFocus , setIsFocus] = useState(false);
  
  return (
    <motion.div {...fadeInOut}
    className={ `${isFocus ? 'shadow-md shadow-gray-800' : 'shadow-none'} flex items-center justify-center gap-3 bg-white backdrop-blur-md rounded-md w-full px-4 py-2`}>
       {icon}
       <input type={type} 
       placeholder={placeHolder} 
       className='w-full h-full rounded-md  text-headingColor text-sm font-regular p-1 border-none outline-none'
       value = {inputState}
       onChange = { (e) => inputStateFunc(e.target.value)}
       onFocus = { () => setIsFocus(true) }
       onBlur = { () => setIsFocus(false) }
       />
      
    </motion.div>
  )
}

export default LoginInput
