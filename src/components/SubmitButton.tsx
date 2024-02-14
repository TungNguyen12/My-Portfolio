import { motion } from 'framer-motion'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="submit"
      className="group flex items-center justify-center bg-black text-white px-3 py-2 h-[3rem] w-[8rem] rounded-full gap-3 hover:from-pink-500 hover:to-yellow-500 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin border-b-2 rounded-full border-white"></div>
      ) : (
        <>
          Send{' '}
          <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition" />
        </>
      )}
    </motion.button>
  )
}

export default SubmitButton
