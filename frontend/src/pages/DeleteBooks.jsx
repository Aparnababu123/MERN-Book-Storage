import React, { useState } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
const deleteBooks = () => {
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()
  const {id}=useParams()

  const handleDeleteBook=()=>{
    setIsLoading(true)
    axios
      .delete(`http://localhost:5555/api/books/delete/${id}`)
      .then(()=>{
        setIsLoading(false)
          enqueueSnackbar('Book deleted successfully',{variant:'success'})
        navigate('/home')
      })
      .catch((err)=>{
        console.log(err)
        //alert('An error occured .Do pleade check the console')
          enqueueSnackbar('Error',{variant:'error'})
      })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {isLoading ? <Spinner/>:''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h1 className='text-2xl'>Are you sure you want to <span className='text-red-500'>Delete</span> this book ?</h1>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>Yes,Delete it</button>
      </div>
      
    </div>
  )
}

export default deleteBooks
