import React, { use, useState,useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate ,useParams} from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
const editBooks = () => {
  const[title,setTitle]=useState('')
  const[author,setAuthor]=useState('')
  const[publishYear,setPublishYear]=useState('')
  const[loading,setLoading]=useState(false)

  const navigate=useNavigate()
  const {id}=useParams()
  useEffect(()=>{
    setLoading(true)
    axios
    .get(`http://localhost:5555/api/books/get/${id}`)
    .then((response)=>{
      setAuthor(response.data.data.author)
      setPublishYear(response.data.data.publishYear)
      setTitle(response.data.data.title)
      setLoading(false)
    })
    .catch((err)=>{
      setLoading(false)
      alert('An error happened .Please Check console')
      console.log(err)
    })
  },[])
  const handleEditBook=()=>{
    const data={
      title,author,publishYear
    }
    setLoading(true)
    axios
    .put(`http://localhost:5555/api/books/update/${id}`,data)
    .then(()=>{
      setLoading(false)
        enqueueSnackbar('Book edited successfully',{variant:'success'})
      navigate('/home')
    })
    .catch((err)=>{
      setLoading(false)
      //alert('An error happened .Please Check console')
        enqueueSnackbar('Error',{variant:'error'})
      console.log(err)
    })
  }
  return (
    <div className='p-4    w-full min-h-screen'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ?<Spinner/> :''}
      <div className='flex flex-col border-2 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-blue-500'>Title</label>
          <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className='border-3 border-gray-500 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition'/>
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-blue-500'>Author</label>
          <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)} className='border-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition border-gray-500 px-4 py-2 w-full'/>
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-blue-500'>Publish Year</label>
          <input type='number' value={publishYear} onChange={(e)=>setPublishYear(e.target.value)} className='border-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition border-gray-500 px-4 py-2 w-full'/>
        </div>

        <button className='mt-4 px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition w-full' onClick={handleEditBook}>Save</button>
      </div>
      
    </div>
  )
}

export default editBooks
