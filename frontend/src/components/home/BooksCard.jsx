import React from 'react'
import BooksSingleCard from './BooksSingleCard'

const BooksCard = ({books}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {books.map((books)=>(
            <BooksSingleCard key={books._id} book={books}/>
            
        ))}
      
    </div>
  )
}

export default BooksCard
