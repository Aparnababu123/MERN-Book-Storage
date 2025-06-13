import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import EditBooks from './pages/EditBooks'
import DeleteBooks from './pages/DeleteBooks'
import ShowBooks from './pages/ShowBooks'
import CreateBooks from './pages/CreateBooks'
import Main from './pages/Main'

const App = () => {
  return (
    <Routes>
       <Route path='/' element={<Main/>}/>
      <Route path='/home' element={<Home/>}/>
     <Route path='/books/add' element={<CreateBooks />} />
<Route path='/books/details/:id' element={<ShowBooks />} />
<Route path='/books/edit/:id' element={<EditBooks />} />
<Route path='/books/delete/:id' element={<DeleteBooks />} />

    </Routes>
  )
}

export default App
