import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py2 px-[4%] justify-between mt-2'>
        <img className='w-[max(5%)]' src={assets.logo} alt="" />
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full'>Déconnexion</button>
    </div>
  )
}

export default Navbar