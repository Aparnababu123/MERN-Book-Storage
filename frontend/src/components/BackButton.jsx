import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({destination='/home'}) => {
  return (
    <div className='flex'>
      <Link to={destination} className='bg-sky-500 text-white px-4 py-1 rounde-lg'>
        <BsArrowLeft className='text-2xl'/>
      </Link>
    </div>
  )
}

export default BackButton
